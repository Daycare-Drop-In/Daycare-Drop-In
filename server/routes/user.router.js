const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Axios request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
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
router.post('/register/family', async (req, res, next) => {
  const {
    familyName,
    address,
    unit,
    city,
    state,
    zip,
    photo_url,
    accessCode
  } = req.body

  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const firstQuery = `
  INSERT INTO families ("family_name", "street_address", "unit", "city", "state", "zip", "photo_url", "access_code")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING id;`;

  const secondQuery = `
  INSERT INTO user ("username",
  "password",
  "user_type",
  "family_id",
  "first_name",
  "last_name",
  "email",
  "phone_number",
  "photo_url",)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  RETURNING id;
  `;
    try {
      const firstStep = await pool
			.query(firstQuery, [
				familyName,
				address,
				unit,
				city,
				state,
				zip,
				photo_url,
				accessCode,
			])
      const familyId = firstStep.rows[0].id
      const secondStep = await pool
			.query(secondQuery, [
				username,
				password,
				"family",
				familyId,
				first_name,
				last_name,
        username,
        phone_number,
        photo_url
			])
			.then(() => res.sendStatus(201))
			.catch((err) => {
				console.log("Family user registration failed: ", err);
				res.sendStatus(500);
			});
      console.log('ID being returned from the second query trying to follow the provided template structure ', secondStep.rows[0].id);

    } catch (error) {
      console.log('Family registration error', error);
      res.sendStatus(500)
    }

});

// ----------------------------_ NEW FAMILY USER REGISTRATION _------------------------------------
router.post('/register/new_family_user', (req, res, next) => {
  const {} = req.body;


  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// -----------------------------_ PROVIDER REGISTRATION _-----------------------------------
router.post('/register/provider', async (req, res, next) => {
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
    start_time,
    end_time,
    rates,
    meals,
    business_description,
    personal_description,
    contract_language,
  } = req.body;

  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

    const firstQuery =`
  INSERT INTO user ("username",
  "password",
  "user_type",
  "family_id",
  "first_name",
  "last_name",
  "email",
  "phone_number",
  "photo_url",)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
  RETURNING id;`
  ;

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
		"start_time",
    "end_time",
		"rates",
		"meals",
		"business_description",
		"personal_description",
		"contract_language"
	)

VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
RETURNING user_id;
  `;
    try {
      const firstStep = await pool
			.query(firstQuery, [
				username,
				password,
				"provider",
				null,
				first_name,
				last_name,
        username,
        phone_number,
        photo_url
			])
      const providerUserId = firstStep.rows[0].id
      const secondStep = await pool
			.query(secondQuery, [
				providerUserId,
				license,
				business_name,
				street_address,
				unit,
				city,
				state,
				zip,
				start_time,
				end_time,
				rates,
				meals,
				business_description,
				personal_description,
				contract_language,
			])
			.then(() => res.sendStatus(201))
			.catch((err) => {
				console.log("Provider registration failed: ", err);
				res.sendStatus(500);
			});
      console.log(
			"ID being returned from the second query trying to follow the provided template structure ",
			secondStep.rows[0].id
		);

    } catch (error) {
      console.log('Provider registration error', error);
      res.sendStatus(500)

    }
});


// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;





