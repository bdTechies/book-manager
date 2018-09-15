const path = require('path');
const Datastore = require('nedb-promises');

const createDatabase = (dbPath, dbName) => {
  let datastore;
  if (!dbPath || !dbName) {
    console.error(`DB path or name cannot be empty!`);
    return datastore;
  }
  return (datastore = Datastore.create({
    filename: path.join(dbPath, `${dbName}.db`),
    timestampData: true,
  }));
};

module.exports = {
  createDatabase,
};
