'use server'

import { Db, MongoClient } from 'mongodb'

import { showItems } from '@/types/indexPage'

const db_uri = process.env.DB_URI

declare global {
  var _mongoClient: MongoClient | undefined
}

export async function getProducts(): Promise<showItems> {
  const dbProducts = await await mongoDB(async (db) => {
    const productsCollection = db?.collection('products')
    const products = await productsCollection
      ?.find()
      .sort({ time: -1 })
      .limit(3)
      .toArray()
  })
  return []
}

export async function mongoDB(action: (db?: Db) => any) {
  let db: Db | undefined
  let mongoClient: MongoClient | undefined
  if (process.env.NODE_ENV === 'development') {
    // development env
    // re-create a connect after used
    if (db_uri != undefined) {
      try {
        mongoClient = new MongoClient(db_uri)
        db = mongoClient.db()
      } catch {
        return 'Cannot connect to MongoDB'
      }
    } else {
      return 'DB_URI is undefined in .env'
    }
  } else {
    const connectToMongoDB = async () => {
      // release env
      // use the same connect till something error
      if (db_uri != undefined) {
        try {
          mongoClient = new MongoClient(db_uri)
          global._mongoClient = await mongoClient.connect()
          db = mongoClient.db()
        } catch {
          return 'Cannot connect to MongoDB'
        }
      } else {
        return 'DB_URI is undefined in .env'
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

  const returnValue = action(db)

  // now we have db
  if (process.env.NODE_ENV === 'development' && mongoClient !== undefined) {
    await mongoClient.close()
  }

  return returnValue
}
