const { defineConfig } = require("@vue/cli-service");
const UnoCSS = require('@unocss/webpack').default
const { transformerVariantGroup } = require('unocss')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('eslint')
      .tap(args => {
        args[0].fix = true
        return args
      })
  },
  configureWebpack: {
    plugins: [
      UnoCSS({
        transformers: [
          transformerVariantGroup(),
        ],
        shortcuts: [
          {
            btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
          },
        ]
      }),
    ],
  },
});
