// const mongoose = require("mongoose");

// mongoose.connect("mongodb:///127.0.0.1:27017/facebook").then(()=> console.log("success")).catch((err) => console.log(err));


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://karkinisal:karkinisal@cluster0.nanfvqs.mongodb.net/mernstack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
