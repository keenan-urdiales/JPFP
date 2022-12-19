const router = require('express').Router()
const {Campus,Student} = require('../db/index.js')


// api for campus
router.get('/', async(req,res,next) => {
    try {
        const campuses = await Campus.findAll()
        res.json(campuses)
    } catch (error) {
        next (error)
    }
})
// api campus 1
router.get('/:campusId', async (req,res,next)=> {
    try{
        const campus = await Campus.findByPk(req.params.campusId, {
            include: [Student]
        })
        res.json(campus)
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req,res,next)=>{
    try{
        const campus = await Campus.create(req.body)
        res.send(campus)
    } catch (error) {
        next(error)
    }
})

router.put('/:campusId', async (req,res,next)=>{
    try{
        const campus = await Campus.findByPk(req.params.campusId)
        res.send(await campus.update(req.body))
    } catch (error) {
        next(error)
    }
})

router.delete('/:campusId',async(req,res,next)=>{
    try{
        const campus = await Campus.findByPk(req.params.campusId)
        await campus.destroy()
        res.send(campus)
    } catch(error) {
        next(error)
    }
})

module.exports = router