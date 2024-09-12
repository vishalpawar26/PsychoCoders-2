import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to the DB");
    return;
  }

  try {
    const mongodbConnectionURI: string = process.env
      .MONGODB_CONNECTION_URI as string;
    const response = await mongoose.connect(mongodbConnectionURI || "");

    connection.isConnected = response.connections[0].readyState;
  } catch (error) {
    console.log("DB connection failed", error);
    process.exit();
  }
}

export default dbConnect;
