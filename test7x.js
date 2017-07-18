const System = require('systemjs');
require('./config.js');
System.import('./test7.js').catch(e => { throw e; });

