const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u455333490_formulario', 'u455333490_form', '6|TN28iOv' ,{
    host: 'sql485.main-hosting.eu',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectado com sucesso')
} catch(err) {
    console.log(`Não foi possível conectar: ${err}`)
}

module.exports = sequelize