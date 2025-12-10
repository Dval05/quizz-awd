const express = require('express');
const Role = require('../models/role');
const router = express.Router();

//Role: GET ALL
router.get('/role', async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Role: GET ONE
router.get('/role/:id', async (req, res) => {
  try {
    const idParam = req.params.id;
    const idNum = Number(idParam);
    const isNumeric = !Number.isNaN(idNum);

    const role = isNumeric
      ? await Role.findOne({ RoleID: idNum })
      : await Role.findById(idParam);

    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.json(role);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Role: POST (insert)
router.post('/role', async (req, res) => {
  try {
    const role = new Role({
      _id: req.body._id,
      RoleID: req.body.RoleID,
      RoleName: req.body.RoleName,
      Description: req.body.Description,
      IsActive: req.body.IsActive ?? 1
    });
    const created = await role.save();
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
