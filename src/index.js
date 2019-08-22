export const query = client => table => async (options = {}) => {
  const response = await client
    .query({ TableName: table, ...options })
    .promise()
  return response.Item
}

export const get = client => table => async (key, options = {}) => {
  const response = await client
    .get({ TableName: table, Key: key, ...options })
    .promise()
  return response.Item
}

export const scan = client => table => async (options = {}, previous = []) => {
  const response = await client.scan({ TableName: table, ...options }).promise()
  const items = [...previous, ...response.Items]
  const lastKey = response.LastEvaluatedKey
  if (!lastKey) return items
  return scan({ ...options, ExclusiveStartKey: lastKey }, items)
}

export const put = client => table => async (item, options = {}) => {
  await client.put({ TableName: table, Item: item, ...options }).promise()
  return item
}


export const update = client => table => async (key, options = {}) => {
  const response = await client
    .update({
      TableName: table,
      Key: key,
      ReturnValues: 'ALL_NEW',
      ...options
    })
    .promise()
  return response.Attributes
}

export const remove = client => table => async (key, options = {}) => {
  const response = await client
    .delete({
      TableName: table,
      Key: key,
      ReturnValues: 'ALL_OLD',
      ...options
    })
    .promise()
  return response.Attributes
}
