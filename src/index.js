import Sequelize from 'sequelize';

let log;
export { BlogPost } from './database/post-model';
export { User } from './database/user-model';
export { UserSchema } from './database/user-schema';

function logSQLStatements(sqlStatement) {
  log.info({ sqlStatement }, 'SQL Statement Executed');
}

export function init(logger) {
  log = logger;
}

export const database = new Sequelize(
  process.env.CSBLOGS_DATABASE_NAME,
  process.env.CSBLOGS_DATABASE_USERNAME,
  process.env.CSBLOGS_DATABASE_PASSWORD, {
    host: process.env.CSBLOGS_DATABASE_HOST,
    port: process.env.CSBLOGS_DATABASE_PORT,
    logging: process.env.CSBLOGS_DATABASE_LOG_SQL_STATEMENTS ? logSQLStatements : false,
    dialect: 'postgres'
  });
