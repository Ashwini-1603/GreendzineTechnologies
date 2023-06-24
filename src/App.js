import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [employees, setEmployees] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then((response) => response.json())
    // .then((data) => setEmployees(data.data))
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log("axios data", res.data.data);
        setEmployees(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className="main-Rapper">
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Search by first name"
        value={searchText}
        onChange={handleSearchChange}
      />
      <button
        onClick={() => {
          setSearchText("");
        }}
      >
        ⨉
      </button>

      <div className="container">
        {filteredEmployees.map((employee) => (
          <div className="ab">
               <div className="tumnail">
            <img className="img-thumnail" src={employee.avatar} />
            <h4> {employee.first_name}</h4>
            <span className="count">{employee.id}</span>
          </div>
          </div>
       
        ))}
      </div>
    </div>
  );
}
export default App;
