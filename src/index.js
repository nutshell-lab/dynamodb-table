const Promise = require('bluebird')

module.exports.put = client => table => ({ primary, props }, options = {}) =>
  new Promise((resolve, reject) =>
    client
      .put({
        TableName: table,
        Item: { ...primary, ...props },
        ...options
      })
      .promise()
      .then(() => resolve({ ...primary, ...props }))
      .catch(error => reject(error))
  )
