import express from 'express'
import * as db from '../db/dataBase'

const router = express.Router()


router.get('/', async (req, res) => {
    try{
        const data = await db.fetchAllDB()
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

//*******************Delete existing

router.delete('/:id', async (req, res) => {
    try{
        await db.deleteDB(+req.params.id)
        res.sendStatus(200)
    } catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})


//******************* create new

router.post('/', async  (req, res) => {
    try{
        const newData = req.body
        const data = await db.createDB(newData)
        res.json(data[0])
    } catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

//******************* existing existing

router.get('/:id', async (req, res) => {
    try{
        const data = await db.getIdDB(+req.params.id)
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})

router.patch('/:id', async (req, res) => {        
    try{
        const data = await db.editDB(+req.params.id, req.body)
        res.json(data)
    }catch (e) {
        res.status(500).json({ msg: (e as Error).message })
    }
})




export default router