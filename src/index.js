const app        = require('./app')


const port = process.env.PORT

// Disable HTTP Methods
// app.use((req, res, next) => {

//     const methodArray = ['GET', 'POST', 'DELETE', 'PATCH']
//     const isValid = methodArray.includes(req.method)

//     if (isValid) {

//         res.status(503).send('Method are disabled, site is currently down. Check back soon!')

//     } else {
//         next()
//     }

// })


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


