import { Sequelize, Model } from 'sequelize';

export default class Produto extends Model {
  static init(sequelize) {
    super.init({
      idProduto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      ean: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          msg: 'Produto já existente',
        },
        validate: {
          isInt: {
            msg: 'Codigo invalido',
          },
        },
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Categoria invalida',
          },
        },
      },
      precoCompra: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      precoVenda: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'A descrição não pode ser nulo ou vazio',
          },
        },
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'A cor não pode ser fazio ou nulo',
          },
        },
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'O modelo não pode ser nulo ou vazio',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
