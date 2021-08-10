//const os = require('os');
//const car = require ('./car')
// console.log(os.type());
// clearconsole.log(os.platform());
//console.log(car)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.urlencoded({extended:false}))
app.set('view engine','pug')
app.set('views', './views')
app.get('/home',(req, res) => {
    // res.send('Welcome to the Home Page')
    res.render('home')
});
app.get('/page',(req, res) => {
    res.send('Testing the routes')
});
app.get('/page2', (req, res) =>{
    res.render('page2')
})
app.post('/register',(req, res) => {
    console.log(req.body)
    //res.json(req.body)
})
app.listen(3000,() =>{console.log('App is running')})