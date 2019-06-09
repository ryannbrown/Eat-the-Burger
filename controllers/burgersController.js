var express = require("express");

var router = express.Router();
var db = require("../models/");

router.get("/api/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll()
  .then(function(burgerData) {
    res.json(burgerData);
  
  });
});

// post route
router.post("/api/burgers", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  db.Burger.create({
    burger_name: req.body.burger_name
  })
  .then(function(result) {

    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// put route
router.put("/api/burgers/:id", function(req, res) {
  db.Burger.update( {
    devoured: true
  },
  {
    where: {
      id: req.params.id
    }
  }
  ).then(function(result) {
 // Send back response and let page reload from .then in Ajax
 res.sendStatus(200);
  })
   
   
  });

module.exports = router;
