const { MongoClient } = require('mongodb');


// Connection URL
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

// Database Name
const databaseName = 'e-comm';

async function dbConnect() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('products');
}

module.exports = dbConnect;