import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client"

declare function query(client: DocumentClient)
  : (table: String)
  => (options: DocumentClient.QueryInput)
  => Promise<Object>;

  declare function get(client: DocumentClient)
  : (table: String)
  => (key: Object, options: DocumentClient.GetItemInput)
  => Promise<Object>;

declare function scan(client: DocumentClient)
  : (table: String)
  => (options: DocumentClient.ScanInput)
  => Promise<Array<Object>>;

declare function put(client: DocumentClient)
  : (table: String)
  => (item: Object, options: DocumentClient.PutItemInput)
  => Promise<Object>;

declare function update(client: DocumentClient)
  : (table: String)
  => (key: Object, options: DocumentClient.UpdateItemInput)
  => Promise<Object>;

declare function remove(client: DocumentClient)
  : (table: String)
  => (key: Object, options: DocumentClient.DeleteItemInput)
  => Promise<Object>;

exports.query = query;
exports.get = get;
exports.scan = scan;
exports.put = put;
exports.update = update;
exports.remove = remove;
