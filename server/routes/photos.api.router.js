const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    pool
      .query()
      .then(() => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log("ERROR IN photos GET", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  console.log("Inside router side of post photo request", req.body);
  if (req.isAuthenticated()) {
    const values = [
      req.body.provider_id,
      req.body.photo_url,
      req.body.description,
    ];
    const queryText = `INSERT INTO provider_photos (
      provider_id,
      photo_url,
     description
    )
  VALUES($1, $2, $3,)`;

    pool
      .query(queryText, values)
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log("ERROR IN photos POST", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// detail view GET route template
router.get("/details/:id", (req, res) => {
  if (req.isAuthenticated()) {
    pool
      .query()
      .then(() => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log("ERROR IN photos details GET", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// DELETE template
router.delete("/delete/:id", (req, res) => {
  console.log("IN photos DELETE ROUTE, and req.params is:", req.params.id);
  if (req.isAuthenticated()) {
    pool
      .query()
      .then(() => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log("ERROR IN photos DELETE", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// PUT template
router.put("/update/:id", (req, res) => {
  if (req.isAuthenticated()) {
    pool
      .query()
      .then(() => {
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log("ERROR IN photos PUT", error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
