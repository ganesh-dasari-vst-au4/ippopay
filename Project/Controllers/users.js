const Users = require("./../Models/Users");

const usersController = {};

//Add
usersController.add = (req, res) => {
  let { body } = req;
  console.log(body,'body');
  Users.create(body)
    .then((response) => {
      res.status(201).send({data:response,message:'User added!'});
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Failed to add User!");
    });
};

//Get
usersController.list = (req, res) => {
    Users.find({})
    .then((response) => {
      res.status(200).send({data:response,message:'Users fetched!'});
    })
    .catch((err) => {
      console.log(err);
      res.send(400).send("Failed to get Users!");
    });
};

//Delete
usersController.delete = (req, res) => {
    let { params } = req;
    Users.findByIdAndDelete({ _id: params.id })
      .then((response) => {
        res.status(200).send({message:'Users deleted!'});
      })
      .catch((err) => {
        console.log(err);
        res.send(500).send("Failed to delete Customers!");
      });
  };
  module.exports = usersController;