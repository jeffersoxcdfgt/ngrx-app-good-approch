export interface Login{
  email:string;
  password:string
}

export interface ResponseLogin {
   status: string;
   token: string;
}