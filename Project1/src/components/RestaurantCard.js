const RestaurantCard = ({
  image,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="restaurant-card">
      <img className="res-logo" src={image} alt={name} />

      <h2>{name}</h2>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{area}</h4>

      <div className="card-footer">
        <h4>⭐ {avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;