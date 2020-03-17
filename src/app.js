const express = require('express')
import  path from 'path';


import {connectDB } from './utils/connection';


const app = express()
const flowerRoutes = require('./routes/flower.routes')

const port = process.env.PORT ||  3000;
connectDB();
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use('/api/flowers' , flowerRoutes)


app.use((req, res, next) => {
    console.log('Method', req.method);
    console.log('ROUTE: ', req.route);
    next();
  });


  // app.use((error, req, res, next) => {
  //   console.log("error status : ", error.status);
  //   res.status(error.status || 500)
  //   res.json({
  //     error: {
  //       message: error.message
  //     }
  //   })
  // })


  // app.use((err, req, res, next) => {
  //   console.log('/////////////////////======*****', err, '*****=========\\\\\\\\\\\\ ');
  //   res.status(err.status || 400).send(err.message);
  // });
  
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))