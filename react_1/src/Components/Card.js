import "./card.css";

function Heading() {
  return <h1>My Website</h1>;
}

function Card(props) {
  return (
    <div className="card">
      <Heading />
      <h2>{props.Name}</h2>
      <img src="TOMMY.webp" alt="avatar_img" />
      <p>Age: {props.Age}</p>
    </div>
  );
}

export default Card;
