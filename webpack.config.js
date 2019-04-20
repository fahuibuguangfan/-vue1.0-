const path = require('path');
module.exports={
    mode:'development',
    entry:'./app.js',
    output:{
        path:path.resolve(__dirname,'dest'),
        filename:'bundle.min.js'
    },
    module:{
        rules:[
            {test:/\.css$/i,use:['style-loader','css-loader']}
        ]
    }
}