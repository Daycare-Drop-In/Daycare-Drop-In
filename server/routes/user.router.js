const express = require("express");
const {
	rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const encryptLib = require("../modules/encryption");
const pool = require("../modules/pool");
const userStrategy = require("../strategies/user.strategy");

const router = express.Router();

// Handles Axios request for user information if user is authenticated
router.get("/", rejectUnauthenticated, (req, res) => {
	// Send back user object from the session (previously queried from the database)
	res.send(req.user);
});

// ---------------------------_DEFAULT PROVIDED REGISTRATION LOGIC_---------------------------
// // Handles POST request with new user data
// // The only thing different from this and every other post we've seen
// // is that the password gets encrypted before being inserted
// router.post('/register', (req, res, next) => {
//   const username = req.body.username;
//   const password = encryptLib.encryptPassword(req.body.password);

//   const queryText = `INSERT INTO "user" (username, password)
//     VALUES ($1, $2) RETURNING id`;
//   pool
//     .query(queryText, [username, password])
//     .then(() => res.sendStatus(201))
//     .catch((err) => {
//       console.log('User registration failed: ', err);
//       res.sendStatus(500);
//     });
// });

//-------------------------------_ FAMILY USER REGISTRATION _-------------------------------------------
router.post("/register/family", async (req, res, next) => {
	const {
		family_name,
		first_name,
		last_name,
		address,
		unit,
		city,
		state,
		zip,
		photo_url,
		phone_number,
		accessCode,
	} = req.body;
	const family = "family";

	const username = req.body.username;
	const password = encryptLib.encryptPassword(req.body.password);

	const firstQuery = `
  INSERT INTO families ("family_name", "street_address", "unit", "city", "state", "zip", "photo_url", "access_code")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING id;`;

	const secondQuery = `
  INSERT INTO "user" (username,
  password,
  user_type,
  family_id,
  first_name,
  last_name,
  email,
  phone_number,
  photo_url)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  RETURNING id;
  `;
	const client = await pool.connect();
	try {
		await client.query("BEGIN");
		const firstStep = await client.query(firstQuery, [
			family_name,
			address,
			unit,
			city,
			state,
			zip,
			photo_url,
			accessCode,
		]);
		console.log("FIRST STEP COMPLETE HERES THE ID", firstStep.rows[0].id);
		const familyId = firstStep.rows[0].id;
		const secondStep = await client.query(secondQuery, [
			username,
			password,
			family,
			familyId,
			first_name,
			last_name,
			username,
			phone_number,
			photo_url,
		]);
		await client.query("COMMIT");
		console.log(secondStep);
		res.sendStatus(201);
	} catch (error) {
		await client.query("ROLLBACK");
		console.log("Family registration error", error);
		res.sendStatus(500);
	} finally {
		console.log("THANK GOD!!!!!");
		client.release();
	}
});

// ----------------------------_ NEW FAMILY USER REGISTRATION _------------------------------------
router.post("/register/new_family_user", (req, res, next) => {
	const {} = req.body;

	const username = req.body.username;
	const password = encryptLib.encryptPassword(req.body.password);

	const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
	pool.query(queryText, [username, password])
		.then(() => res.sendStatus(201))
		.catch((err) => {
			console.log("User registration failed: ", err);
			res.sendStatus(500);
		});
});

// -----------------------------_ PROVIDER REGISTRATION _-----------------------------------
router.post("/register/provider", async (req, res, next) => {
	const {
		first_name,
		last_name,
		email,
		phone_number,
		photo_url,
		license,
		business_name,
		street_address,
		unit,
		city,
		state,
		zip,
		hours_open,
		hours_close,
		rates,
		meals,
		business_description,
		personal_description,
		contract_language,
	} = req.body;
	const provider = "provider";

	const username = req.body.username;
	const password = encryptLib.encryptPassword(req.body.password);

	const firstQuery = `
  INSERT INTO "user" (username,
  password,
  user_type,
  family_id,
  first_name,
  last_name,
  email,
  phone_number,
  photo_url)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  RETURNING id;`;

	const secondQuery = `
  INSERT INTO providers (
		"user_id",
		"license",
		"business_name",
		"street_address",
		"unit",
		"city",
		"state",
		"zip",
		"hours_open",
		"hours_close",
		"rates",
		"meals",
		"business_description",
		"personal_description",
		"contract_language"
	)

VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
RETURNING user_id;
  `;
	const client = await pool.connect();
	try {
		await client.query("BEGIN");
		const firstStep = await client.query(firstQuery, [
			username,
			password,
			provider,
			null,
			first_name,
			last_name,
			username,
			phone_number,
			photo_url,
		]);
		const providerUserId = firstStep.rows[0].id;
		const secondStep = await client.query(secondQuery, [
			providerUserId,
			license,
			business_name,
			street_address,
			unit,
			city,
			state,
			zip,
			hours_open,
			hours_close,
			rates,
			meals,
			business_description,
			personal_description,
			contract_language,
		]);
		console.log(secondStep);
		await client.query("COMMIT");
		res.sendStatus(201);
	} catch (error) {
		await client.query("ROLLBACK");
		console.log("Provider registration error", error);
		res.sendStatus(500);
	} finally {
		client.release();
	}
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post("/login", userStrategy.authenticate("local"), (req, res) => {
	res.sendStatus(200);
});

// clear all server session information about this user
router.post("/logout", (req, res) => {
	// Use passport's built-in method to log out the user
	req.logout();
	res.sendStatus(200);
});

module.exports = router;
