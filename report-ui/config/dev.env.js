'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://111.229.252.74:9095"'
  //BASE_API: '"http://10.108.26.197:9095"'http:///
})
