// eslint-disable-next-line no-shadow-restricted-names
const arguments = ['--require-module @babel/register', 'e2e/features/*/*.feature'].join(' ')

module.exports = {
  default: arguments
}
