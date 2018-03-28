
export default ({ app }, inject) => {
  // Only run on client-side and only in production mode
  // if (process.env.NODE_ENV !== 'production') return;

  global.dataLayer = global.dataLayer || [];

  inject('ga', {
    track () {
      global.dataLayer.push(arguments);
    }
  });

  app.$ga.track('js', new Date());
  app.$ga.track('config', process.env.gaId);

  // We tell Google Analytics to add a `pageview`
  app.router.afterEach((to, from) => {
    app.$ga.track('set', 'page', to.fullPath);
    app.$ga.track('send', 'pageview');
  });
}
