import {initDbLogger, database } from './database';
import User from './database/user-model';
import BlogPost from './database/post-model';
import UserSchema from './database/user-schema';

export {
  initDbLogger,
  database,
  User,
  UserSchema,
  BlogPost
};
