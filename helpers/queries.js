const password = require('./password.js');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const dbname = 'Q-and-A';
const uri = `mongodb+srv://GlennEdinburgh:${password.password}@cluster0.ztrpm.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect( err => {
  const collection = client.db("Q-and-A").collection("questions")
  if (err) { console.log(err)}
  console.log('accessed questions collection');
  client.close();
})

