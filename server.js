const Pusher = require('pusher')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const pusher = new Pusher({
  appID: '583397',
  key: '6adc10843981b62e1553',
  secret: '601cb6d8c6063391e0b2',
  cluster: 'ap1',
  encrypted: true
})

app.post('/message', (req, res) => {
  const payload = req.body
  pusher.trigger('chat','message', payload)
  res.send(payload)
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('Listening at ' + PORT)
})
app.on('listening',() => {
  console.log("listenning")
})