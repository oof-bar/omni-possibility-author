const siteName = 'Omni-Possibility Author';
const siteDescription = 'I am Omni-Possibility Author, your companion in an instantaneous lateral promotion. What will you do next?';
const siteUrl = process.env.URL || 'http://localhost:3000';
const siteImage = `${siteUrl}/images/preview-image.png`;
const gaId = 'UA-71908679-2';

module.exports = {
  env: {
    // Netlify will populate this during a deploy:
    baseUrl: siteUrl,
    gaId: gaId
  },
  head: {
    titleTemplate: siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:url', content: siteUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: siteName },
      { property: 'og:description', content: siteDescription },
      { property: 'og:image', content: siteImage },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: siteName },
      { name: 'twitter:description', content: siteDescription },
      { name: 'twitter:image', content: siteImage },
      {
        hid: 'description',
        name: 'description',
        content: 'I am Omni-Possibility Author, your companion in an instantaneous lateral promotion. What will you do next?'
      }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://use.typekit.net/lgs5jab.css' }
    ],
    script: [
      { src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`, async: true }
    ],
  },
  css: [
    '~~/assets/scss/app.scss'
  ],
  plugins: [
    { src: '~~/plugins/ga.js', ssr: false }
  ]
}
