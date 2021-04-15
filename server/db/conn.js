const mogoose = require('mongoose');

const DB= process.env.DATABASE;
mogoose.connect(DB , {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false

}).then(()=>{
    console.log('connection done');
}).catch((err)=> console.log(' connection failed'));