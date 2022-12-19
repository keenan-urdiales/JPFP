const router = require('express').Router()

router.use('/campus', require('./campus'))
router.use('/students', require('./student'))

module.exports = router