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

var Reservation = sequelize.define("Reservation", {
  reservationId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  booking_date: Sequelize.DATE,
  status: Sequelize.SMALLINT,
});

var ReservationItem = sequelize.define("Reservation_Item", {
  reservation_itemId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: Sequelize.INTEGER,
  total_price: Sequelize.DOUBLE,
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

User.hasMany(UserAddress, { foreignKey: "userId" });

UserAddress.hasMany(Reservation, { foreignKey: "user_addressId" });

User.belongsToMany(Services, { through: Cart });
Services.belongsToMany(User, { through: Cart });

Reservation.belongsToMany(Services, { through: ReservationItem });
Services.belongsToMany(Reservation, { through: ReservationItem });

User.belongsToMany(BlogCategory, { through: Blogs });
BlogCategory.belongsToMany(User, { through: Blogs });

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



module.exports.addUser = function(userData){
  return new Promise(function (resolve, reject) {
    userData.status = 2
    userData.role = 2
    User.create(userData).then(()=>{
        resolve("Employee Successfully Created")
    }).catch(function(err){
        console.log(err);
        reject("Unable to Create Employee");
    })
})
}