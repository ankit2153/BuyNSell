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

const ItemSchema = new Schema({
  itemName: String,
  duration: Number,
  image: String,
  price: Number,
});

const Item = mongoose.models.Item || mongoose.model("Item", ItemSchema);

export default Item;
