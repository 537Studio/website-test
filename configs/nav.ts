export const getLinks = (t: any) => {
  return [
    { link: '/docs', name: t('document') },
    { link: '/about', name: t('about') },
    { link: 'https://gitee.com/FTS-537Studio', name: t('gitee') },
    { link: 'https://github.com/537Studio', name: t('github') },
  ]
}

export const getMembersFirst = (t: any) => {
  return [
    { link: t('Sean537ShortDescritionHref'), name: 'Sean537' },
    { link: 'https://github.com/liangmiqwq', name: t('Liangmi') },
    { link: t('PiPishanShortDescriptionHref'), name: t('PiPishan') },
    { link: 'https://cncyx.cn', name: 'Rabbit Max' },
  ]
}

export const getMembersSecond = (t: any) => {
  return [
    { link: 'https://www.pyxia.org', name: 'Xinpro' },
    { link: 'https://yz-mm.fun/', name: t('yz_mm') },
  ]
}

interface languagesInterface {
  [key: string]: any
}

export const languages: languagesInterface = {
  zh_cn: {
    icon: '\uD83C\uDDE8\uD83C\uDDF3',
    name: '简体中文',
  },
  en_us: {
    icon: '\uD83C\uDDFA\uD83C\uDDF8',
    name: 'English',
  },

  zh_hk: {
    icon: '\uD83C\uDDED\uD83C\uDDF0',
    name: '繁体中文',
  },
}
