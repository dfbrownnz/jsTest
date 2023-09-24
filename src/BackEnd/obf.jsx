import React, { useState, useEffect } from 'react';
//import axios from 'axios';

function ObfApp() {
  const [posts, setPosts] = useState([]);
  // object for storing and using data
  const [api_student, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });


    // // Using useEffect for single rendering
    useEffect(() => {
      // Using fetch to fetch the api from
      // flask server it will be redirected to proxy
      fetch("/react_be").then((res) =>
          res.json().then((api_student) => {
            // setdata( api_student.data.children.map(c => c.data));
              // // Setting a data from api
              setdata({
                  name: api_student.Name,
                  age: api_student.Age,
                  date: api_student.Date,
                  programming: api_student.programming,
              });
          })
      );
  }, []);


  return (
    <ul className="list-group">
      <p>{api_student.name}</p>
      <p>{api_student.age}</p>
      <p>{api_student.date}</p>
      <p>{api_student.programming}</p>
    </ul>

  );
}

export default ObfApp;
