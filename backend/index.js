const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');
var cors = require('cors')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodelogin'
});

connection.connect((err) => {
	if (err) throw err;
	console.log('Connected to MySQL Server!');
});

const app = express();
app.use(cors())

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// http://localhost:5000/
app.get('/api', function (request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/index.html'));
});

// http://localhost:5000/api/auth
app.post('/api/auth', function (request, response) {
	console.log("dentro de auth");
	// Capture the input fields
	let email = request.body.email;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified email and password
		connection.query('SELECT * FROM accounts WHERE email = ? AND password = ?', [email, password], function (error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				console.log("dentro de results");
				// Authenticate the user
				request.session.loggedin = true;
				request.session.email = email;
				response.status(200).send({token: "token "}); //request.session.email

			} else {
				response.send('Incorrect email and/or Password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter email and Password!');
		response.end();
	}
});

// http://localhost:5000/home
app.get('api/home', function (request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output email
		response.send('Welcome back, ' + request.session.email + '!');
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(5000, function () {
	console.log('CORS-enabled web server listening on port 5000')
  });