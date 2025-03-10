import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [likes, setLikes] = useState(0);
  const [people, setPeople] = useState([
    { name: "Axel", age: 17 },
    { name: "Camila", age: 17 },
    { name: "Evangelina", age: 16 },
    { name: "Daniel", age: 16 }
  ]);

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  function addLike() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  function addPerson(event) {
    event.preventDefault();
    const ageNumber = parseInt(newAge, 10);

    if (!newName.trim() || isNaN(ageNumber) || ageNumber <= 0) {
      alert("Please enter a valid name and age.");
      return;
    }

    setPeople([...people, { name: newName.trim(), age: ageNumber }]);
    setNewName("");
    setNewAge("");
  }

  return (
    <div className="App">
      <h1>Like Counter</h1>
      <p>{likes}</p>
      <button onClick={addLike}>👍🏼</button>

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
          <Card key={index} name={person.name} age={person.age} />
        ))
      )}
    </div>
  );
}
