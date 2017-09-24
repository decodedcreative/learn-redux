import Raven from 'raven-js';

const sentry_key = 'a67a416069b946ba813103752d1db9b7';
const sentry_app = '221354';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
