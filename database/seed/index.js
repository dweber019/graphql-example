const async = require('async');

/**
 * Call all seed exports
 */
async.waterfall(
  [
    require('./weapon.seed').teardown,
    require('./human.seed').teardown,
    require('./droid.seed').teardown,
    require('./war-place.seed').teardown,

    require('./weapon.seed').run,
    require('./human.seed').run,
    require('./droid.seed').run,
    require('./war-place.seed').run
  ], (err) => {
    if (err) throw err;
    console.log('Seed done!');
    process.exit(0);
  }
);