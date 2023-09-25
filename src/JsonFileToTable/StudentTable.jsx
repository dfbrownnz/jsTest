import React from 'react'
import JsonData from './students.json'

function 	JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
					<td>{info.city}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table className="table table-striped">
				<thead>
					<tr>
					<th>Sr.NO</th>
					<th>Name</th>
					<th>City</th>
					</tr>
				</thead>
				<tbody>
					{DisplayData}
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
