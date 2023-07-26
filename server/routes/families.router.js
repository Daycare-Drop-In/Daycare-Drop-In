const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    const queryText = `SELECT "user".first_name AS parent_first_name,
	"user".last_name AS parent_last_name,
	"user".email AS parent_email,
	"user".phone_number AS parent_number,
	"user".photo_url AS parent_pic,
	families.*
FROM "user"
	JOIN families ON "user".family_id = families.id;`;
    pool.query(queryText)
      .then(() => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log('ERROR IN families GET', error);
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
        console.log('ERROR IN families POST', error);
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
    const queryText = `SELECT "user".first_name AS parent_first_name,
	"user".last_name AS parent_last_name,
	"user".email AS parent_email,
	"user".phone_number AS parent_number,
	"user".photo_url AS parent_pic,
	families.*
FROM "user"
	JOIN families ON "user".family_id = families.id
WHERE "user".family_id = $1;`;
    pool.query(queryText, [famId])
    .then(() => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR IN families details GET', error);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(403)
}
});


// DELETE template
router.delete('/delete/:id', (req, res) => {
  console.log('IN families DELETE ROUTE, and req.params is:', req.params.id);
  if (req.isAuthenticated()) {
    pool.query()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('ERROR IN families DELETE', error);
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
        console.log('ERROR IN families PUT', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403)
  }
  });


module.exports = router;




