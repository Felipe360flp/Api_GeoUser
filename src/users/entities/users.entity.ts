<<<<<<< HEAD
=======
import { Category } from "src/Category/entities/category-entity";
import { Transaction } from "src/Transaction/entities/transaction-entity";
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b

export class User {
  id?:string;
  name:string;
<<<<<<< HEAD
  cpf_cnpj:string;
  email:string;
  password:number;
  permission?:string;
=======
  email:string;
  password:string;
  cpf_cnpj:string;
  category?:Category;
  wallet?:number;
  transaction?: Transaction[];
>>>>>>> ed270f1cb46b6336ac77e5791a00ee4208845e0b
  createdAt?:Date;
  updatedAt?:Date;
}
