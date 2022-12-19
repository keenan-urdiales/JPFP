const Sequelize = require('sequelize')
const db = require('./db')



const Campus = db.define('campus', {
name: {
    type: Sequelize.STRING(),
    allowNull: false,
},
imageUrl: {
    type: Sequelize.STRING(),
 defaultValue: 'https://sites.google.com/site/mrtrampeconestogapublicschools/_/rsrc/1493899387670/542017/zoolander_center.jpg'
},
address: {
    type: Sequelize.STRING(),
    allowNull: false,
},
description: {
    type: Sequelize.STRING(),
    allowNull: true,
},
    })

    

    module.exports = Campus