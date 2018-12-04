require('colors')
const path = require('path')
const fs = require('fs')
const loader = require('yaml-flat-loader')

fs.readFile(path.resolve(__dirname, './../intl/locales/ja.yml'), (err, raw) => {
  if (err) {
    return console.error('Not found ja.yml'.white.bgRed)
  }
  const errors = []
  const messages = JSON.parse(loader(raw))
  Object.keys(messages).forEach(key => {
    if (messages[key] && messages[key].length > 0) {
      return
    }
    errors.push(key)
  })
  if (errors.length === 0) {
    console.log('Translation has completed:)'.green)
    process.exit(0)
  }
  console.log('\nOh, these ids has no messages for ja_JP;'.red)
  console.log('\n======================================\n')
  errors.forEach(e => {
    console.log(`${e}`.yellow)
  })
  console.log('\n======================================\n')
  process.exit(1)
})
