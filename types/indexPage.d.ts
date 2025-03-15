import { StartupSnapshot } from 'v8'
import { StaticImageData } from 'next/image'

type showItems = showItem[]

interface showItem {
  name: translationKey
  shortDescription: translationKey
  image: StaticImageData | string
  size: string
  version: string
  platform: (translationKey | string)[]
}

type showMembers = showMember[]
interface showMember {
  name: translationKey | string
  shortDescription: shortDescription
  image: StaticImageData
  description: translationKey
  gitee?: membersPlatform
  github?: membersPlatform
  bilibili?: membersPlatform
  blog?: membersPlatform
  email?: membersPlatform
  [key: string]: any
}

type contacts = contact[]
interface contact {
  name: translationKey
  icon: any
  // icon: React.ReactNode
  // icon: ReactNode
  href: string
}

interface shortDescription {
  name: translationKey | string
  href?: translationKey | string
}

interface membersPlatform {
  name: string | translationKey
  href: string
  show?: boolean | translationKey
}
