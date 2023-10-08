const express = require('express');
const app = express();
const fs = require('fs');
const _ = require('lodash');

// Sample JSON data
var data =[
{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
"street": "Kulas Light",
"suite": "Apt. 556",
"city": "Gwenborough",
"zipcode": "92998-3874",
"geo": {
"lat": "-37.3159",
"lng": "81.1496"
}
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
"name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
}
},
{
"id": 2,
"name": "Ervin Howell",
"username": "Antonette",
"email": "Shanna@melissa.tv",
"address": {
"street": "Victor Plains",
"suite": "Suite 879",
"city": "Wisokyburgh",
"zipcode": "90566-7771",
"geo": {
"lat": "-43.9509",
"lng": "-34.4618"
}
},
"phone": "010-692-6593 x09125",
"website": "anastasia.net",
"company": {
"name": "Deckow-Crist",
"catchPhrase": "Proactive didactic contingency",
"bs": "synergize scalable supply-chains"
}
}
]

app.get('/' , (req,res)=>{
// This will send the JSON data to the client.
	res.json(data);
})

app.get('/users' , (req,res)=>{
	var UsersData = JSON.parse(fs.readFileSync('data/Users.json'));
	// let rawdata = fs.readFileSync('data/Users.json');
	// let punishments= JSON.parse(rawdata);

	const name = req.params.name;
	console.log('GET params', req.params);
	console.log('query', req.query);
	var UserFilter = req.query
	console.log( 'UserFilter id', UserFilter['id'] , UserFilter)
	// var picked = UsersData.find(myObject => Number(myObject.id) === Number(UserFilter['id'])  );
	// data=[];
	// data.push(picked);
	
	// sugar.js
	//picked = UsersData.remove(function(el) { return Number(el.id) === Number(UserFilter['id']); });
	// lodash.js
	UsersData = _.reject(UsersData, function(el) { return el.username === "Samantha"; });
	
	
	
	UsersData.forEach(element => { 
		// console.log( 'For each ->', element.name);
		if (element.name ==='Leanne Graham')
		{
			element.username='Bubba';
			console.log(' made it-', element			 );
		}

	});
	UserSamantha =     {
		"id": 30,
		"name": "IDK yo ",
		"username": "New Improved",
		"email": "Nathan@yesenia.net"
		}
	UsersData.push(UserSamantha);

	

	//var picked = UsersData.find(myObject => myObject.username === 'Bret');
	//var picked = lodash.filter(UsersData, { 'username': 'Bret' } );
	//console.log(data);
	
	let Mydata = JSON.stringify(UsersData);
	fs.writeFileSync('data/UsersB.json', Mydata);
	//data = UsersData;
	//console.log(UsersData );
	data = UsersData ;
	
// This will send the JSON data to the client.
	res.json(data);
})



app.post('/users' , function (req, res) {
	var UsersData = JSON.parse(fs.readFileSync('data/Users.json'));
	const name = req.params.name;
	console.log('POST users params', req.params);
	console.log('query', req.query);
	var UserFilter = req.query
	console.log( 'UserFilter id', UserFilter['id'] , UserFilter)
    const data = req.body;
    console.log('data ->', data);
 
    console.log("name: ", data.name);


	//data = UsersData ;
	res.json(UsersData);
})


// Server setup
app.listen(4000 , ()=>{
	console.log("server running running on 4000 ");
});
