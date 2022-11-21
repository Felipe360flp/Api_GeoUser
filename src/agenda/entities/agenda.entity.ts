import { Client } from "@prisma/client";
import { Local } from "src/local/entities/local.entity";
import { Product } from "src/product/entities/product.entity";

export class Agenda {
  id?:string;
  userID:string;
  client:Client;
  clientID:string;
  pay:boolean;
  date:number;
  time:number;
  product:Product;
  productID:string;
  description?:string
  local?:Local;
  localID:string;
  createdAt?:Date;
  updatedAt?:Date;
}
