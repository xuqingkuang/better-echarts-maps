var china = require('./dist/china');
var chinaRegions = require('./dist/china-regions');
var chinaProvinces = require('./dist/china-provinces');
var chinaCitiesCoordinate = require('./dist/china-cities-coordinate');

var all = china.China.concat(chinaRegions.ChinaRegions);
var all = all.concat(chinaProvinces.ChinaProvinces);

module.exports = {
  all: all,
  China: china.China,
  ChinaRegions: chinaRegions.ChinaRegions,
  ChinaProvinces: chinaProvinces.ChinaProvinces,
  ChinaCitiesCoordinate: chinaCitiesCoordinate.ChinaCitiesCoordinate
}
