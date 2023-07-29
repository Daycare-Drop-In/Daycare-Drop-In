const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    const queryText = `SELECT availability.*, to_char(availability.date, 'Mon DD, YYYY') AS on_date,
    "user".photo_url AS provider_photo,
    providers.id AS provider_id,
    providers.rates AS provider_fee,
	providers.business_name AS biz_name,
	providers.street_address AS provider_street,
	providers.unit AS provider_unit,
	providers.city AS provider_city,
	providers.state AS provider_state,
	providers.zip AS provider_zip,
	TO_CHAR(TO_TIMESTAMP(providers.hours_open, 'HH24:MI'), 'FMHH12:MI AM') AS provider_open,
  TO_CHAR(TO_TIMESTAMP(providers.hours_close, 'HH24:MI'), 'FMHH12:MI AM') AS provider_close,
	providers.meals AS provider_meal
FROM availability
	JOIN providers ON availability.provider_id = providers.id
  JOIN "user" ON providers.user_id = "user"."id"
  ORDER BY "date" ASC;`;
// MIGHT NEED TO ADD SOME WHERE CLAUSE LOGIC (STATIC OR DYNAMIC <-- WOULD NEED TO CHANGE ENDPOINT) TO PRE-FILTER RESULTS
    pool.query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log('ERROR IN availability GET', error);
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
      // !!! ADD OBJECT PROPERTIES WHEN READY AND SWAP THEM IN FOR THE BLINGS IN THE ARRAY ON LINE 56 !!!
    } = req.body;
    const queryText = `INSERT INTO availability (
		provider_id,
		infant,
		toddler,
		pre_k,
		schoolage,
		date
	)
VALUES($1, $2, $3, $4, $5, $6);`
    pool.query(queryText, [$1-$6])
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('ERROR IN availability POST', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403)
  }
});

// detail view GET route template
router.get('/details/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const providerId = req.params.id
    const queryText = `SELECT availability.*,
	providers.id AS provider_id,
	providers.business_name AS biz_name,
	providers.street_address AS provider_street,
	providers.unit AS provider_unit,
	providers.city AS provider_city,
	providers.state AS provider_state,
	providers.zip AS provider_zip,
	providers.hours_open AS provider_open,
	providers.hours_close AS provider_close,
	providers.meals AS provider_meal
FROM availability
	JOIN providers ON availability.provider_id = providers.id
WHERE providers.id = $1
ORDER BY "date" ASC;`;
    pool.query(queryText, [providerId])
    .then(() => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR IN availability details GET', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});


// DELETE template
router.delete('/delete/:id', (req, res) => {
  console.log('IN availability DELETE ROUTE, and req.params is:', req.params.id);
  if (req.isAuthenticated()) {
    pool.query()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('ERROR IN availability DELETE', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});

// PUT template
router.put('/update/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const availId = req.params.id
    const queryText = `UPDATE availability
SET infant = $1,
	toddler = $2,
	pre_k = $3,
	schoolage = $4
WHERE id = $5;`;
      pool.query(queryText, [availId])
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('ERROR IN availability PUT', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403)
  }
  });


module.exports = router;




