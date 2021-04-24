const { getDefaultConfig } = require('@expo/metro-config')

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname)
  console.log('sourceExts', [...sourceExts, 'otf', 'svg'])
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'otf', 'svg'],
    },
  }
})()
