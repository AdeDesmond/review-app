import mongoose from "mongoose";

export const connectDb = () => {
  try {
    mongoose.connect(process.env.DATABASE_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("database connected and running 🤡");
    });
    connection.on("error", (error) => {
      console.log(error);
      process.exit();
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      //TODO
      //Errors should be handled better
      console.log(err.message);
    } else {
      console.log("Something went wrong with the connection");
    }
  }
};
