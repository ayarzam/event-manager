const {db} = require('./models/db');
const app = require('./server/index');
const PORT = 3000;

const init = async () => {
 await db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
 console.log('db synced')
  app.listen(PORT, () => console.log(`server flyin on port ${PORT}`))
}

init();
