import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    dishId: { type: String, required: true, unique: true },
    dishName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isPublished: { type: Boolean, default: false }
});

export default mongoose.model("Dish", dishSchema);