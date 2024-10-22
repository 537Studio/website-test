type showItemsDB = showItemDB[]

interface showItemDB {
  _id: string
  nameTransID: string // use next-intl ID
  shortDescriptionTransID: string // use next-intl ID
  image: string // use url
  size: string
  version: string
  platformTransID: string[] // use next-intl ID
  time: number
}
