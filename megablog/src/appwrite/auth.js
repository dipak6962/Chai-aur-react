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
     async getCurrentUser(){
          try {
               await this.account.get();

          } catch (error) {
               console.log("Appwrite serive :: getCurrentUser :: error", error);
          }
     }
     async logout(){
          try {
               await this.account.deleteSessions();
               
          } catch (error) {
               console.log("Appwrite serive :: logout :: error", error);

          }
     }

}
const authservice=new Authservice();

export default authservice;