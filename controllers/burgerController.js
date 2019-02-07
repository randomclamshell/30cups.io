var express = require("express");

var router = express.Router();


var contact = require("../models/contact.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  contact.selectAll(function(data) {
    var contactsObject = {
      contacts: data
    };
    console.log(contactsObject);
    res.render("index", contactsObject);
  });
});

router.post("/api/contacts", function(req, res) {
  contact.insertOne(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/contacts/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  contact.updateOne(
    {
      devoured: req.body.devoured
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
