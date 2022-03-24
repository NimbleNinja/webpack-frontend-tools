import { createLogger } from '../logger';

it('check empty loggers Array', () => {
  const emptyLogger = createLogger('Tom');
  expect([]).toEqual(emptyLogger.getLogs());
});

it('check loggers Array', () => {
  const logger = createLogger('Tom');
  logger.log('first log');
  expect([`log - first log - Tom`]).toEqual(logger.getLogs());
});

it('check loggers error message', () => {
  const loggerwithErr = createLogger('Tomas');
  loggerwithErr.error('first error');
  expect([`error - Tomas - first error`]).toEqual(loggerwithErr.getLogs());
});
