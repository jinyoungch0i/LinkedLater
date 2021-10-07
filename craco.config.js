module.exports = {
   webpack: {
       configure: (webpackConfig, {env, paths}) => {
           return {
               ...webpackConfig,
               entry: {
                   main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
                   content: './src/linkedInLater.js',
               },
               output: {
                   ...webpackConfig.output,
                   filename: 'static/js/content.js',
               },
               optimization: {
                   ...webpackConfig.optimization,
                   runtimeChunk: false,
               }
           }
       },
   }
}
