const {db} = require('./server/db/index')
const {Student, Campus} = require('./server/db/index.js')

const campus = [
    {
name: 'Hawaii University',
defaultImage:'https://sites.google.com/site/mrtrampeconestogapublicschools/_/rsrc/1493899387670/542017/zoolander_center.jpg',
address: 'Ap #879-5523 Aliquam Avenue',
description: 'very good school please come'
    },
    {
    name: 'Dwight Schrute School for learning',
    defaultImage:'https://sites.google.com/site/mrtrampeconestogapublicschools/_/rsrc/1493899387670/542017/zoolander_center.jpg',
    address: 'Ap #500-3232 Metus. Street',
    description: 'Bears! Beets! Battle Star Galatica!'
    },
    {
        name: "the Derek Zoolander Center for Kids Who Can't Read Good and Who Wanna Learn to Do Other Stuff Good Too",
        defaultImage:'https://sites.google.com/site/mrtrampeconestogapublicschools/_/rsrc/1493899387670/542017/zoolander_center.jpg',
        address: 'P.O. Box 428, 6229 Molestie Street',
        description: "Don't worry its no longer a school for ants! It's at least 3 times bigger!"
        },
       {
            name: 'East High School',
            defaultImage:'https://sites.google.com/site/mrtrampeconestogapublicschools/_/rsrc/1493899387670/542017/zoolander_center.jpg',
            address: '379-5342 Nam St.',
            description: 'Zac Efron free since 2006!'
            }
        ]
        const student = [
{
        firstName:'Lucian',
        lastName: 'Vaughn',
        email: 'lacus@aol.net',
        defaultImage:'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/4e3UJ5WY9EKhat70ZhI4FRt5cbZfYQ.jpg',
        gpa: 3.5
    },
    {
        firstName: 'Louis',
        lastName: 'Atkins',
        email: 'cras.dictum@outlook.com',
        defaultImage:'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/4e3UJ5WY9EKhat70ZhI4FRt5cbZfYQ.jpg',
        gpa: 4.0
    },
   {
        firstName: 'Ethan',
        lastName: 'Cohen',
        email: 'nibh.lacinia@hotmail.couk',
        defaultImage:'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/4e3UJ5WY9EKhat70ZhI4FRt5cbZfYQ.jpg',
        gpa: 2.8
    },
{
        firstName: 'Allegra',
        lastName: 'Hughes',
        email:'dignissim.lacus.aliquam@google.org',
        defaultImage:'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/4e3UJ5WY9EKhat70ZhI4FRt5cbZfYQ.jpg',
        gpa: 1.2
    },
{
        firstName: 'Rina',
        lastName: 'Salinas',
        email: 'sapien.aenean@outlook.org',
        defaultImage:'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/4e3UJ5WY9EKhat70ZhI4FRt5cbZfYQ.jpg',
        gpa: 3.9
    }
]

const seed = async () => {
    try {
        await db.sync({force:true})
        await Promise.all(student.map((student) => {
            return Student.create(student)
        }))
        await Promise.all(campus.map((campus) => {
            return Campus.create(campus)
        }))
        console.log('Ayyyy that garden was seeded playa')
    } catch (error) {
console.log('Its Snoop double diggity dog tellin ya that something went wrong playaaa')
console.log(error)
    }
}
seed()
