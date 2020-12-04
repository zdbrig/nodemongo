const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})
//the model fucntion takes 2 properties
//the first is the name of the model in our database
//the second is the schema that corresponds to this because when we export this and mport in a different
//file, this model allows us to interact directly with the database using this schema
module.exports = mongoose.model('Subscriber', subscriberSchema)