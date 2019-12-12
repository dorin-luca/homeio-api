const { ifExists } = require('./typeChecks');

exports.mapDataToModel = (data, mapperFunc) => {
  return !ifExists(data) ? null : data.map(mapperFunc);
};
