import React, { useEffect, useState } from "react";
import axios from "axios";
import socket from "../socket.js";
import DishCard from "../components/DishCard.jsx";
import { VITE_BACKEND_URL } from "../config.js";

const Dashboard = () => {
    const [dishes, setDishes] = useState([]);

    const fetchDishes = async () => {
        const { data } = await axios.get(`http://localhost:3333/api/v1/dishes/`);
        setDishes(data);
    };

    useEffect(() => {
        fetchDishes();
        socket.on("dishUpdated", (updatedDish) => {
            setDishes(prev =>
                prev.map(d => (d._id === updatedDish._id ? updatedDish : d))
            );
        });
        return () => socket.off("dishUpdated");
    }, []);

    const togglePublish = async (id) => {
        await axios.put(`http://localhost:3333/api/dishes/${id}/toggle`);
    };

    return (
        <div className="p-6 grid grid-cols-3 gap-6">
            {dishes.map((dish) => (
                <DishCard key={dish._id} dish={dish} togglePublish={togglePublish} />
            ))}
        </div>
    );
};

export default Dashboard;