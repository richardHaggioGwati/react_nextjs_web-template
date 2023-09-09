const express = require('express')
const app = express()

const port = process.env.PORT || 5000

app.get('/api', (req, res) => {
  res.json({ msg: 'running in the back of it all' })
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`)
})
