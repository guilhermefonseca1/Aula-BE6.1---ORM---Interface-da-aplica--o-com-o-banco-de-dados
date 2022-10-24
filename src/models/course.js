module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      creation_date: DataTypes.DATE,
    }, {
      underscored: true,
      //underscored: true TRANSFORMA CAMEL CASE EM SNACK CASE. SEM ELE, O ARQUIVO
      //NÃO CONSEGUE ACESSAR O BANCO DE DADOS
    });
  
    return Course;
  }