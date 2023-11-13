const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
const FileManagerPlugin = require('filemanager-webpack-plugin')
const outputDir = 'output'
const staticVersion = 'BUILD_VERSION'
module.exports = {
    publicPath: process.env.VUE_APP_PUBLICPATH,
    outputDir: outputDir,
    assetsDir: staticVersion,
    // 生产环境 sourceMap
    productionSourceMap: false,
    devServer: {
        port: 8080,
        hot: true
    },
    css: {
        // 是否构建样式地图
        sourceMap: false,
        // css分离
        extract: true,
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'],
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            },
            less: {
                modifyVars: {
                },
                javascriptEnabled: true
            }
        }
    },
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('src'))
        // 使用less变量
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    configureWebpack: (config) => { // 开启gzip
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(new FileManagerPlugin({
                onEnd: {
                    move: [
                        { source: './version.txt', destination: `./${outputDir}/version.txt` }
                    ]
                }
            }))
        }
    }
}

function addStyleResource (rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, 'src/styles/common.less')
            ]
        })
}
