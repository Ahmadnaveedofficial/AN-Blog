import cfg from "../cfg/cfg";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(cfg.appWriteUrl)
            .setProject(cfg.appWriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title,
        slug,
        content,
        featuredImage = "",
        status = "active",
        userId
    }) {
        try {
            const documentId = slug && slug.length > 0 ? slug.replace(/\s+/g, '-').toLowerCase() : ID.unique();

            const payload={
                title,
                content,
                featuredImage,
                status,
                userId,
            };

            console.log("Creating post payload:",
                {
                    documentId, ...payload
                });

            return await this.databases.createDocument(
                cfg.appWriteDatabaseId,
                cfg.appWriteCollectionId,
                documentId,
                payload
            );
        } catch (error) {
            console.error("Appwrite service :: createPost :: error", error);
            throw error;
        }
    }

    async updatePost(slug, { title, content, featuredImage = "", status = "active" }) {
        try {
            const payload = { title, content, featuredImage, status };
            console.log("Updating post payload:", { slug, ...payload });

            return await this.databases.updateDocument(
                cfg.appWriteDatabaseId,
                cfg.appWriteCollectionId,
                slug,
                payload
            );
        } catch (error) {
            console.error("Appwrite service :: updatePost :: error", error);
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(cfg.appWriteDatabaseId, cfg.appWriteCollectionId, slug);
            return true;
        } catch (error) {
            console.error("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                cfg.appWriteDatabaseId, 
                cfg.appWriteCollectionId,
                 slug);
        } catch (error) {
            console.error("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries=[Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(cfg.appWriteDatabaseId, 
                cfg.appWriteCollectionId,
                queries);
        } catch (error) {
            console.error("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(cfg.appWriteBucketId,
                 ID.unique(), 
                 file);
              ['role:all']
        } catch (error){
            console.error("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(cfg.appWriteBucketId, 
                fileId);
            return true;
        } catch (error) {
            console.error("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(cfg.appWriteBucketId, 
            fileId);
    }
}

const service = new Service();
export default service;
