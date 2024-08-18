import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;

  const MONGO_URI = `mongodb://${USERNAME}:${PASSWORD}@file-sharing-shard-00-00.g3qxx.mongodb.net:27017,file-sharing-shard-00-01.g3qxx.mongodb.net:27017,file-sharing-shard-00-02.g3qxx.mongodb.net:27017/?ssl=true&replicaSet=atlas-tnhgpk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=File-Sharing`;

  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
