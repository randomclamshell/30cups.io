var express = require("express");

var router = express.Router();


var contact = require("../models/contact.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  contact.selectAll(function(data) {
    var hbsObject = {
      contacts: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/contacts", function(req, res) {
  contact.insertOne(["name", "number", "email", "service", "comments"], [req.body.name, req.body.number,req.body.email,req.body.comments], function(result) {
   res.json({ id: result.insertId });
  });
});

router.put("/api/contacts/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  contact.updateOne(
    {
      name: req.body.name,
      number: req.body.number,
      email: req.body.email,
      comments: req.body.comments

    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

router.delete("/api/contacts/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  contact.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
