var chinaProvinces = require('./json/china-provinces.json');
var chinaRegions = require('./json/china-regions.json');
var provinces = require('./json/provinces');

var maps = [
  ['china', chinaProvinces],
  ['china-regions', chinaRegions],
]
maps = maps.concat(provinces);
module.exports = {
  all: maps,
};
