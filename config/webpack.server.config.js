const webpack = require( 'webpack' );
const path    = require( 'path' );

module.exports =
{
    devtool : 'inline-source-map',
    entry   :
    [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join( __dirname, '../src/index.js' ),
    ],
    output :
    {
        filename   : 'shaka.dist.js',
        path       : path.join( __dirname, '../dist' ),
        publicPath : '/static/'
    },
    resolve :
    {
        modules : [path.join( __dirname, '../src' ), path.join( __dirname, '../node_modules' )]
    },
    module :
    {
        rules :
        [
            {
                test : /\.css$/,
                use :
                [
                    'style-loader',
                    {
                        loader  : 'css-loader',
                        options : { modules: true, importLoaders: 1 }
                    }
                ]
            },
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                use :
                [
                    {
                        loader  : 'babel-loader',
                        options : { presets: ['es2015', 'react', 'stage-2'] }
                    }
                ]
            }
        ]
    },
    plugins :
    [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer :
    {
        host : 'localhost',
        port : 3000,
        hot  : true
    }
};