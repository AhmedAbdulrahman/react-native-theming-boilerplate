const defaultAlias = {
  src: './src/**',
  components: './src/components/',
  containers: './src/containers/',
  screens: './src/screens/',
  styles: './src/styles/',
  constants: './src/constants/',
  navigation: './src/navigation/',
  assets: './src/assets/',
  i18n: './i18n/',
  hooks: './src/hooks/',
  storage: './src/storage/',
  utils: './src/utils/',
}

const defaultExtensions = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.android.js',
  '.android.tsx',
  '.ios.js',
  '.ios.tsx',
]

module.exports = (api) => {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: defaultAlias,
          extensions: defaultExtensions,
        },
      ],
    ],
  }
}
