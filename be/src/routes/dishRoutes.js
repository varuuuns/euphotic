import express from "express";
import Dish from "../models/dish.js";

const router = express.Router();

export default function (io) {
    router.get("/", async (req, res) => {
        const dishes = await Dish.find();
        res.json(dishes);
    });

    router.put("/:id/toggle", async (req, res) => {
        const dish = await Dish.findById(req.params.id);
        if (!dish) return res.status(404).json({ message: "Dish not found" });

        dish.isPublished = !dish.isPublished;
        await dish.save();

        io.emit("dishUpdated", dish);
        res.json(dish);
    });

    return router;
}