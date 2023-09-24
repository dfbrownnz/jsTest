import React, { useState } from 'react';
//import StudentForm from './StudentTableFormJsx';
import StudentForm from './StudentTableFromFormJsx';
//import StudentForm from './FormToTable/StudentFormJsx';

import jsonData from './student_data.json';

//import txt from './student_data.json';

//import fs from 'fs';

function FrmTableData() {
const [studentData, setStudentData] = useState(jsonData);


// fs.writeFile('myfile.txt', 'This is my text.', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File written successfully.');
//   }
// });


const tableRows = studentData.map((info) => {
	return (
	<tr>
		<td>{info.id}</td>
		<td>{info.name}</td>
		<td>{info.city}</td>
	</tr>
	);
});

const addRows = (data) => {
	const totalStudents = studentData.length;
	data.id = totalStudents + 1;
	const updatedStudentData = [...studentData];
	updatedStudentData.push(data);
	setStudentData(updatedStudentData);
};

return (
	<div>
	<table className="table table-stripped">
		<thead>
		<tr>
			<th>Sr.NO</th>
			<th>Name</th>
			<th>City</th>
		</tr>
		</thead>
		<tbody>{tableRows}</tbody>
	</table>
	<StudentForm func={addRows} />
	</div>
);
}

export default FrmTableData;
