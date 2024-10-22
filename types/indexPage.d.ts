import { StaticImageData } from 'next/image'

type showItems = showItem[]

interface showItem {
  name: string
  shortDescription: string
  image: StaticImageData | string
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
  [key: string]: any
}

type contacts = contact[]
interface contact {
  name: string
  icon: any
  // icon: React.ReactNode
  // icon: ReactNode
  href: string
}

interface shortDescription {
  name: string
  href?: string
}

interface membersPlatform {
  name: string
  href: string
  show?: string
}
