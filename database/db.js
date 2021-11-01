import mongoose from "mongoose";

//connect mongoDB
const Connection = async (MONGODB_URI) => {
  const URL = MONGODB_URI;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB is Connected Successfully");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export default Connection;
