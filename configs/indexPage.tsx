import { MdEmail, MdOutlineEmail } from 'react-icons/md'
import { SiBaidu, SiBilibili, SiGitee, SiGithub } from 'react-icons/si'

import Clock537 from '../app/images/537clock.jpg'
import Text537 from '../app/images/537text.png'
import liangmi from '../app/images/members/liangmi.png'
import pipishan from '../app/images/members/pipishan.png'
import rabbitMax from '../app/images/members/rabbit-max.png'
import sean537 from '../app/images/members/sean537.png'
import xinpro from '../app/images/members/xinpro.png'
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
      name: t('537Timer'),
      shortDescription: t('537TimerShortDescription'),
      image: Clock537,
      size: '1.84MB',
      version: 'v1.0',
      platform: [t('productPortable')],
    },
    {
      name: t('bucketIDCalculation'),
      shortDescription: t('bucketIDCalculationShortDescription'),
      image: undefined,
      size: '1.84MB',
      version: 'v1.3.1',
      platform: ['x64'],
    },
  ]
}
export const showMembers: showMembersType = [
  {
    name: 'Sean537',
    shortDescription: {
      name: 'Bilibili: @山地奥斯卡537',
      href: 'https://space.bilibili.com/3493272892738031',
    },
    description: '求知若饥，虚心若愚。\n 537工作室联合创始人之一。',
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
    },
    image: sean537,
  },
  {
    name: '良米',
    shortDescription: {
      name: 'Bilibili: @良米良米',
      href: 'https://space.bilibili.com/1964165864',
    },
    description:
      '一位在科技区和知识区徘徊的up主。\n 学习Rust与Go和各种前端框架的米。\n 废物一个。',
    github: {
      name: 'Liangmiqwq',
      href: 'https://github.com/liangmiqwq',
    },
    bilibili: {
      name: '良米良米',
      href: 'https://space.bilibili.com/1964165864',
    },
    image: liangmi,
  },
  {
    name: '皮皮善哇',
    shortDescription: {
      name: 'Bilibili: @皮皮善哇',
      href: 'https://space.bilibili.com/511402656',
    },
    description:
      '生活就像海洋，只有意志坚强的人，才能到达彼岸。\n 一名菜鸡编程爱好者。Bilibili为个人日常号, 有事请私信。',
    gitee: {
      name: 'Pi',
      href: 'https://gitee.com/pidream',
    },
    github: {
      name: '皮皮善哇',
      href: 'https://space.bilibili.com/511402656',
    },
    image: pipishan,
  },
  {
    name: 'Rabbit max',
    shortDescription: { name: "It's not until you fall that you fly." },
    description: '我是爱Coding的兔呀 \n Rabbit工作室联合创始人 \n 哇呜! ',
    blog: {
      name: '个人小站',
      href: 'https://cncyx.cn',
    },
    image: rabbitMax,
  },
  {
    name: 'Xinpro',
    shortDescription: {
      name: 'https://www.pyxia.org',
      href: 'https://www.pyxia.org',
    },
    description:
      '537Studio服务提供 \n 一位喜欢玩服务器的资深mjj \n 喜欢玩各种有趣的技术Docker、Node.js等',
    blog: {
      name: '皮益侠',
      href: 'https://www.pyxia.org/',
    },
    email: {
      name: 'chentaiyang163@163.com',
      href: 'chentaiyang163@163.com',
    },
    image: xinpro,
  },
]

export function getContacts(): contactsType {
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
      name: '537软件吧',
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
