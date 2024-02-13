const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});
module.exports = sequelize

sequelize.sync();

const app = require("./app");
app.listen(8000, () => console.log(`Dev Server is Running 8000`));
