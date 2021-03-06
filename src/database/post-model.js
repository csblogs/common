import Sequelize from 'sequelize';
import { database } from '../database';
import User from './user-model';

const URI = Sequelize.STRING(2048);

const BlogPost = database.define('blog_post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  link: {
    type: URI,
    field: 'link',
    allowNull: false
  },
  imageURI: {
    type: URI,
    field: 'image_uri',
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT,
    field: 'description',
    allowNull: false
  },
  dateUpdated: {
    type: Sequelize.DATE,
    field: 'date_updated',
    allowNull: false
  },
  datePublished: {
    type: Sequelize.DATE,
    field: 'date_published',
    allowNull: false
  }
}, {
  underscored: true
});

export default BlogPost;
