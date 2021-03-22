const express = require("express");
const BookAProController = require("../Model/BookAProModel");

BookAProController.initialize()
  .then(() => {
    console.log("IT WAS EASY");
  })
  .catch(function (err) {
    console.log(err);
  });
