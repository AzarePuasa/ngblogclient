#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const conn = mongoose.connection;
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    unique: true
  }
});

const Test = mongoose.model('test', schema);

const test = new Test({ name: 'one' });

async function run() {
  console.log(`mongoose version: ${mongoose.version}`);
  await conn.dropDatabase();
  await test.save();
  return conn.close();
}

run();