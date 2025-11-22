const DishCard = ({ dish, togglePublish }) => {
    <div>
        <img src={dish.imageUrl} alt={dish.dishName} className="w-full h-40 object-cover rounded-lg" />
        <h2 className="text-xl font-semibold mt-2">{dish.dishName}</h2>
        <p className={`mt-1 ${dish.isPublished ? `text-green-600` : `text-red-600`}`}>
            {dish.isPublished ? "Published":"Unpublished"}
        </p>
        <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => {
                togglePublish(dish._id)
            }
        }>
            Toggle Publish
        </button>
    </div>
}

export default DishCard;