import conf from '../conf.js'

import { Client,  ID , Databases , Storage , Query } from "appwrite";



export class DataBaseService{
    Client = new Client();
    Databases;
    Storage

    constructor() {
        this.Client 
         .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.Databases = new Databases(this.Client)
        this.Storage = new Storage(this.Client)
    }

   // creating a post for the user
    async createPost({title , slug , content , featuredImage , status , UserId}) {
        try {
            return await this.Databases.createDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status ,
                    UserId

                }
            )
        } catch (error) {
            throw error
        }

    }

    // for updating the post
    async UpdatePost( slug , { title , content , featuredImage , status }) {
        try {
            await this.Databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,    
                }
            )
        } catch (error) {
            throw error
        }
    }
    
    // for the deleting the post 
    async DeletePost({slug}) {
        try {
            await this.Databases.deleteDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw error
            return null
        }
    }
  


    // to fetch the current the user single post 
   async GetPost() {
    try {
       return await this.Databases.getDocument(
            conf.appwriteDataBaseId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        throw error
    }
   }
   
   // tp fetch the current the user all posts
   async getPosts(queries = [Query.equal("status" , "active")]) {
      try {
        return await this.Databases.listDocuments(
            conf.appwriteDataBaseId,
            conf.appwriteCollectionId,
            queries,
           
        )
      } catch (error) {
        return error
      }
   }
 
    // uploading File Code 
  
    // uploading the file
    async UploadFile(file) {
    try {
        return await this.Storage.createFile(
            conf.appwriteBucketId, 
            ID.unique(),
            file
        )
    } catch (error) {
        throw error
    }
    }

    // deleting the file
    async DeleteFile(fileId) {
     try {
        return await this.Storage.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        
     } catch (error) {
        throw error
     }
    }

    // fileing the preview
     FilePreView(fileId) {
     try {
        return  this.Storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
     } catch (error) {
        throw error
     }
    }
}


const service = new service()
export default service