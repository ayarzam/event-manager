const router = require('express').Router();
const {Event} = require('../../models');

router.get('/', (req, res, next) => {
  Event.findAll()
    .then(events => res.json(events))
    .catch(next);
})

router.get('/:eventId', (req, res, next) => {
  Event.findById(req.params.eventId)
    .then(event => res.json(event))
    .catch(next);
})

router.post('/', (req, res, next) => {
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(next);
})

router.put('/:eventId', (req, res, next) => {
  Event.findById(req.params.eventId)
    .then(event => event.update(req.body))
    .then(event => res.json(event))
    .catch(next);
})

router.delete('/:eventId', (req, res, next) => {
  Event.destroy({
    where: {
      id: req.params.eventId
    }
  })
    .then(() => res.status(204).end())
    .catch(next);
})

module.exports = router;
