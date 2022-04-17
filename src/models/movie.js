const fs = require('fs');
const { ObjectId } = require('mongodb');
const connection = require('./connection');

const insert = async (movie) => connection()
  .then((db) => db.collection('movies').insertOne(movie))
  .then((result) => result.ops[0]);

const getAll = async () => connection()
  .then((db) => db.collection('movies').find().toArray())
  .then((result) => result);

const find = async (id) => connection()
  .then((db) => db.collection('movies').findOne({ _id: ObjectId(id) }))
  .then((result) => result)
  .catch(() => null);

const remove = async (id) => connection()
  .then((db) => db.collection('movies').deleteOne({ _id: ObjectId(id) }));

const edit = async (id, edition) => connection()
  .then((db) => db.collection('movies').updateOne(
    { _id: ObjectId(id) },
    { $set: { ...edition } },
  ));

const search = async (field, pattern) => connection()
    .then((db) => db.collection('movies').find({
      [field]: { $regex: pattern, $options: 'i' }
    }).toArray())
    .then((result) => result)
    .catch(() => null);

module.exports = {
  insert,
  getAll,
  find,
  remove,
  edit,
  search,
}
