const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const BookAProController = require("../Model/BookAProModel");
const privateKey = 'bookAshhhhhPro';

var HTTP_PORT = process.env.PORT || 8000;

BookAProController.initialize()
  .then(() => {
    var jwt = require('jsonwebtoken');
    app.use(express.urlencoded({ extended: true }));
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
      } else if (req.query.userId) {
        BookAProController.getServicesByUserId(req.query.userId)
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


    app.post("/users/add", function (req, res) {
      BookAProController
        .addUser(req.body)
        .then(function (data) {
          res.redirect("http://localhost:3000/");
        })
        .catch(function (err) {
          res.status(422).json({ message: err });
        });
    });

    app.get("/bestsellers", function (req, res) {
      BookAProController.getBestSellers()
        .then(function (data) {
          //console.log("Came into then part of /employees");
          if (data.length > 0) {
            res.json(data);
          }
        })
        .catch(function (err) {
          res.status(500).json({ message: err });
        });
    })

    //Albab
    app.post("/createUser", function (req, res) {
      let userData = req.body;
      BookAProController.createUser(userData)
        .then(function (responseData) {
          responseData.password = 'fooled you';
          let data = [responseData];
          var token = jwt.sign({ data }, privateKey);
          if (token) {
            res.json({ result: true, data: responseData, token: token, message: 'User created successfully.' });
          } else {
            res.json({ result: false, message: 'An error occurred, please try to login or register again.' });
          }
        })
        .catch(function (err) {
          res.json({ result: false, message: err, data: userData });
        })

    })

    app.post("/createReservation", function (req, res) {
      let resData = req.body;
      BookAProController.createReservation(resData)
        .then(function (responseData) {
          res.json({ result: true, message: 'Reservation created successfully.' });
        })
        .catch(function (err) {
          res.json({ result: false, message: err, data: userData });
        })

    })

    app.post("/createCategory", function (req, res) {
      let categoryData = req.body;

      BookAProController.createCategory(categoryData)
        .then(function () {
          res.json({ result: true, message: 'Category created successfully.' });
        })
        .catch(function (err) {
          res.json({ result: false, message: err, data: categoryData });
        })

    })

    app.post("/createService", function (req, res) {
      let serviceData = req.body;

      BookAProController.createService(serviceData)
        .then(function () {
          res.json({ result: true, message: 'Service created successfully.' });
        })
        .catch(function (err) {
          res.json({ result: false, message: err, data: serviceData });
        })

    })

    app.post("/verifyToken", function (req, res) {
      let token = req.body.token;

      try {
        var decoded = jwt.verify(token, privateKey);

        if (decoded.data[0].userId) {
          decoded.data[0].password = 'fooled you';
          res.json({ result: true, user: decoded.data[0] });
        } else {
          res.json({ result: false });
        }
      } catch (err) {
        res.json({ result: false });
      }

    })

    app.post("/login", function (req, res) {
      let email = req.body.email;
      let password = req.body.password;
      let role = req.body.role;

      BookAProController.checkUser(email, password, role)
        .then(function (data) {
          if (data.length) {
            var token = jwt.sign({ data }, privateKey);
            if (token) {
              res.json({ result: true, data: data, token: token });
            } else {
              res.json({ result: false, message: 'Login failed' });
            }
          } else {
            res.json({ result: false, message: 'User not found' });
          }

        })
        .catch(function (err) {
          res.json({ result: false, message: err });
        })

    })

    app.get("/userData", function (req, res) {
      if (req.query.userId) {
        BookAProController.userData(req.query.userId)
          .then(function (data) {
            if (data.length > 0) {
              data[0].password = 'fooled you';
              res.json(data);
            }
          })
          .catch(function (err) {
            res.status(500).json({ message: err });
          });
      }
    });

    app.get("/providerData", function (req, res) {
      if (req.query.userId) {
        BookAProController.providerData(req.query.userId)
          .then(function (data) {
            if (data.length > 0) {
              res.json(data);
            }
          })
          .catch(function (err) {
            res.status(500).json({ message: err });
          });
      }
    });

    app.get("/adminData", function (req, res) {
      BookAProController.adminData()
        .then(function (data) {
          if (data.length > 0) {
            res.json(data);
          }
        })
        .catch(function (err) {
          res.status(500).json({ message: err });
        });
    });

    app.get("/allServices", function (req, res) {
      BookAProController.getServices()
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


