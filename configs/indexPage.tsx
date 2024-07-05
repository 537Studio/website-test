import { MdEmail } from 'react-icons/md'
import { SiBaidu, SiBilibili, SiGitee, SiGithub } from 'react-icons/si'

import Clock537 from '../app/images/537clock.jpg'
import Text537 from '../app/images/537text.png'
import clash from '../app/images/members/clash.jpg'
import liangmi from '../app/images/members/liangmi.png'
import pipishan from '../app/images/members/pipishan.png'
import rabbitMax from '../app/images/members/rabbit-max.png'
import sean537 from '../app/images/members/sean537.png'
import xinpro from '../app/images/members/xinpro.png'
import yz_mm from '../app/images/members/yz_mm.jpg'
import {
  contacts as contactsType,
  showItems as showItemsType,
  showMembers as showMembersType,
} from '../types/indexPage.d'

export function getShowItems(t: any): showItemsType {
  return [
    {
      name: t('537TextEditor'),
      shortDescription: t('537TextEditorShortDescription'),
      image: Text537,
      size: '602KB',
      version: 'v2.2',
      platform: ['x86', 'x64', t('productPortable')],
    },
    {
      name: t('537Clock'),
      shortDescription: t('537ClockShortDescription'),
      image: Clock537,
      size: '1.84MB',
      version: 'v1.1',
      platform: [t('productPortable')],
    },
    {
      name: t('CBMSID'),
      shortDescription: t('CBMSIDShortDescription'),
      image: Clock537,
      size: '1.84MB',
      version: 'v1.3.1',
      platform: ['x64'],
    },
  ]
}
export const getShowMembers = (t: any): showMembersType => [
  {
    name: 'Sean537',
    shortDescription: {
      name: t('Sean537ShortDescritionName'),
      href: t('Sean537ShortDescritionHref'),
    },
    description: t('Sean537Description'),
    gitee: {
      name: 'Sean537',
      href: 'https://gitee.com/sean537',
    },
    github: {
      name: 'Sean537',
      href: 'https://github.com/Sean537',
    },
    bilibili: {
      name: '山地奥斯卡537',
      href: 'https://space.bilibili.com/3493272892738031',
      show: t('MemberCardBilibiliShow'),
    },
    image: sean537,
  },
  {
    name: t('Liangmi'),
    shortDescription: {
      name: t('LiangmiShortDescriptionName'),
      href: 'https://space.bilibili.com/1964165864',
    },
    description: t('LiangmiDescription'),
    github: {
      name: 'Liangmiqwq',
      href: 'https://github.com/liangmiqwq',
    },
    bilibili: {
      name: '良米良米',
      href: 'https://space.bilibili.com/1964165864',
      show: t('MemberCardBilibiliShow'),
    },
    email: {
      name: 'lm@lmfans.cn',
      href: 'mailto: lm@lmfans.cn',
    },
    image: liangmi,
  },
  {
    name: t('PiPishan'),
    shortDescription: {
      name: t('PiPishanShortDescriptionName'),
      href: t('PiPishanShortDescriptionHref'),
    },
    description: t('PiPishanDescription'),
    gitee: {
      name: 'Pi',
      href: 'https://gitee.com/pidream',
    },
    bilibili: {
      name: '皮皮善哇',
      href: 'https://space.bilibili.com/511402656',
      show: t('MemberCardBilibiliShow'),
    },
    image: pipishan,
  },
  {
    name: 'Rabbit Max',
    shortDescription: { name: "It's not until you fall that you fly." },
    description: t('RabbitMaxDescription'),
    blog: {
      name: t('RabbitMaxBlog'),
      href: 'https://cncyx.cn',
    },
    image: rabbitMax,
  },
  {
    name: 'Xinpro',
    shortDescription: {
      name: 'https://www.nxtf.net',
      href: 'https://www.nxtf.net',
    },
    description: t('XinproDescription'),
    blog: {
      name: t('XinproBlog'),
      href: 'https://www.nxtf.net',
    },
    email: {
      name: 'chentaiyang163@163.com',
      href: 'mailto:chentaiyang163@163.com',
    },
    image: xinpro,
  },
  {
    image: yz_mm,
    name: t('yz_mm'),
    shortDescription: {
      name: 'http://yz-mm.fun/',
      href: 'http://yz-mm.fun/',
    },
    description: t('yz_mmDescription'),
    bilibili: {
      name: '一只铭铭yzmm',
      href: 'https://space.bilibili.com/1456639471',
      show: t('MemberCardBilibiliShow'),
    },
    email: {
      name: '3141600296@qq.com',
      href: 'mailto:3141600296@qq.com',
    },
    blog: {
      name: t('yz_mmBlog'),
      href: 'https://yz-mm.fun/',
    },
  },
  {
    name: 'Clash',
    image: clash,
    shortDescription: {
      name: 'http://dogemandogeman.top/',
      href: 'http://dogemandogeman.top/',
    },
    description: t('ClashDescription'),
    blog: {
      name: t('ClashBlog'),
      href: 'http://dogemandogeman.top/',
    },
  },
]

export function getContacts(t: any): contactsType {
  return [
    {
      name: 'Gitee',
      href: 'https://gitee.com/FTS-537Studio',
      icon: <SiGitee />,
    },
    {
      name: 'Github',
      href: 'https://github.com/537Studio',
      icon: <SiGithub />,
    },
    {
      name: t('537SoftwareBar'),
      href: 'https://tieba.baidu.com/f?kw=537%E8%BD%AF%E4%BB%B6',
      icon: <SiBaidu />,
    },
    {
      name: 'BiliBili',
      href: 'https://space.bilibili.com/3493272892738031',
      icon: <SiBilibili />,
    },
    {
      name: 'Email',
      href: 'mailto:hello@537studio.com',
      icon: <MdEmail />,
    },
  ]
}
