import "./Card.css";



function Card({Name, Age})  {
return (

    <div className="card">
        <img src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSunrise&psig=AOvVaw2yMvojFjubW4jpmnGLuEzb&ust=1733435776949000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC9kdCNj4oDFQAAAAAdAAAAABAE" alt="sunrise"
        width="200px"/>
        <h1>(Name)</h1>
        <p>  {Age} </p>
    </div>
    )
;}

export default Card;