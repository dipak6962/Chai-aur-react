import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Authservice{
     client=new Client();
     account;

     constructor(){
          this.client
               .setEndpoint(conf.appwriteUrl)
               .setProject(conf.appwriteProjectId)
          this.account=new Account(this.client);
     }
     
     async createAccount({email,password,name}){
          try {
              const createacc= await this.account.create(ID.unique,email,password,name);
              //call login function
               
          } catch (error) {
               throw error;
          }
     }
     async login({email,password}){
          try {
               await this.account.createEmailSession(email,password)
               
          } catch (error) {
               throw error;
          }
     }
     
}

export default Authservice;