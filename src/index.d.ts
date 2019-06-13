import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

export interface Item {
  primary: Object;
  props: Object;
}

declare function put(client: DocumentClient)
  : (table: String)
  => (item: Item, options: DocumentClient.PutItemInput) 
  => Promise<DocumentClient.PutItemOutput>;

exports.put = put;
