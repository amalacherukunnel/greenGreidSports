const mongoose=require('mongoose')
const connectDB=async()=>{
    // 'mongodb://127.0.0.1:27017/greengrid'
    try {
        await mongoose.connect('mongodb+srv://kelvingeorge:DCgrBr1QEXv8DBha@cluster0.wtozdwi.mongodb.net/')
    console.log('connected to mongodb')
    } catch (error) {
        console.log(error);
    }
    
}
module.exports=connectDB