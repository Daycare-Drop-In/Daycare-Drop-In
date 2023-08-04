const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

let awsCache = "";
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
	if (file.mimetype.split("/")[0] === "image") {
		cb(null, true);
	} else {
		cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
	}
};

const upload = multer({ storage, fileFilter });

router.put("/aws", upload.single("file"), async (req, res) => {
	console.log("req.file", req.file);
	try {
		const results = await s3Upload(req.file);
		console.log("AWS S3 upload success");
		console.log("Location", results.Location);
		awsCache = results.Location;
		console.log(awsCache);
	} catch (err) {
		res.sendStatus(500);
		console.log("AWS S3 upload fail", err);
	}
});

/**
 * GET route template
 */

router.get("/:id", (req, res) => {
  console.log(
    "Inside router side of getPhotos request for provider of id:",
    req.params.id
  );
  if (req.isAuthenticated()) {
    const queryText = `SELECT * from provider_photos WHERE provider_photos.provider_id = $1`;
    const id = req.params.id;
    pool
      .query(queryText, [id])
      .then((result) => {
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
      awsCache,
      req.body.description,
    ];
    const queryText = `INSERT INTO provider_photos (
      provider_id,
      photo_url,
     description
    )
  VALUES($1, $2, $3)`;

    pool
      .query(queryText, values)
      .then(() => {
        awsCache = ''
        res.sendStatus(202);
      })
      .catch((error) => {
        awsCache = ''
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
    const queryText = `DELETE from provider_photos WHERE provider_photos.id = $1`;
    const id = req.params.id;
    pool
      .query(queryText, [id])
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
