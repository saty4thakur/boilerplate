const log4js = require('log4js');

log4js.configure(
  {
    appenders: {
      execution: {
        type: 'file',
        filename: `${process.cwd()}./Reports/Execution.log`,
        maxLogSize: 10485760,
        backups: 3,
        compress: true,
        flags: 'w',

      },
      console: {
        type: 'console',
      },
    },
    categories: {
      default: {
        appenders: ['execution', 'console'],
        level: 'INFO',
      },
    },
  },
)

const logs = log4js.getLogger('execution');

module.exports = { logs }
