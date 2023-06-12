import { join } from 'node:path'
import express from 'express'
import fileUpload from 'express-fileupload'

const server = express()
import basicRoute from './routes/routers'

server.use(fileUpload())
server.use(express.json({ limit: '10mb' }))
server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/basic', basicRoute)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'))
})

export default server
