const Sequelize = require("sequelize");


const sequelize = new Sequelize(
  "dbnolgfvda2p5r",
  "kyktuyoxaubnwz",
  "f56320dac59c01906c73f165e30fcfe7697f1941af4685d8846fc3add4c4bd30",
  {
    host: "ec2-54-211-176-156.compute-1.amazonaws.com",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      ssl: { rejectUnauthorized: false },
    },
  }
);

// grant usage on schema public to public;
// grant create on schema public to public;

sequelize
  .authenticate()
  .then(function () {
    console.log("Connection has been established successfully.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
  });

Date.prototype.getTimestamp = function () {
  var year = this.getFullYear(),
    month = this.getMonth(),
    day = this.getDate(),
    hours = this.getHours(),
    minutes = this.getMinutes(),
    seconds = this.getSeconds();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}


var BlogCategory = sequelize.define("Blog_Category", {
  blogCategoryId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
});

var Blogs = sequelize.define("Blog", {
  blogId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  content: Sequelize.STRING,
  image: Sequelize.STRING,
  status: Sequelize.SMALLINT,
});

var User = sequelize.define("User", {
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fname: Sequelize.STRING,
  lname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  status: Sequelize.SMALLINT,
  role: Sequelize.SMALLINT,
});

var Services = sequelize.define("Service", {
  serviceId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  image: Sequelize.STRING,
  location: Sequelize.STRING,
  pricePerHour: Sequelize.DOUBLE,
  status: Sequelize.SMALLINT,
  bestseller: Sequelize.CHAR,
  userId: Sequelize.INTEGER,
});

var Cart = sequelize.define("Cart", {
  cartId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: Sequelize.INTEGER,
  total_price: Sequelize.DOUBLE,
});

var ServiceCategory = sequelize.define("Service_Category", {
  categoryId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  image: Sequelize.STRING,
  status: Sequelize.SMALLINT,
});

var UserAddress = sequelize.define("User_Address", {
  user_addressId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  postal_code: Sequelize.STRING,
  phone: Sequelize.STRING,
});

var Reservation = sequelize.define("Reservations", {
  reservationId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  booking_date: Sequelize.DATE,
  status: Sequelize.SMALLINT,
  user_addressId: Sequelize.INTEGER,
  providerUserId: Sequelize.INTEGER
});

var ReservationItem = sequelize.define("Reservation_Items", {
  reservation_itemId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: Sequelize.INTEGER,
  total_price: Sequelize.DOUBLE,
  ReservationReservationId: {
    type: Sequelize.INTEGER,
    references: {
      model: Reservation,
      key: 'reservationId'
    }
  },
  reservationServiceId: Sequelize.INTEGER
});

var Page = sequelize.define("Page", {
  pagesId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  content: Sequelize.STRING,
  image: Sequelize.STRING,
  status: Sequelize.SMALLINT,
});

User.hasMany(Page, { foreignKey: "userId" });

ServiceCategory.hasMany(Services, { foreignKey: "categoryId" });
Services.belongsTo(ServiceCategory, { foreignKey: 'categoryId' });




User.belongsToMany(Services, { through: Cart });
Services.belongsToMany(User, { through: Cart });



User.belongsToMany(BlogCategory, { through: Blogs });
BlogCategory.belongsToMany(User, { through: Blogs });


//Albab
User.hasMany(Services, { foreignKey: 'userId' })
Services.belongsTo(User, { foreignKey: 'userId', as: 'User' })

User.hasMany(UserAddress, { foreignKey: "userId", as: 'Address' });
UserAddress.belongsTo(User, { foreignKey: "userId", as: 'User' });

UserAddress.hasMany(Reservation, { foreignKey: "user_addressId" });
Reservation.belongsTo(UserAddress, { foreignKey: 'user_addressId', as: 'Address' })

User.hasMany(Reservation, { foreignKey: 'providerUserId' })
Reservation.belongsTo(User, { foreignKey: 'providerUserId', as: 'User' })

Reservation.hasMany(ReservationItem, { foreignKey: 'ReservationReservationId', as: 'Items' })
ReservationItem.belongsTo(Reservation, { foreignKey: 'ReservationReservationId', as: 'Reservation' })

ReservationItem.hasMany(Services, { foreignKey: 'serviceId' });
Services.belongsTo(ReservationItem, { foreignKey: 'serviceId', as: 'Items' });
// Services.belongsToMany(Reservation, {through: ReservationItem, sourceKey:'serviceId', constraints: false})


module.exports.initialize = function () {
  return new Promise(function (resolve, reject) {
    sequelize
      .sync()
      .then(function () {
        resolve("Success.");
      })
      .catch(function (err) {
        console.log(err);
        reject("Unable to sync the database.");
      });
  });
};

module.exports.getAllCategories = function () {
  return new Promise(function (resolve, reject) {
    ServiceCategory.findAll()
      .then(function (data) {
        data = data.map((value) => value.dataValues);
        resolve(data);
      })
      .catch(function (err) {
        console.log(err);
        reject("Unable to get all Categories");
      });
  });
};

module.exports.getServicesByCategoryID = function (categoryId) {

  return new Promise(function (resolve, reject) {
    Services.findAll({
      where: {
        categoryId: categoryId,
      },
    })
      .then(function (data) {
        data = data.map((value) => value.dataValues);

        resolve(data);
      })
      .catch(function (err) {
        console.log(err);
        reject(`Unable to find services for ${categoryId} category.`);
      });
  });
};


module.exports.getServicesByServiceID = function (serviceId) {

  return new Promise(function (resolve, reject) {
    Services.findAll({
      where: {
        serviceId: serviceId,
      },
    })
      .then(function (data) {
        data = data.map((value) => value.dataValues);

        resolve(data);
      })
      .catch(function (err) {
        console.log(err);
        reject(`Unable to find services for ${serviceId} category.`);
      });
  });
};



module.exports.addUser = function (userData) {
  return new Promise(function (resolve, reject) {
    userData.status = 2
    userData.role = 2
    User.create(userData).then(() => {
      resolve("Employee Successfully Created")
    }).catch(function (err) {
      console.log(err);
      reject("Unable to Create Employee");
    })
  })
}


module.exports.getBestSellers = function () {

  return new Promise(function (resolve, reject) {
    Services.findAll({
      where: {
        bestseller: 'Y',
      },
    })
      .then(function (data) {
        data = data.map((value) => value.dataValues);

        resolve(data);
      })
      .catch(function (err) {
        console.log(err);
        reject(`Unable to find services in bestseller.`);
      });
  });
};

//Albab
module.exports.checkUser = function (userEmail, userPassword, userRole) {
  return new Promise(function (resolve, reject) {
    User.findAll({ limit: 1, where: { email: userEmail, password: userPassword, role: userRole } })
      .then(function (data) {
        data = data.map((value) => value.dataValues);
        resolve(data);
      })
      .catch(function (err) {
        console.log(err);
        reject("Unable to get user");
      });
  });
};

module.exports.createService = function (serviceData) {
  return new Promise(function (resolve, reject) {
    serviceData.status = 1;
    serviceData.bestseller = 'N';
    Services.create(serviceData).then(() => {
      resolve("Service successfully created")
    }).catch(function (err) {
      reject({ err: err, message: "Unable to create the service ", data: serviceData });
    })
  })
}



module.exports.createCategory = function (categoryData) {
  return new Promise(function (resolve, reject) {
    categoryData.status = 1;
    ServiceCategory.create(categoryData).then(() => {
      resolve("Category successfully created")
    }).catch(function (err) {
      reject({ err: err, message: "Unable to create the category ", data: categoryData });
    })
  })
}

module.exports.createUser = function (userData) {
  return new Promise(function (resolve, reject) {
    userData.status = 1;
    if (!userData.role) {
      userData.role = 2;
    }
    userData.lname = '';
    User.create(userData).then((responseData) => {
      // responseData = responseData.map((value) => value.dataValues);
      resolve(responseData);
    }).catch(function (err) {
      reject({ err: err, message: "Uh Oh! Seems like you can't use the details you provided. Please try again. ", data: userData });
    })
  })
}

module.exports.createReservation = function (resData) {
  return new Promise(function (resolve, reject) {
    const items = resData.items;
    const addressid = resData.addressid;
    items.map((object) => {
      let bookingDate = new Date();
      let createObject = {}
      createObject.status = 1;
      createObject.booking_date = bookingDate.getTimestamp();
      createObject.user_addressId = addressid;
      createObject.providerUserId = object.providerId;

      Reservation.create(createObject).then((responseData) => {
        let secondCreateObject = {};
        secondCreateObject.quantity = 1;
        secondCreateObject.total_price = object.servicePrice;
        secondCreateObject.ReservationReservationId = responseData.reservationId;
        secondCreateObject.reservationServiceId = object.id;
        ReservationItem.create(secondCreateObject);
      }).catch(function (err) {
        reject({ err: err, message: "Uh Oh! Seems like you can't use the details you provided. Please try again. ", data: resData });
      })


    })
    resolve();
  })
}

module.exports.getServicesByUserId = function (userId) {
  return new Promise(function (resolve, reject) {
    Services.findAll({
      where: {
        userId: userId,
      },
    }).then(function (data) {
      data = data.map((value) => value.dataValues);
      resolve(data);
    }).catch(function (err) {
      reject(`Unable to find services for user.`);
    });
  });
};

module.exports.providerData = function (userId) {
  return new Promise(function (resolve, reject) {
    User.findAll({
      where: {
        userId: userId,
      },
      include: [
        Services,
        {
          model: Reservation,
          include: [
            {
              model: UserAddress,
              as: 'Address',
              include: [{
                model: User,
                as: 'User'
              }]
            },
            {
              model: ReservationItem,
              as: 'Items'
            }
          ]
        }
      ]
    }).then(function (data) {
      data = data.map((value) => value.dataValues);
      resolve(data);
    }).catch(function (err) {
      reject(`Unable to find services for user.` + err);
    });
  });
};

module.exports.adminData = function (userId) {
  return new Promise(function (resolve, reject) {
    User.findAll({
      include: [
        Services,
        {
          model: Reservation,
          include: [
            {
              model: UserAddress,
              as: 'Address',
              include: [{
                model: User,
                as: 'User'
              }]
            },
            {
              model: ReservationItem,
              as: 'Items'
            }
          ]
        }
      ]
    }).then(function (data) {
      data = data.map((value) => value.dataValues);
      resolve(data);
    }).catch(function (err) {
      reject(`Unable to find services for user.` + err);
    });
  });
};

module.exports.userData = function (userId) {
  return new Promise(function (resolve, reject) {
    User.findAll({
      where: {
        userId: userId,
      },
      include: [{
        model: UserAddress,
        as: 'Address',
        include: [{
          model: Reservation,
          include: [{
            model: ReservationItem,
            as: 'Items',
            include: Services
          }]
        }]
      }]
    }).then(function (data) {
      data = data.map((value) => value.dataValues);
      resolve(data);
    }).catch(function (err) {
      reject(`Unable to find services for user.` + err);
    });
  });
};

module.exports.getServices = function (serviceId) {

  return new Promise(function (resolve, reject) {
    Services.findAll()
      .then(function (data) {
        data = data.map((value) => value.dataValues);

        resolve(data);
      })
      .catch(function (err) {
        console.log(err);
        reject(`Unable to find services for ${serviceId} category.`);
      });
  });
};