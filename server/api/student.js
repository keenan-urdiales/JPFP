const router = require('express').Router()
const {Student,Campus} = require('../db/index')


//api for campus
router.get('/',async (req,res,next)=> {
    console.log('this is a log for get students')
    try {
        const students = await Student.findAll()
        res.json(students)
        console.log('This is the log!!!!', students )
    } catch (error) {
        next(error)
    }
})

//api campus 1 
router.get('/:studentId',async (req,res,next)=> {
    console.log('this is a log for get student')
    try {
        const student = await Student.findByPk(req.params.studentId, {
            include: [Campus]
        })
        res.json(student)
    } catch(error) {
        next(error)
    }
})

router.post('/', async(req,res,next)=>{
    try {
        const student = await Student.create(req.body)
        res.send(student)
    }catch(error) {
        next(error)
    }
})

router.put('/:studentId', async (req,res,next)=>{
    try{
        const student = await Student.findByPk(req.params.studentId)
        res.send(await student.update(req.body))
    } catch(error) {
        next (error)
    }
})

router.delete('/:studentId', async(req,res,next)=> {
    try{
        const student = await Student.findByPk(req.params.studentId)
        await student.destroy()
        res.send(student)
    } catch(error) {
        next (error)
    }
})

module.exports = router

