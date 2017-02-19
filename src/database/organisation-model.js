import Sequelize from 'sequelize';
import { database } from '../database';
import User from './user-model';

const URI = Sequelize.STRING(2048);

const Organisation = database.define('organisation', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
    allowNull: false
  },
  verified: {
    type: Sequelize.BOOLEAN,
    field: 'verified',
    defaultValue: false,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false
  },
  pictureURI: {
    type: URI,
    field: 'picture_uri',
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    field: 'description',
    allowNull: false
  }
});

export default Organisation;
