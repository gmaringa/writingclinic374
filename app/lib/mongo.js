import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('Database is connected')
    } else{
        try{
            await mongoose.connect(process.env.MONGO_STRING, {dbName: "Users"})
            isConnected = true;
        }
        catch(error){
            console.log(error)
        }
    }
}