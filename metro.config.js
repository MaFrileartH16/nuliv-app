const { getDefaultConfig } = require('expo/metro-config')
const { withTamagui } = require('@tamagui/metro-plugin')

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
})

config.resolver.sourceExts.push('mjs')

module.exports = withTamagui(config, {
  config: './tamagui.config.ts',
  components: ['tamagui'],
  outputCSS: './tamagui-web.css',
  cssInterop: true,
})
