const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const BookAProController = require("../Model/BookAProModel");

var HTTP_PORT = process.env.PORT || 8080;

BookAProController.initialize()
  .then(() => {
    // app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());

    app.get("/", function (req, res) {
      res.json("Welcome to my application");
    });

    app.get("/categories", function (req, res) {
      if (req.query.categoryId) {
        BookAProController.getServicesByCategoryID(req.query.categoryId)
          .then(function (data) {
            if (data.length > 0) {
              res.json(data);
            }
          })
          .catch(function (err) {
            res.status(500).json({ message: err });
          });
      } else {
        BookAProController.getAllCategories()
          .then(function (data) {
            //console.log("Came into then part of /employees");
            if (data.length > 0) {
              res.json(data);
            }
          })
          .catch(function (err) {
            res.status(500).json({ message: err });
          });
      }
    });



    app.get("/categories/:id/services", function (req, res) {
      BookAProController.getServicesByCategoryID(req.params.id)
        .then(function (data) {
          if (data.length > 0) {
            res.json(data);
          }
        })
        .catch(function (err) {
          res.status(500).json({ message: err });
        });
    });



    app.get("/services/:serviceId", function (req, res) {
      BookAProController.getServicesByServiceID(req.params.serviceId)
        .then(function (data) {
          if (data.length > 0) {
            res.json(data);
          }
        })
        .catch(function (err) {
          res.status(500).json({ message: err });
        });
    });



    app.listen(HTTP_PORT, function () {
      console.log("Server listening on: " + HTTP_PORT);
    });
  })
  .catch(function (err) {
    console.log(err);
  });

  
