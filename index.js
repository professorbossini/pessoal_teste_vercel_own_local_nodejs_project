const express = require ('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({msg: 'up and running'})
})


app.listen (3000, () => console.log('running'))