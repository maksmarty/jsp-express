module.exports = (express, app) => {
  const api = express.Router()

  api.get('/', (req, res) => {
    return res.json({
      success: true,
      message: 'Api Route',
    })
  })

  app.use('/api', api)


}
