/*import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URL) {
  throw new Error('Invalid environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URL
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (!process.env.MONGODB_URL) {
  throw new Error('Please add your Mongo URI to .env.local')
}

client = new MongoClient(uri, options)
clientPromise = client.connect()

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise*/

import mongoose from 'mongoose';
import { continentModel } from './model/continent.model';
import { oceanModel } from './model/ocean.model';
import { celestialBodieModel } from './model/celestialBodie.model';
import { cityModel } from './model/city.model';
import { currencyModel } from './model/currency.model';

mongoose.connect(process.env.MONGODB_URL!);
mongoose.Promise = global.Promise;

export const mongoDb = {
  CelestialBodie: celestialBodieModel(),
  City: cityModel(),
  Continent: continentModel(),
  Currency: currencyModel(),
  Ocean: oceanModel()
};

// mongoose models with schema definitions

