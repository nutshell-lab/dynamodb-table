import AWS from 'aws-sdk'

AWS.config.setPromisesDependency(require('bluebird'))

export const query = client => table => async (options = {}) => {
  const repsonse = await client
    .query({ TableName: table, ...options })
    .promise()
  return repsonse.Item
}

export const get = client => table => async (key, options = {}) => {
  const repsonse = await client
    .get({ TableName: table, Key: key, ...options })
    .promise()
  return repsonse.Item
}

export const scan = client => table => async (options = {}, previous = []) => {
  const repsonse = await client.scan({ TableName: table, ...options }).promise()
  const items = [...previous, ...repsonse.Items]
  const lastKey = repsonse.LastEvaluatedKey
  if (!lastKey) return items
  return scan({ ...options, ExclusiveStartKey: lastKey }, items)
}

export const put = client => table => async (
  { key, data = {} },
  options = {}
) => {
  const item = { ...key, ...data }
  await client.put({ TableName: table, Item: item, ...options }).promise()
  return item
}

export const update = client => table => async (key, options = {}) => {
  const repsonse = await client
    .update({
      TableName: table,
      Key: key,
      ReturnValues: 'ALL_NEW',
      ...options
    })
    .promise()
  return repsonse.Attributes
}

export const remove = client => table => async (key, options = {}) => {
  const repsonse = await client
    .delete({
      TableName: table,
      Key: key,
      ReturnValues: 'ALL_OLD',
      ...options
    })
    .promise()
  return repsonse.Attributes
}
