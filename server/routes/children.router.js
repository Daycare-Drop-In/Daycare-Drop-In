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
    pool.query()
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
      pool.query()
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('ERROR IN children PUT', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403)
  }
  });


module.exports = router;
