'use server'

import { Db, MongoClient } from 'mongodb'

const db_uri = process.env.DB_URI

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client
let clientPromise: Promise<MongoClient> | undefined
let error: string | undefined = undefined
if (process.env.NODE_ENV !== 'development') {
  if (!global._mongoClientPromise) {
    if (db_uri != undefined) {
      try {
        client = new MongoClient(db_uri)
        global._mongoClientPromise = client.connect()
      } catch {
        error = 'Cannot connect to MongoDB'
      }
    } else {
      error = 'DB_URI is undefined in .env'
    }
  }
  clientPromise = global._mongoClientPromise
}

export async function useMongoDB(action: (db?: Db) => {}) {
  try {
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
      if (error === undefined) {
        mongoClient = await (clientPromise as Promise<MongoClient>)
        db = mongoClient.db()
      }
    }

    action(db)

    // now we have db
    if (process.env.NODE_ENV === 'development' && mongoClient !== undefined) {
      await mongoClient.close()
    }
  } catch {}
}
