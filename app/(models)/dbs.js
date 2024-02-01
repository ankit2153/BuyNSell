import mongoose, { Schema } from "mongoose";

mongoose
  .connect("mongodb+srv://user:user21@cluster0.pesurwj.mongodb.net/dbs1")
  .then(() => {
    console.log(
      "Connected to MongoDB",
      mongoose.connection.db.databaseName,
      "at",
      mongoose.connection.host,
      ":",
      mongoose.connection.port
    );
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
