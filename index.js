const express = require('express');
const app = express();

// app.use((req, res)=>{
//   console.log('We got a new request');
//   res.send('Hello, We got your request! Here is the response.')
// });

app.get('/', (req,res) => {
  res.send('This is the Home Page!!!');
});

app.get('/r/:subreddit',(req, res) =>{
  const { subreddit } = req.params;
  res.send(subreddit);
});

app.get('/r/:subreddit/:postId',(req,res)=>{
  const { subreddit, postId } = req.params;
  res.send(`${subreddit} and ${postId}`);
});

app.get('/search',(req,res)=>{
  const { q } =req.query;
  if(!q){
    res.send('Nothing found if nothing searched!');
  }
  res.send(`Search results for ${q}`);
});

app.post('/cats', (req,res) => {
  res.send('This is a post request!Check in postman');
});

app.get('/cats', (req,res) => {
  res.send('MEOW!!');
});

app.get('/dogs', (req,res) => {
  res.send('WOOF WOOF!!');
});

app.get('*', (req,res) => {
  res.send(`I don't know that path`);
});


app.listen(3000, ()=>{
  console.log('Listening on Port 3000');
});
