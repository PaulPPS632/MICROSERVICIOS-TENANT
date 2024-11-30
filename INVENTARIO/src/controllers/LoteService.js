class LoteService {
  async GetAll(req, res) {
    res.send("funciona");
  }
  async GetById(req, res) {
    res.send("funciona" + req.params.id);
  }
  async Save(req, res) {
    res.send("funciona");
  }
  async Update(req, res) {
    res.send("funciona" + req.params.id);
  }
  async Delete(req, res) {
    res.send("funciona" + req.params.id);
  }
}
module.exports = new LoteService();
