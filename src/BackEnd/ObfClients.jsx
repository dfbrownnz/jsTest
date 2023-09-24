 
import React, {useEffect, useState} from 'react';

//('https://reactnative.dev/movies.json')



 const ObfClientsApp = () => {
    const [data, setData] = useState([]);
    const dataFromUrl=[
    {
    "description": "next outing meet",
    "group": "RoboCos",
    "next_date": 20230817,
    "person": "Fines",
    "task_id": 5
    },
    {
    "description": "next sheep meet",
    "group": "Farmer",
    "next_date": 20230817,
    "person": "Don",
    "task_id": 6
    }
    ] 

    

  const DisplayData=data.map(
    (info)=>{
      return(
        <tr>
          <td>{info.task_id}</td>
          <td>{info.group}</td>
          <td>{info.person}</td>
          <td>{info.description}</td>
          <td>{info.next_date}</td>
        </tr>
      )
    }
  )

  const get_task_id = "0";

    useEffect(() => {
      fetch(`/datetime?get_task_id=`+get_task_id) // `/datetime?get_task_id={get_task_id}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);
  
    return (
      <div>
        
        {/* {data.map((item) => (
          <div key={item.task_id}>{item.description}</div>
        ))} */}
		<div>
			<table className="table table-striped">
				<thead>
					<tr>
					<th>Task Id</th>
					<th>Group</th>
					<th>Person</th>
					<th>Description</th>
					<th>Next Date</th>
					</tr>
				</thead>
				<tbody>
					{DisplayData}
				</tbody>
			</table>
			
		</div>
      </div>
    );
  };
  

export default ObfClientsApp;