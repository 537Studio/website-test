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
