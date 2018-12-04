import { addLocaleData, IntlProvider } from 'react-intl'
import * as en from 'react-intl/locale-data/en'
import * as ja from 'react-intl/locale-data/ja'

addLocaleData([...ja, ...en])

export const locales = {
  en: require('./locales/en.yml'),
  ja: require('./locales/ja.yml'),
}

export default class IntlMessage {
  protected intl: ReactIntl.InjectedIntl
  constructor(locale?: string) {
    if (locale) {
      this.intl = this.makeIntlInstance(locale)
    }
  }
  public format(
    messageDescriptor: ReactIntl.FormattedMessage.MessageDescriptor,
    values?: { [key: string]: ReactIntl.MessageValue }
  ): string {
    return this.intl.formatMessage.bind(this.intl)(messageDescriptor, values)
  }
  public setLanguage(locale: string) {
    this.intl = this.makeIntlInstance(locale)
  }
  protected makeIntlInstance(locale: string): ReactIntl.InjectedIntl {
    const intlProvider = new IntlProvider({
      locale,
      messages: locales[locale],
    })
    return intlProvider.getChildContext().intl
  }
}
