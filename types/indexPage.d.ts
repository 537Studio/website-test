import { StaticImageData } from 'next/image'

type showItems = showItem[]

interface showItem {
  name: string
  shortDescription: string
  image: StaticImageData | undefined
  size: string
  version: string
  platform: string[]
}

type showMembers = showMember[]
interface showMember {
  name: string
  shortDescription: shortDescription
  image: StaticImageData
  description: string
  gitee?: membersPlatform
  github?: membersPlatform
  bilibili?: membersPlatform
  blog?: membersPlatform
  email?: membersPlatform
}

interface shortDescription {
  name: string
  href?: string
}

interface membersPlatform {
  name: string
  href: string
}
