const endpoints = require('./endpoints.json');

function allCategories() {
  return getEndpoint('categories', 'getAll')
}

function allRecipes() {
  return getEndpoint('recipes', 'getAll')
}


/**
 * Gets the full endpoint for a given entity and query
 * @param {String} entities The entities you are referring to. Must be one of the following: "categories", "recipes"
 * @param {String} query The type of query you want. Must be one of the following: "getAll"
 * @returns 
 */
function getEndpoint(entities, query) {
  // When moving to production, add a check here to determine whether
  // this is being called from a dev or prod environment
  const environment = true ? 'dev' : 'prod'

  // prefix is the location of the host (for example http://localhost:5001/api)
  const prefix = true ? endpoints.dev.prefix : endpoints.prod.prefix

  if (!prefix) {
    throw "Invalid prefix"
  }

  // http://localhost:5001/api/entities
  const entity = endpoints[environment][entities]

  if (!entity) {
    throw "Invalid entity"
  }

  // http://localhost:5001/api/entities/getAll
  const url = entity[query]

  if (!url) {
    throw "Invalid query"
  }

  return prefix.concat(url)
}

module.exports = {allCategories, allRecipes}