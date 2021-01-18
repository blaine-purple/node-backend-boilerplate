const db = require('../database/db-config.js');

module.exports = {
  find,
  findById,
  resetWeekly,
  updateWeekly,
  add,
  edit,
  remove
}

function find() {
  return db('items')
}

function findById(id) {
  return db('items').where('id', id).first()
}

function add(item) {
  return db('items').insert(item)
}

function edit(id, item) {
  return db('items').update(item).where('id', id)
}

function remove(id) {
  return db('items').del().where('id', id)
}


function resetWeekly() {
  return db('items').where({ weekly: true }).update({ weekly: false })
}

function updateWeekly(ids) {
  return db("items").whereIn('id', ids).update({ weekly: true })
}