import Card from "./Components/Card";
import { useState } from "react";

export default function App() {
  const [upvote, setUpvote] = useState(0);

  function like() {
    setUpvote(upvote + 1);
  }

  return (
    <div className="App">
      <h1>Like Counter</h1>
      <p>{upvote}</p>
      <button onClick={like}>👍🏼</button>
      <Card Name="Axel" Age="17" />
      <Card Name="Camila" Age="17" />
      <Card Name="Evangelina" Age="16" />
      <Card Name="Daniel" Age="16" />
    </div>
  );
}
