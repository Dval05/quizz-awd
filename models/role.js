const mongoose = require('mongoose');

const roleSchema = mongoose.Schema(
  {
    _id: { type: String },
    RoleID: { type: Number },
    RoleName: { type: String, required: true },
    Description: { type: String },
    IsActive: { type: Number, default: 1 }
  },
  { collection: 'role' }
);

module.exports = mongoose.model('role', roleSchema);