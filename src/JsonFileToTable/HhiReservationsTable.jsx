import React from 'react'
import JsonDataHhi from './HhiReseravations.json'

function 	JsonDataHhiDisplay(){
	const DisplayData=JsonDataHhi.map(
		(info)=>{
			return(
				<tr>
					<td>{info.Folio}</td>
					<td>{info.ArrivalDate}</td>
					<td>{info.DepartureDate}</td>
					<td>{info.Rent}</td>
					<td>{info.PropertyName}</td>
					<td>{info.TenantFirstName}</td>
					<td>{info.TenantLastName}</td>
					<td>{info.ReservationType}</td>
				</tr>
			
			)
		}
	)

	return(
		<div>
			<table className="table table-striped">
				<thead>
					<tr>
					<th>Folfio</th>
					<th>AD</th>
					<th>dd</th>
					<th>Rent</th>
					<th>Property</th>
					<th>First</th>
					<th>Last</th>
					<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{DisplayData}
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataHhiDisplay;
