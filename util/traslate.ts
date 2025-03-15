export default function translate(
  locale: string,
  translationKey: translationKey | string | undefined,
): string | boolean | undefined {
  if (typeof translationKey === 'string') {
    return translationKey
  } else if (typeof translationKey === 'undefined') {
    return undefined
  } else {
    return translationKey[locale]
  }
}
