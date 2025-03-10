import Card from "./components/Card";
import { useState } from "react";

export default function App() {
  const [upvote, setUpvote] = useState(0);
  const [people, setPeople] = useState([
    { Name: "Axel", Age: 17 },
    { Name: "Camila", Age: 17 },
    { Name: "Evangelina", Age: 16 },
    { Name: "Daniel", Age: 16 }
  ]);

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  function like() {
    setUpvote((prevUpvote) => prevUpvote + 1);
  }

  function addPerson(event) {
    event.preventDefault();
    if (newName && newAge) {
      setPeople([...people, { Name: newName, Age: newAge }]);
      setNewName("");
      setNewAge("");
    }
  }

  return (
    <div className="App">
      <h1>Like Counter</h1>
      <p>{upvote}</p>
      <button onClick={like}>👍🏼</button>

      {/* Form to add new people */}
      <h2>Add a Person</h2>
      <form onSubmit={addPerson}>
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Conditional Rendering */}
      <h2>People List</h2>
      {people.length === 0 ? (
        <p>No people added yet.</p>
      ) : (
        people.map((person, index) => (
          <Card key={index} Name={person.Name} Age={person.Age} />
        ))
      )}
    </div>
  );
}
