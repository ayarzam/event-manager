const router = require('express').Router();
const morgan = require('morgan')
const Sequelize = require('sequelize')
const {Event} = require('../../models');

router.get('/events', async(req, res, next) => {
  try {
    const eventData = await Event.findAll(req.params)
    res.status(200).json(eventData)
  } catch (error) {
    next(error)
  }
})

router.get('/events/:id', async(req, res, next) => {
  try {
    const singleEvent = await Event.findById(req.params.id)
    res.json(singleEvent)
  } catch (error) {
    next(error)
  }
})

router.post('/events', async(req, res, next) => {
  try {
    const newEvent = await Event.create(req.bod)
    res.json(newEvent)
  } catch (error) {
    next(error)
  }
})

router.put('events/:id', async(req, res, next) => {
  try {
    const foundEvents = await Event.findById(req.params.id)
    const newEvent = await foundEvents.update(req.body)
    res.json(newEvent)
  } catch (error) {
    next(error)
  }
})

router.delete('events/:id', async(req, res, next) => {
  try {
    await Event.destroy(req.params.id)
    res.status(204)
  } catch (error) {
    next(error)
  }
})

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router;
