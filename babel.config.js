const defaultAlias = {
  '@src': './src',
  '@components': './src/components',
  '@containers': './src/containers',
  '@screens': './src/screens',
  '@theme': './src/theme',
  '@constants': './src/constants',
  '@navigation': './src/navigation',
  '@assets': './assets',
  '@i18n': './i18n',
  '@hooks': './src/hooks',
  '@storage': './src/storage',
  '@utils': './src/utils',
}

const defaultExtensions = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.d.ts',
  '.android.js',
  '.android.jsx',
  '.android.ts',
  '.android.tsx',
  '.ios.js',
  '.ios.jsx',
  '.ios.ts',
  '.ios.tsx',
  '.web.js',
  '.web.jsx',
  '.web.ts',
  '.web.tsx',
  '.es',
  '.es6',
  '.mjs',
]

module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: defaultAlias,
          extensions: defaultExtensions,
        },
      ],
    ],
  }
}
