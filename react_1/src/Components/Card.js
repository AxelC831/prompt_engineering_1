function Heading() {
    return <h1>My website </h1>;
}




function Card(props )  {
return (

    <div className="imagemy-style">
        {}
        <h2>{props.name}</h2>
        <img src="TOMMY.webp" alt="avatar_img" />
        <p> {props.tel} </p>
        <p>{props.email}</p>
    </div>
    );
}

