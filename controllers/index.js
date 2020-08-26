module.exports = {
  index,
  bananas,
  llamas,
  tacos
}

function index(req, res) {
  res.render('index')
}

function bananas(req, res) {
  res.render('bananas')
}

function llamas(req, res) {
  res.render('llamas')
}

function tacos(req, res) {
  res.render('tacos')
}