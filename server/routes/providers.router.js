const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    const queryText = `SELECT providers.*,
	"user".first_name AS prov_first_name,
	"user".last_name AS prov_last_name,
	"user".email AS prov_email,
	"user".phone_number AS prov_number,
	"user".photo_url AS prov_pic
FROM providers
	JOIN "user" ON providers.user_id = "user".id;`;
    pool.query(queryText)
      .then(() => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log('ERROR IN providers GET', error);
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
    pool.query()
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('ERROR IN providers POST', error);
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
    const queryText = `SELECT providers.*,
	"user".first_name,
	"user".last_name,
	"user".email,
	"user".phone_number,
	"user".photo_url AS provider_pic
FROM providers
	JOIN "user" ON providers.user_id = "user".id
WHERE providers.id = $1;`;
    pool.query(queryText, [providerId])
    .then(() => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR IN providers details GET', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});


// DELETE template
router.delete('/delete/:id', (req, res) => {
  console.log('IN providers DELETE ROUTE, and req.params is:', req.params.id);
  if (req.isAuthenticated()) {
    pool.query()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('ERROR IN providers DELETE', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});

// PUT template
router.put('/update/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const providerId = req.params.id
    const {
      // !!! ADD OBJECT PROPERTIES HERE WHEN READY AND CHANGE THEM OUT FOR THE BLINGS ON LINE 118 !!!
    }= req.body
    const queryText = `UPDATE providers
SET license = $1,
	business_name = $2,
	street_address = $3,
	unit = $4,
	city = $5,
	state = $6,
	zip = $7,
	hours_open = $8,
	hours_close = $9,
	rates = $10,
	meals = $11,
	business_description = $12,
	personal_description = $13,
	contract_language = $14
WHERE id = $15;`;
      pool.query(queryText, [$1-$14, providerId])
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('ERROR IN providers PUT', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403)
  }
  });


module.exports = router;




