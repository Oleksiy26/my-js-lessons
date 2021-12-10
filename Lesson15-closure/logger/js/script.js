export const createLogger = () => {
  const memory = [];
  function warn(message) {
    const warnInfo = {
      message,
      dateTime: new Date(),
      type: 'warn',
    };
    memory.push(warnInfo);
  }
  function error(message) {
    const errorInfo = {
      message,
      dateTime: new Date(),
      type: 'error',
    };
    memory.push(errorInfo);
  }
  function log(message) {
    const logInfo = {
      message,
      dateTime: new Date(),
      type: 'log',
    };
    memory.push(logInfo);
  }

  function getRecords(type) {
    if (!type) {
      return memory.sort((a, b) => b.dateTime - a.dateTime);
    }
    const message = memory.filter(elem => Object.values(elem).includes(type));
    return message.sort((a, b) => b.dateTime - a.dateTime);
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.error('Unexpecter error on the site');
logger.warn('User try to restricted page');
logger.warn('User try to restricted page');
logger.warn('User try to restricted page');
logger.warn('User try to restricted page');
logger.warn('User try to restricted page');
logger.warn('User try to restricted page');
logger.warn('User try to restricted page');
logger.warn('User try to restricted page');
logger.warn('User try to restricted page');
logger.warn('User try to restricted page');
logger.log('User logged out');

console.log('final', logger.getRecords());
