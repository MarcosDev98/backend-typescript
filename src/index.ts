import express from 'express';

const app = express()

app.use(express.json()) // middleware que transoforma la req.body a un JSON.

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  
  res.send('pong')
})


app.listen(PORT, () => {
  console.log('server running on port ', PORT)
})
