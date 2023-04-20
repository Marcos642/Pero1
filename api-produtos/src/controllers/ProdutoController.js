import ProdutoModel from '../models/Produto';

class ProdutoController {
  async create(req, res) {
    // responsavel por add o produto no db methodo POST
    try {
      const produto = await ProdutoModel.create(req.body);
      res.json(produto);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async findall(req, res) {
    // recupera todos os produtos metodo get
    try {
      const produtos = await ProdutoModel.findAll();
      res.json(produtos);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async findbyId(req, res) {
    // faz consulta com de um unico produto metodo GET
    const { id } = req.params;
    try {
      const produtos = await ProdutoModel.findByPk(id);
      res.json(produtos);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    // atualiza um produto metodo put
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const produto = await ProdutoModel.findByPk(id);

      if (!produto) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const produtoAtualizado = await ProdutoModel.update(req.body);
      return res.json(produtoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    // deleta um produto metodo delet
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const produto = await ProdutoModel.findByPk(id);

      if (!produto) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      await produto.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new ProdutoController();
