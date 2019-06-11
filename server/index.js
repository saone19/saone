const functions = require('firebase-functions')
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const config = {
  dev: false,
  buildDir: `nuxt`,
  build: {
    publicPath: `/assets/`
  }
}
// Init Nuxt.js
const nuxt = new Nuxt(config)

async function handleRequest(req, res) {
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  return nuxt.render(req, res)
}
app.use(handleRequest)
exports.ssr = functions.https.onRequest(app)
