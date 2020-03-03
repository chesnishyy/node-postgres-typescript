import express from "express";
import path from "path";
import dotenv from "dotenv";
import * as sessionAuth from "./middleware/sessionAuth";
import * as routes from "./routes";
import { logErrors, clientErrorHandler, errorHandler } from "./errorHandlers";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

// Configure session authc
sessionAuth.register( app );

// Configure routes
routes.register( app );

// // start the Express server
// app.locals.oidc.on('ready', () => {
// });


// app.listen(port, () => {
// 	// tslint:disable-next-line:no-console
// 	console.log(`Server started at https://localhost:${ port }`);
// });

app.locals.oidc.on('ready', () => {
	app.listen(port, () => {
		// tslint:disable-next-line:no-console
		console.log(`Server started at https://localhost:${ port }`);
	});
});

app.locals.oidc.on('error', (err: any) => {
	// tslint:disable-next-line:no-console
	console.log('Unable to configure ExpressOIDC', err);
});

// app.use(logErrors);
// app.use(clientErrorHandler);
// app.use(errorHandler);
