import mongoose from "mongoose";

const dishSchema = mongoose.Schema({
    dishId: { type: Number, required: true, unique: true },
    dishName: { type: String, required: true },
    imageUrl: { type: String, required:true, default: "https://www.princechicken.com/Ewing/our-menu.jsp" },
    isPublished: { type: Boolean, required: true }
})

export default mongoose.model("Dish", dishSchema);