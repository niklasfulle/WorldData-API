import mongoose from 'mongoose';
import { continentModel } from './model/continent.model';
import { oceanModel } from './model/ocean.model';
import { celestialBodieModel } from './model/celestialBodie.model';
import { cityModel } from './model/city.model';
import { currencyModel } from './model/currency.model';
import { seaModel } from './model/sea.mode';
import { countryModel } from './model/country.model';
import { mountainModel } from './model/mountain.model';
import { lakeModel } from './model/lake.model';
import { riverModel } from './model/river.model';
import { islandModel } from './model/island.model';

mongoose.connect(process.env.MONGODB_URL!);
mongoose.Promise = global.Promise;

export const mongoDb = {
  Continent: continentModel(),
  Ocean: oceanModel(),
  Sea: seaModel(),
  Country: countryModel(),
  City: cityModel(),
  Mountain: mountainModel(),
  Lake: lakeModel(),
  River: riverModel(),
  Island: islandModel(),
  Currency: currencyModel(),
  CelestialBodie: celestialBodieModel(),
};

// mongoose models with schema definitions

