import "./styles.css"
import Card from "./Components/Card";
import { useState } from "react";

export default function App()   {
 const [upvote, setUpvote] = useState(0);

 function like() {
setUpvote (upvote + 1);
 }
 const name = "Axel";
  
 return (
   <div className="App">
      {upvote}
      <button onClick={like}>👍🏼</button>
   <Card
         Name="Axel"
         Age= "17"
   />
   <Card
         Name="Camila"
         Age= "17" 
   />
   <Card
         Name="Evangelina"
         Age= "16"
   />
   <Card
            Name="Daniel"
            Age= "16"
   />
   </div>
)
;}