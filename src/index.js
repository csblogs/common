import {initDbLogger, database } from './database';
import User from './database/user-model';
import UserSchema from './database/user-schema';
import BlogPost from './database/post-model';
import Organisation from './database/organisation-model';

User.belongsToMany(Organisation, { through: 'organisation_users' });
Organisation.belongsToMany(User, { through: 'organisation_users' });

Organisation.belongsTo(User, {
  as: 'admin',
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'adminId',
    field: 'admin_id',
    allowNull: false
  }
});

BlogPost.belongsTo(User, {
  as: 'author',
  onDelete: 'CASCADE',
  foreignKey: {
    name: 'authorId',
    field: 'author_id',
    allowNull: false
  }
});

export {
  initDbLogger,
  database,
  User,
  UserSchema,
  BlogPost,
  Organisation
};
