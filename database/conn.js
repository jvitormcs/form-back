const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u626006440_banco_site', 'u626006440_rea_site_prin', 'R^?&Y?X~!l0' ,{
    host: 'sql816.main-hosting.eu',
    dialect: 'mysql'
})
/* const sequelize = new Sequelize('u623723531_teste', 'u623723531_testando', 'Macacocacocacocaco=001001032' ,{
    host: 'sql803.main-hosting.eu',
    dialect: 'mysql'
}) */

try{
    sequelize.authenticate()
    console.log('Conectado com sucesso')
} catch(err) {
    console.log(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize