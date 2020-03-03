import express from "express";
import path from "path";

const app = express();
const port = 9999; // default port to listen

// tslint:disable-next-line:no-console
console.log(__dirname);

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// define a route handler for the default home page
app.get('/', ( req, res ) => {
	res.render( "index" );
});

// start the Express server
app.listen(port, () => {
	// tslint:disable-next-line:no-console
	console.log(`Server started at http://localhost:${ port }`);
});
