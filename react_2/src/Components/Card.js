function Card({ Name, Age }) {
  return (
    <div className="card">
      <h2>{Name}</h2>
      <p>Age: {Age}</p>
    </div>
  );
}

export default Card;
