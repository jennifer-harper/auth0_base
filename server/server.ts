import { join } from 'node:path'
import express from 'express'
import fileUpload from 'express-fileupload'
/*
 * create the server
 *************************/

const server = express()
import basicRoute from './routes/routers'
/*
 * configure the server
 *************************/

server.use(express.json())
server.use(express.json({ limit: '10mb' }))
server.use(express.static(join(__dirname, 'public')))

/*
 * re-route to client-side
 *************************/
server.use(fileUpload())

server.use('/api/v1/basic', basicRoute)

server.get('*', (request, response) => {
  response.sendFile(join(__dirname, '/public/index.html'))
})

export default server
