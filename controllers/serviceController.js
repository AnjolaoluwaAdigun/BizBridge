const Service = require('../models/service');

// Get all services
exports.getAllServices = (req, res) => {
  Service.find()
    .then(services => {
      res.send(services);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving services."
      });
    });
};

// Create a new service
exports.createService = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const service = new Service({
    name: req.body.name,
    contactPerson: req.body.contactPerson,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
    address: req.body.address,
    website: req.body.website,
    cacStatus: req.body.cacStatus
  });

  service.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the service."
      });
    });
};
