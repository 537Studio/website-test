'use server'

import { Db, MongoClient, MongoClientOptions, WithId } from 'mongodb'

import { showItems } from '@/types/indexPage'

const db_uri = process.env.DB_URI

declare global {
  var _mongoClient: MongoClient | undefined
}

export async function getProducts(
  t: any,
): Promise<[showItems, string | undefined]> {
  let dbProducts: WithId<showItemDB>[] | undefined
  try {
    dbProducts = await await mongoDB(async (db) => {
      try {
        const productsCollection = db?.collection('products')
        const products = await productsCollection
          ?.find()
          .sort({ time: -1 })
          .limit(3)
          .toArray()
        return products
      } catch {
        throw new Error('errCannotConnect')
      }
    })
  } catch (e) {
    if (e instanceof Error) {
      return [[], e.message]
    }
  }

  if (dbProducts?.length === 3) {
    const products: showItems = dbProducts.map((dbProducts) => ({
      name: t(dbProducts.nameTransID),
      shortDescription: t(dbProducts.shortDescriptionTransID), // get translate
      image: dbProducts.image,
      size: dbProducts.size,
      version: dbProducts.version,
      platform: dbProducts.platformTransID.map((eachID) => t(eachID)),
    }))

    return [products, undefined]
  } else {
    return [[], 'errNotEnoughProducts']
  }
}

export async function mongoDB(action: (db?: Db) => any) {
  let db: Db | undefined
  let mongoClient: MongoClient | undefined
  const dbConfig: MongoClientOptions = {
    connectTimeoutMS: 1000,
    serverSelectionTimeoutMS: 1000,
    socketTimeoutMS: 5000,
    retryWrites: true,
  }
  if (process.env.NODE_ENV === 'development') {
    // development env
    // re-create a connect after used
    if (db_uri != undefined) {
      try {
        mongoClient = new MongoClient(db_uri, dbConfig)
        db = mongoClient.db()
      } catch {
        throw new Error('errCannotConnect')
      }
    } else {
      throw new Error('errDbUriUndefined')
    }
  } else {
    const connectToMongoDB = async () => {
      // release env
      // use the same connect till something error
      if (db_uri != undefined) {
        try {
          mongoClient = new MongoClient(db_uri, dbConfig)
          global._mongoClient = await mongoClient.connect()
          db = mongoClient.db()
        } catch {
          throw new Error('errCannotConnect')
        }
      } else {
        throw new Error('errDbUriUndefined')
      }
    }
    if (global._mongoClient === undefined) {
      // mongoClient undefined
      await connectToMongoDB()
    } else {
      mongoClient = global._mongoClient
      try {
        await mongoClient.db().command({ ping: 1 })
      } catch {
        await connectToMongoDB()
      }
    }
  }

  let returnValue
  try {
    returnValue = action(db)
  } catch (e) {
    throw e
  }

  // now we have db
  if (process.env.NODE_ENV === 'development' && mongoClient !== undefined) {
    try {
      await mongoClient.db().command({ ping: 1 })
      await mongoClient.close()
    } catch {}
  }

  return returnValue
}
