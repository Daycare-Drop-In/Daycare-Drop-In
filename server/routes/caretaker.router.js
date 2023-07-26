const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    pool.query()
      .then(() => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log('ERROR IN caretaker GET', error);
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
      // !!! ADD OBJECT PROPERTIES HERE WHEN READY AND SWAP THEM IN FOR THE BLINGS IN THE ARRAY ON LINE 43 !!!
    } = req.body
    const queryText = `INSERT INTO responsible_adults (
		family_id,
		first_name,
		last_name,
		phone_number,
		email,
		relationship_to_child,
		photo_url
	)
VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    pool.query(queryText, [$1-$7])
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('ERROR IN caretaker POST', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403)
  }
});

// detail view GET route template
router.get('/details/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const famId = req.params.id
    const queryText = `SELECT *
FROM responsible_adults
WHERE responsible_adults.family_id = $1;`;
    pool.query(queryText, [adultId])
    .then(() => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR IN caretaker details GET', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});


// DELETE template
router.delete('/delete/:id', (req, res) => {
  console.log('IN caretaker DELETE ROUTE, and req.params is:', req.params.id);
  if (req.isAuthenticated()) {
    const adultId = req.params.id
    const queryText = `DELETE FROM responsible_adults WHERE id = $1;`;
    pool.query(queryText, adultId)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('ERROR IN caretaker DELETE', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});

// PUT template
router.put('/update/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const adultId = req.params.id
    const {
      // !!! ADD OBJECT PROPERTIES HERE WHEN READY AND REPLACE THE BLINGS IN THE ARRAY ON LINE 96 !!!
    } = req.body
    const queryText = `UPDATE responsible_adults
SET first_name = $1,
	last_name = $2,
	phone_number = $3,
	email = $4,
	relationship_to_child = $5,
	photo_url = $6
WHERE id = $7;`;
      pool.query(queryText, [$1-$6, adultId])
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('ERROR IN caretaker PUT', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403)
  }
  });


module.exports = router;
