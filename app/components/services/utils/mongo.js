import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      dbName: 'typology',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Connect to TYPOLOGY - SUCCESS")
  } catch (error) {
    throw new Error('Connect to TYPOLOGY - ERROR!!!');
  }
};