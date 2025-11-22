import axios from "axios";
import { useState } from "react"
import { VITE_BACKEND_URL } from "../config";
import socket from "../socket";

const Dashboard = () => {
    const [dishes, setDishes] = useState([]);

    const fetchDishes = async () => {
        const { data } = await axios.get(`${VITE_BACKEND_URL}/api/v1/dishes`);
        setDishes(data);
    }

    useEffect(() => {
        fetchDishes();

        socket.on("dishUpdated", (updateDish) => {
            setDishes(prev =>
                prev.map(d => d._id === updateDish._id ? updateDish : d));
        })

        return () => socket.off("dishUpdated");
    })

    const togglePublish = async (id) => {
        await axios.put(`${VITE_BACKEND_URL}/api/v1/${id}/toggle`);
    }

    return (
        <div className="p-6 grid grid-cols-3 gap-6">
            {dishes.map((dish)=>{
                <DishCard key={dish._id} dish={dish} togglePublish={togglePublish} />
            })}
        </div>
    )
}

export default Dashboard;