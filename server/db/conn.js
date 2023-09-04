const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const DB = 'mongodb+srv://harshraj:12345@cluster0.nv3uqrp.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})