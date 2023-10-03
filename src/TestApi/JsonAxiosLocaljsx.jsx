import React, {useState, useEffect} from "react";
import axios from 'axios';

 function JsonAxiosLocaljsx() {
    const [users, setUsers] = useState({ hits: [] });

    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios(
          //"http://localhost:4000/", {
            {
              url: "/users?dave=Hero",
              baseURL: "",
              withCredentials: false,
              headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
              }, 
              body: {
                foo: 'bar', // This is the body part
              }
            }
        );
        setUsers({ hits: data });
      };
      fetchData();
    }, [setUsers]);
  
    return (
      <div>
        <ul>      
              {/* {users.hits}  */}
                <ul>          {users.hits &&             users.hits.map(item => (               <li key={item.id}>                <span>{item.name}</span>               </li>            ))} </ul>
        </ul>
      </div>
    );
  }

  export default JsonAxiosLocaljsx;
