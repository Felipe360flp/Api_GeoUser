
export class User {
  id?:string;
  name:string;
  cpf_cnpj:string;
  email:string;
  password:string;
  permission?:string;
  agenda?:[];
  createdAt?:Date;
  updatedAt?:Date;
}
