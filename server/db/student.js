const Sequelize = require('sequelize')
const db = require('./db')

const Student = db.define('student', {
   firstName: {
    type: Sequelize.STRING(),
    allowNull: false,
    validate: {
        notEmpty: true
    }
   },
   lastName: {
    type: Sequelize.STRING(),
    allowNull: false,
    validate: {
        notEmpty: true
    }
   },
   email: {
    type: Sequelize.STRING(),
    allowNull: false,
    validate: {
        notEmpty: true
    }
   },
   imageUrl: {type: Sequelize.STRING,
defaultValue: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/4e3UJ5WY9EKhat70ZhI4FRt5cbZfYQ.jpg',
},
gpa: {
    type: Sequelize.FLOAT,
    validate: {
        min: 0.0,
        max: 4.0
    }
},
})

module.exports = Student