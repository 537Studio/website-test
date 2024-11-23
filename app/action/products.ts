import { WithId } from 'mongodb'

import { showItems } from '@/types/indexPage'

import { mongoDB } from './mongodb'

export async function getProducts(
  t: any,
): Promise<[showItems, string | undefined]> {
  let dbProducts: WithId<showItemDB>[] | undefined
  try {
    dbProducts = await mongoDB(async (db) => {
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
