const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});
const Basket = sequelize.define('basket', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  prodid: { type: DataTypes.INTEGER },
  address: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  count: { type: DataTypes.INTEGER },
});

const BasketItem = sequelize.define('basket_item', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
  size: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER },
  imageUrl: { type: DataTypes.STRING, unique: true },
});
const Item = sequelize.define('item', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  imageUrl: { type: DataTypes.STRING, unique: true },
  col: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
  sz: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
  type: { type: DataTypes.INTEGER },
  price: { type: DataTypes.INTEGER },
  category: { type: DataTypes.INTEGER },
  count: { type: DataTypes.INTEGER },
  rating: { type: DataTypes.INTEGER },
  info: { type: DataTypes.STRING },
});

const Color = sequelize.define('color', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  colname: { type: DataTypes.STRING, unique: true },
});

const ShoesSize = sequelize.define('shoessize', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.INTEGER, unique: true },
});
const ClothSize = sequelize.define('clothsize', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.INTEGER, unique: true },
});

BasketItem.belongsTo(Item);

module.exports = {
  User,
  Basket,
  BasketItem,
  Item,
  Color,
  ShoesSize,
  ClothSize,
};
