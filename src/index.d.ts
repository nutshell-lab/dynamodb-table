import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

export interface Item {
  key: Object;
  data: Object;
}

declare function query(client: DocumentClient)
  : (table: String)
  => (options: DocumentClient.QueryInput)
  => Promise<Item>;

  declare function get(client: DocumentClient)
  : (table: String)
  => (key: Object, options: DocumentClient.GetItemInput)
  => Promise<Item>;

declare function scan(client: DocumentClient)
  : (table: String)
  => (options: DocumentClient.ScanInput)
  => Promise<Array<Item>>;

declare function put(client: DocumentClient)
  : (table: String)
  => (item: Item, options: DocumentClient.PutItemInput)
  => Promise<Item>;

declare function update(client: DocumentClient)
  : (table: String)
  => (key: Object, options: DocumentClient.UpdateItemInput)
  => Promise<Item>;

declare function remove(client: DocumentClient)
  : (table: String)
  => (key: Object, options: DocumentClient.DeleteItemInput)
  => Promise<Item>;

exports.query = query;
exports.get = get;
exports.scan = scan;
exports.put = put;
exports.update = update;
exports.remove = remove;
