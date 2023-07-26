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
        console.log('ERROR IN children GET', error);
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
        console.log('ERROR IN children POST', error);
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
    const queryText = `
    SELECT *
    FROM children
    WHERE family_id = $1;`;
    pool.query(queryText, [famId])
    .then(() => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR IN children details GET', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});


// DELETE template
router.delete('/delete/:id', (req, res) => {
  console.log('IN children DELETE ROUTE, and req.params is:', req.params.id);
  if (req.isAuthenticated()) {
    pool.query()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('ERROR IN children DELETE', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});

// PUT template
router.put('/update/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const childId = req.params.id
    const {
      // !!! ADD OBJECT PROPERTIES HERE WHEN THEY ARE READY AND CHANGE THE BLINGS OUT ON LINE 93 !!!!
    } = req.body
    const queryText = `
    UPDATE children SET first_name = $1, last_name = $2, birthdate = $3, allergies = $4, potty_trained = $5, photo_url = $6
    WHERE id = $7;
    `;
      pool.query(queryText, [$1, $2, $3, $4, $5, $6, childId])
			.then(() => {
				res.sendStatus(202);
			})
			.catch((error) => {
				console.log("ERROR IN children PUT", error);
				res.sendStatus(500);
			});
  } else {
    res.sendStatus(403)
  }
  });


module.exports = router;
