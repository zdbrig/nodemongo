//TODO

const express = require('express')
const router = express.Router()
//including schema
const Subscriber = require('../models/subscriber');


// Getting all
router.get('/', async (req, res) => {
  try {
    //we need to use await because this is an asynchronous method
    const subscribers = await Subscriber.find();
    //if we were sucessfull we want to send all the subscribers to the user
    res.json(subscribers)
  } catch (err) {
    //if there is an error, we want to send that to the user and we want to send it as JSON because
    //this is a json API
    //we also need to set the status so the user know that it was a failure
    //500 code means that is an error on your server
    res.status(500).json({message: err.message})
  }
})

// Getting One
// with the : means that this is a parameter that we can pass
router.get('/:id',getSubscriber, (req, res) => {
  res.json(res.subscriber)
})

// Creating one
router.post('/', async (req, res) => {
  const subscriber = new Subscriber({
    //the body is what the user send us
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  })
  try {
    //try to save
    const newSubscriber = await subscriber.save();
    //if sucessfull send this to our user using json and a status
    //201 means sucessfull created an object
    res.status(201).json(newSubscriber)
  } catch (err) {
    //400 means that the user didnt pass the name or a subscribed/give us bad data
    //and we want to inform the user, so send him a error message
    res.status(400).json({message: err.message})
  }
})

// Updating One
//we are going to use patch instead of put because we only want to update what the user pass us, witht put we would update everything
router.patch('/:id',getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name
  }
  if (req.body.subscribedToChannel != null) {
    res.subscriber.subscribedToChannel = req.body.subscribedToChannel
  }
  try {
    const updatedSubscriber = await res.subscriber.save()
    res.json(updatedSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id',getSubscriber, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({message: "Deleted Subscriber"})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
})


//Middleware function
//make this asynchronous because we are going to access the database inside our code
async function getSubscriber(req, res, next) {
  let subscriber;
  //next - move on to the next section of our code
  try {
    subscriber = await Subscriber.findById(req.params.id)
    if(subscriber == null) {
      //we add return because we want to immediatly leave this funcion if there is no subscriber
      return res.status(404).json({message: "Cannot find susbcriber"})
    }
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
  // create a variable on the response object and set that equal to subscriber,
  //that way we can call subscriber inside our other functions
  res.subscriber = subscriber
  //move to the next piece of code
  next();
}


module.exports = router