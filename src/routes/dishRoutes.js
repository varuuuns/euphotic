import express from "express";
import Dish from "../models/dish";

const dishRouter = express.Router();

export default function(io){
    dishRouter.get("/", async (req, res) => {
        try {
            const dishes = await Dish.find();
            res.json({ Dishes: dishes });
        }
        catch (err) {
            console.log(`error from routes/dishRoutes.js: ${err}`);
        }
    })

    dishRouter.put("/:id/toggle", async (req, res) => {
        const dish = await Dish.findById(req.params.id);
        if (!dish) return res.status(400).json({ msg: "invalid dish" });

        dish.findByIdAndUpdate(!dish.isPublished);
        io.emit("dish status updated", dish);

        res.json({ Dish: dish });
    })

    return dishRouter;
}