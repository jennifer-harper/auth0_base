import server from './server'
// const port = 3000
const port = process.env.PORT || 3000
// Use these node modules to set up .env file
const path = require('path')
const dotenv = require('dotenv')
// get the path of .env
const envPath = path.join(__dirname, '../.env')
// tell dotenv node module where to find our .env file
dotenv.config({ path: envPath })
server.listen(port, () => {
  console.log('Server listening on port', port)

})
