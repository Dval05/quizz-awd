const port=4002;
const express=require('express');
const app=express();
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://Danna:Danna@cluster0.ravjkye.mongodb.net/nicekids');

const db=mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('System connected to MongoDb Database'));
app.use(express.json());

const accessRoutes = require('./routes/accessRoutes');
app.use('/nicekids', accessRoutes);
app.listen(port, () => {
    console.log(`Danna NiceKidsCenter Server is running on port --> ${port}`);
});
module.exports = app;