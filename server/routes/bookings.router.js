const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    const queryText = `SELECT bookings.id AS booking_id,
	bookings.service_date AS booked_day,
	bookings.time_submitted AS time_booked,
	providers.id AS provider_id,
	providers.business_name AS biz_name,
	providers.street_address AS provider_street,
	providers.unit AS provider_unit,
	providers.city AS provider_city,
	providers.state AS provider_state,
	providers.zip AS provider_zip,
	providers.hours_open AS provider_open,
	providers.hours_close AS provide_close,
	providers.meals AS provider_meal,
	children.id AS child_id,
	children.family_id AS child_fam_id,
	children.first_name AS child_first_name,
	children.last_name AS child_last_name,
	children.birthdate AS child_age,
	children.allergies AS child_allergies,
	children.potty_trained AS child_potty,
	children.photo_url AS child_pic,
	responsible_adults.id AS adult_id,
	responsible_adults.first_name AS adult_first_name,
	responsible_adults.last_name AS adult_last_name,
	responsible_adults.phone_number AS adult_number,
	responsible_adults.email AS adult_email,
	responsible_adults.relationship_to_child AS adult_relationship,
	responsible_adults.photo_url AS adult_pic,
	responsible_adults.family_id AS adult_fam_id,
	"user"."first_name" AS parent_first_name,
	"user"."last_name" AS parent_last_name,
	"user"."email" AS parent_email,
	"user"."phone_number" AS parent_number,
	"user"."photo_url" AS parent_pic,
	"user"."family_id" AS parent_fam_id,
	families.family_name AS fam_account_name,
	families.street_address AS fam_street_address,
	families.unit AS fam_unit,
	families.city AS fam_city,
	families.state AS fam_state,
	families.zip AS fam_zip,
	families.photo_url AS fam_pic
FROM bookings
	JOIN providers ON bookings.provider_id = providers.id
	JOIN children ON bookings.child_id = children.id
	JOIN responsible_adults ON bookings.responsible_adult_id = responsible_adults.id
	JOIN "user" ON bookings.user_id = "user".id
	JOIN families ON bookings.famiily_id = families.id
ORDER BY bookings.service_date ASC;`;
    pool.query(queryText)
      .then(() => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log('ERROR IN bookings GET', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403)
  }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  if (req.isAuthenticated()) {
    const {
      // !!! ADD OBJECT PROPERTIES WHEN READY AND SWAP THEM OUT FOR THE BLINGS IN THE ARRAY ON LINE 90 !!!
    } = req.body
    const queryText = `INSERT INTO bookings (
		provider_id,
		child_id,
		responsible_adult_id,
		user_id,
		service_date
	)
VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [$1-$5])
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('ERROR IN bookings POST', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403)
  }
});

// detail view GET route template
router.get('/details/:id', (req, res) => {
  if (req.isAuthenticated()) {
    pool.query()
    .then(() => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR IN bookings details GET', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});

// detail view GET route template
router.get('/provider/:id', (req, res) => {
  if (req.isAuthenticated()) {
    pool.query()
    .then(() => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR IN bookings details GET', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});


// DELETE template
router.delete('/delete/:id', (req, res) => {
  console.log('IN bookings DELETE ROUTE, and req.params is:', req.params.id);
  if (req.isAuthenticated()) {
    pool.query()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('ERROR IN bookings DELETE', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});

// PUT template
router.put('/update/:id', (req, res) => {
  if (req.isAuthenticated()) {
      pool.query()
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('ERROR IN bookings PUT', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403)
  }
  });


module.exports = router;




