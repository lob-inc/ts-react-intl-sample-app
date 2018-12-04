import * as React from 'react'

import Link from 'next/link'
import { RouterProps, withRouter } from 'next/router'

import * as Moment from 'moment'

import IntelMessage, { locales } from './../intl'
import { titles, comments, links } from './../intl/messages'

const defaultLanguage = 'ja'
const intl = new IntelMessage(defaultLanguage)

const getRemain = (): number =>
  Moment()
    .endOf('year')
    .diff(Moment(), 'days')

const getComment = (remain: number): string => {
  let message = comments.moreThanHalf
  if (remain < 31) {
    message = comments.lessThanOrEqualTo31days
  } else if (remain < 92) {
    message = comments.lessThanOrEqualTo92days
  } else if (remain < 183) {
    message = comments.lessThanHalf
  }
  return intl.format(message)
}

const getCurrentLanguage = (router?: RouterProps) => {
  if (!router || !router.query) {
    return defaultLanguage
  }
  const lang = router.query.lang as string
  return Object.keys(locales).includes(lang) ? lang : defaultLanguage
}

const getNextLanguage = (lang: string) => (lang === 'ja' ? 'en' : 'ja')

export default withRouter(({ router }) => {
  const lang = getCurrentLanguage(router)
  intl.setLanguage(lang)

  const remain = getRemain()
  const comment = getComment(remain)
  return (
    <>
      <h1>{intl.format(titles.index, { remain })}</h1>
      <p>{comment}</p>
      <Link href={{ pathname: '/', query: { lang: getNextLanguage(lang) } }}>
        <a>{intl.format(links.switchLanguage)}</a>
      </Link>
    </>
  )
})
