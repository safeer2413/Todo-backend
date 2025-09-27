import mongoose from "mongoose";


const connectDb = async()=>{
    try {
        let db = await mongoose.connect(process.env.MONGO_URL)

        console.log('MongoDb Connected SuccessFully')
    } catch (error) {
        console.log(error)
    }
}



export default connectDb