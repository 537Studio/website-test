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
      name: {
        en_us: '537 Text Editor',
        zh_hk: '537文本編輯器',
        zh_cn: '537文本编辑器',
      },
      shortDescription: {
        en_us: 'Think Differently',
        zh_cn: '非同凡「想」',
        zh_hk: '非同凡「想」',
      },
      image: Text537,
      size: '602KB',
      version: 'v2.2',
      platform: ['x86', 'x64', t('productPortable')],
    },
    {
      name: {
        zh_cn: '537秒表',
        zh_hk: '537秒表',
        en_us: '537 Clock',
      },
      shortDescription: {
        zh_cn: '少即是多',
        zh_hk: '少即是多',
        en_us: 'Less is More',
      },
      image: Clock537,
      size: '1.84MB',
      version: 'v1.1',
      platform: [t('productPortable')],
    },
    {
      name: {
        en_us: 'Calculate Barrel Moving Student ID',
        zh_cn: '计算搬桶学号',
        zh_hk: '計算搬桶學號',
      },
      shortDescription: {
        zh_cn: '初出茅庐',
        zh_hk: '初出茅廬',
        en_us: 'First of all',
      },
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
      name: {
        en_us: 'Github: @Sean537',
        zh_hk: 'Github: @Sean537',
        zh_cn: 'Bilibili: @山地奧斯卡537',
      },
      href: {
        zh_cn: 'https://space.bilibili.com/3493272892738031',
        en_us: 'https://github.com/Sean537',
        zh_hk: 'https://github.com/Sean537',
      },
    },
    description: {
      en_us: 'Stay hungry, stay foolish. \n Co-founder of 537 studio.',
      zh_hk: '求知若飢，虛心若愚。\n 537工作室聯合創始人。',
      zh_cn: '求知若饥，虚心若愚。\n 537工作室联合创始人。',
    },
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
      show: {
        zh_cn: true,
        en_us: false,
        zh_hk: true,
      },
    },
    image: sean537,
  },
  {
    name: {
      zh_cn: '良米',
      en_us: 'Liangmi',
      zh_hk: '良米',
    },
    shortDescription: {
      name: {
        zh_cn: 'Bilibili: @良米良米',
        zh_hk: 'Github: @liangmiqwq',
        en_us: 'Github: @liangmiqwq',
      },
      href: {
        zh_cn: 'https://space.bilibili.com/1964165864',
        zh_hk: 'https://github.com/liangmiqwq',
        en_us: 'https://github.com/liangmiqwq',
      },
    },
    description: {
      en_us:
        'A video creator at Bilibili. Learning Rust, Go and the other web frameworks, Also the developer of this site. \n A piece of trash',
      zh_hk:
        '一位在科技區和知識區徘徊的up主。\n 學習Rust與Go和各種前端框架的米, 也是本站的開發者。\n 废物一個。',
      zh_cn:
        '一位在科技区和知识区徘徊的up主。\n 学习Rust与Go和各种前端框架的米, 也是本站的開發者。\n 废物一个。',
    },
    github: {
      name: 'Liangmiqwq',
      href: 'https://github.com/liangmiqwq',
    },
    bilibili: {
      name: '良米良米',
      href: 'https://space.bilibili.com/1964165864',
      show: {
        en_us: false,
        zh_cn: true,
        zh_hk: false,
      },
    },
    email: {
      name: 'lm@lmfans.cn',
      href: 'mailto: lm@lmfans.cn',
    },
    image: liangmi,
  },
  {
    name: {
      zh_cn: '皮皮善哇',
      zh_hk: '皮皮善哇',
      en_us: 'PiPishan',
    },
    shortDescription: {
      name: {
        en_us: 'Gitee: @Pi',
        zh_cn: 'Bilibili: @皮皮善哇',
        zh_hk: 'Bilibili: @皮皮善哇',
      },
      href: {
        zh_cn: 'https://space.bilibili.com/511402656',
        zh_hk: 'https://space.bilibili.com/511402656',
        en_us: 'https://gitee.com/pidream',
      },
    },
    description: {
      zh_cn:
        '生活就像海洋，只有意志坚强的人，才能到达彼岸。\n 一名菜鸡编程爱好者。',
      zh_hk:
        '生活就像海洋，只有意志堅強的人，才能到達彼岸。\n 一名菜雞編程愛好者。',
      en_us:
        'The life like ocean，only if you have strong will, can you reach the other side. \n A code lover but still a beginner.',
    },
    gitee: {
      name: 'Pi',
      href: 'https://gitee.com/pidream',
    },
    bilibili: {
      name: '皮皮善哇',
      href: 'https://space.bilibili.com/511402656',
      show: {
        zh_cn: true,
        zh_hk: false,
        en_us: false,
      },
    },
    image: pipishan,
  },
  {
    name: 'Rabbit Max',
    shortDescription: {
      name: "It's not until you fall that you fly.",
    },
    description: {
      zh_cn: '我是爱Coding的兔呀 \n Rabbit工作室联合创始人 \n 哇呜! ',
      zh_hk: '我是愛Coding的兔呀 \n Rabbit工作室聯合創始人 \n 哇嗚!',
      en_us:
        "I'm a rabbit who likes code. \n Co-founder of Rabbit Studio \n Wah-oo! ",
    },
    blog: {
      name: {
        en_us: 'Personal Website',
        zh_cn: '个人小站',
        zh_hk: '個人小站',
      },
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
    description: {
      zh_cn:
        '537Studio服务提供 \n 一位喜欢玩服务器的资深mjj \n 喜欢玩各种有趣的技术Docker、Node.js等',
      zh_hk:
        '537Studio服務提供 \n 一位喜歡玩伺服器的資深mjj \n 喜歡玩各種有趣的技術Docker、Node.js等',
      en_us:
        'The 537 Studio Service provider. \n A mjj who likes using server. \n Like to use interesting tools like Node.js, Docker and so on.',
    },
    blog: {
      name: {
        en_us: 'Pyxia',
        zh_cn: '皮益俠',
        zh_hk: '皮益俠',
      },
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
    name: {
      zh_cn: '一只铭铭',
      zh_hk: '一只銘銘',
      en_us: 'yz_mm',
    },
    shortDescription: {
      name: 'http://yz-mm.fun/',
      href: 'http://yz-mm.fun/',
    },
    description: {
      zh_hk:
        '537Lite項目負責人 \n 既是大佬也是萌新的神奇up主 \n "技術宅拯救世界!" ——米哈游',
      zh_cn:
        '537Lite项目负责人 \n 既是大佬也是萌新的神奇up主 \n "技术宅拯救世界!" ——米哈游',
      en_us:
        'Custodian in program 537Lite. \n The big guy, and a new guy. \n "Tech otakus save the world!" --Hoyoverse',
    },
    bilibili: {
      name: '一只铭铭yzmm',
      href: 'https://space.bilibili.com/1456639471',
      show: {
        zh_cn: true,
        zh_hk: false,
        en_us: false,
      },
    },
    email: {
      name: '3141600296@qq.com',
      href: 'mailto:3141600296@qq.com',
    },
    blog: {
      name: {
        en_us: 'Personal Homepage',
        zh_hk: '個人主頁',
        zh_cn: '个人主页',
      },
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
    description: {
      zh_cn:
        '537工作室不知名的后勤人员 \n 喜欢折腾网络也喜欢玩游戏 \n 欢迎访问我的小站',
      en_us:
        'An unpopular rear service personnel at 537 Studio. \n Enjoy thinking with Internet and playing games. \n Welcome to visit my website.',
      zh_hk:
        '537工作室不知名的後勤人員 \n 喜歡折騰網絡也喜歡玩遊戲 \n 歡迎訪問我的小站',
    },
    blog: {
      name: {
        zh_cn: '我的小站',
        zh_hk: '我的小站',
        en_us: 'My Website',
      },
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
