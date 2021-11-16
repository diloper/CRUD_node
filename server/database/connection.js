const mongooes = require('mongoose');
const connectDB=async()=>{
    try {
        // mongodb connection string 
        const con=await mongooes.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        console.log(`MongoDB connected : ${con.connection.host}`);
        // console.log(`MongoDB connected : ${con.con}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports =connectDB



