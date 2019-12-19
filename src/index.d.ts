import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client"

declare function query(client: DocumentClient)
  : (table: String)
  => (options?: DocumentClient.QueryInput)
  => Promise<any>;

  declare function get(client: DocumentClient)
  : (table: String)
  => (key: any, options?: DocumentClient.GetItemInput)
  => Promise<any>;

declare function scan(client: DocumentClient)
  : (table: String)
  => (options?: DocumentClient.ScanInput)
  => Promise<Array<any>>;

declare function put(client: DocumentClient)
  : (table: String)
  => (item: any, options?: DocumentClient.PutItemInput)
  => Promise<any>;

declare function update(client: DocumentClient)
  : (table: String)
  => (key: any, options?: DocumentClient.UpdateItemInput)
  => Promise<any>;

declare function remove(client: DocumentClient)
  : (table: String)
  => (key: any, options?: DocumentClient.DeleteItemInput)
  => Promise<any>;
