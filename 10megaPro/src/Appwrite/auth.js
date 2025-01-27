import conf from '../conf/conf.js'

import { Client, Account, ID } from "appwrite";


// this is for login the user 

export class AuthService {

    client = new Client(); // creating a new client
    account;
     
   // The constructor is a special method automatically invoked when the AuthService class is used.
    constructor() {
        this.client 
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
   
    // creating a account for the user 
    async createAccount({email , password , name}) {
        
    try {
    const UserAccount =  await this.account.create(ID.unique() , email , password , name)

      if (UserAccount) {
        return this.login({email , password})
        // call another method
      }
      else {
        return UserAccount;
      }
    } catch (error) {
        throw error
    }
    }
    
    
    // login the user
    async login({email , password }) {

        const UserLogin = await this.account.createEmailPasswordSession(email , password)

        try {
           if (UserLogin) {
            return UserLogin
           }

           else {
            return UserLogin
           }
            
        } catch (error) {
           throw error
        }
    }
    // get the current state of the user account
    async getCurrentUser() {
        try {

         return await this.account.get()

        } catch (error) {
            throw error
        }

         }

         // logout the user
    async Logout() {
        try {
            await this.account.deleteSessions()

        } catch (error) {
            return error
        }
    }
}


const authService = new AuthService() // creating a object 


export default authService
