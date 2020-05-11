module.exports = {
  index(req,res){
    return res.render('chefs/index')
  },
  create(req, res){
    return res.render('chefs/create')
  }
}