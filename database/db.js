const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const client = await mongoose.connect(
    "mongodb+srv://vivek77:VIVek77@cluster0.1jsbdxv.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0"
  );
  return client;
};

module.exports = connectToDatabase;
