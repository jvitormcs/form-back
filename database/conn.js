const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u997776439_db_realixo_sit', 'u997776439_ragnermoura', '"Django77' ,{
    host: 'sql566.main-hosting.eu',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectado com sucesso')
} catch(err) {
    console.log(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize