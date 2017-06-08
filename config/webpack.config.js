const path = require( 'path' );

module.exports =
{
	entry  : path.join( __dirname, '../src/index.js'),
	output :
    {
		path	 : path.join( __dirname, '../dist' ),
		filename : 'shaka.dist.js'
	 },
    module :
    {
        rules :
        [
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
};

