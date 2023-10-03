// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

import JsonDataDisplay from './JsonFileToTable/StudentTable'
import FrmTableData from './FormToTable/StudentFormJsx';
//import TasksApp from "./JsonFileToTable/back_end/task_api";
import TasksApp from "./JsonFileToTable/back_end/task_api";
import ObfApp from "./BackEnd/obf";
import ObfClientsApp from "./BackEnd/ObfClients";
import JsonDataHhiDisplay from "./JsonFileToTable/HhiReservationsTable";

import TableBeingFilter from "./BackEnd/TableFilter/TableBeingFilterjsx";
import UseStateCounterApp from "./test/UseStateCounter"
import UseStateCounterV2App from "./test/UseStateCounterV2"
import UseEffectApp from "./test/UseEffect"
import UseRefApp from './test/useRef'
import UseMemoApp from './test/useMemo'
import Parent from './test/ParamPassParent'
import ChatGptCallApi from './test/ChatGptApiCall1'
import ChatGptFilterJsonApp from "./test/ChatGptFilterJson";
import JsonPlaceholderUsersFunc from "./TestApi/JsonPlaceholderUsersjsx";
import JsonAxiosLocaljsx from './TestApi/JsonAxiosLocaljsx'

//npm install axios
// import axios from 'axios'; // not used. get CORS error two API on one machine.



function App() {
    // usestate for setting a javascript
    // object for storing and using data
    // const [api_student, setdata] = useState({
    //     name: "",
    //     age: 0,
    //     date: "",
    //     programming: "",
    // });

    // const [api_student, setdata] = useState("");
    // const [api_student, setdata] = useState([]);
    // const [posts, setPosts] = useState([]);
    // // //App.use(cors()) // Use this after the variable declaration
    

    // // Using useEffect for single rendering
    // useEffect(() => {
    //     // Using fetch to fetch the api from
    //     // flask server it will be redirected to proxy
    //     fetch("/react_be").then((res) =>
    //         res.json().then((api_student) => {
    //           // setdata( api_student.data.children.map(c => c.data));
              

    //             // // Setting a data from api
    //             setdata({
    //                 name: api_student.Name,
    //                 age: api_student.Age,
    //                 date: api_student.Date,
    //                 programming: api_student.programming,
    //             });
    //         })
    //     );
    // }, []);
 
    // useEffect(() => {
    //   axios.get('http://localhost:8080/tasks_json')
    //     .then(response => {
    //       setPosts(response.data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }, []);

    
    //https://www.geeksforgeeks.org/how-to-parse-json-data-into-react-table-component/?ref=ml_lbp


    return (
        <div className="App">
            <header className="App-header">
            </header>
            <div className="container">
              
                <h3>from API</h3>
                task-controller
                {/* <ul>              {patients.map(patient => (                <li key={patient.task_id}>{patient.person}</li>              ))}            </ul> */}

                {/* <ul>              {api_student.map(patient => (                <li key={patient.task_id}>{patient.person}</li>              ))}            </ul> */}
                {/* Calling a data from setdata for showing */}
                {/* <p>{api_student.name}</p>
                <p>{api_student.age}</p>
                <p>{api_student.date}</p>
                <p>{api_student.programming}</p> */}
                {/* <ObfClientsApp/> */}
                    {/* <ul>
                {posts.map(post => (        <li key={post.task_id}>{post.person}</li>      ))}    </ul>  );
 */}
                
                <h3>local file</h3>
                {/* <JsonDataDisplay />
                <JsonDataHhiDisplay/> */}
                <TableBeingFilter/>
                {/* <ObfApp/> */}

                <h3> to file doesnt work</h3>
                FrmTableData npm start to get this working. react is front end and you send data to back end api to save it.
                {/* <FrmTableData />
                <TasksApp/> */}
                {/* <UseRefApp/> */}
                <UseMemoApp/>
                {/* <ChatGptCallApi/> */}
                {/* <ChatGptFilterJsonApp/> */}
                <Parent />
                <JsonAxiosLocaljsx/>

            </div>
        </div>
    );
}
 
export default App;