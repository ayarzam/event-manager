const {db, Event} = require('../models/index')

const seed = async () => {
  await db.sync({force: true})

  await Event.create({
    personName: 'Mom',
    taskName: 'Check Plane ticket',
    date: 2019 - 12 - 20
  })
  await Event.create({
    personName: 'Dad',
    taskName: 'Buy presents',
    date: 2019 - 12 - 15
  })
  await Event.create({
    personName: 'Grandma',
    taskName: 'Book Plane tickets',
    date: 2019 - 12 - 15
  })
  db.close()
  console.log(
    `Seeding successful! 
    Time to add more events!`
    )

}
seed().catch(err => {
  db.close()
  console.log(
    `Error seeding:

    ${err.message}

    ${err.stack}`
    )

})
