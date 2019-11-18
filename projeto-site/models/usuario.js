'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUsuario: {
			field: 'idUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		Nome: {
			field: 'Nome', // nome do campo da tabela
			type: DataTypes.STRING,
			allowNull: false
		},
		Login: {
			field: 'LoginUsuario', // nome do campo da tabela
			type: DataTypes.STRING,
			allowNull: false
		},
		Senha: {
			field: 'Senha', // nome do campo da tabela
			type: DataTypes.STRING,
			allowNull: false
		},
		Email: {
			field: 'Email', // nome do campo da tabela
			type: DataTypes.STRING,
			allowNull: false
		},
		Telefone: {
			field: 'Telefone', // nome do campo da tabela
			type: DataTypes.STRING,
			allowNull: false
		},
		Nivel_Acesso: {
			field: 'Nivel_acesso', // nome do campo da tabela
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'usuario', // nome da tabela
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
