import mongoose from "mongoose";


const connectDb = async()=>{
    try {
        let connect = await mongoose.connect(process.env.MONGO_URL)

        console.log('MongoDb Connected')
    } catch (error) {
        console.log(error)
    }
}



export default connectDb



// import mongoose from 'mongoose'
// // import dotenv from 'dotenv'
// // dotenv.config()

// const connectDb = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.MONGO_URL)
//         console.log('MongoDB Connected Successfully')
//     } catch (error) {
//         console.log(error) 
//     }
// }
// //mongodb+srv://backendtodo:sample@backendtodo.bsv33.mongodb.net/?retryWrites=true&w=majority&appName=BackendTodo
// //backendtodo:sample@backendtodo.bsv33.mongodb.net/?retryWrites=true&w=majority&appName=BackendTodo
// export default connectDb



// // import mongoose from "mongoose";
// // import dotenv from 'dotenv'
// // dotenv.config()

// // const connectDb = async () => {
// //     try {
// //         const connect = await mongoose.connect(process.env.MONGO_URL);
        
// //         console.log('MongoDB Connected Successfully')
// //         // console.log("MONGO_URI:", process.env.MONGO_URL);

// //     } catch (error) {
// //         console.log(error)  
// //     }
// // }
// // //mongodb+srv://backendtodo:sample@backendtodo.bsv33.mongodb.net/?retryWrites=true&w=majority&appName=BackendTodo

// // export default connectDb