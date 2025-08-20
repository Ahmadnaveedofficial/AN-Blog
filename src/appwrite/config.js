import cfg from "../cfg/cfg";
import { Client, ID, Databases, Query } from "appwrite";

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
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                cfg.appWriteDatabaseId,
                cfg.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error ", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                cfg.appWriteDatabaseId,
                cfg.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error ", error);
        }
    }
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                cfg.appWriteDatabaseId,
                cfg.appWriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error ", error);
        }
        return false
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                cfg.appWriteDatabaseId,
                cfg.appWriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error ", error);
        }
        return false;
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                cfg.appWriteDatabaseId,
                cfg.appWriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error ", error);
        }
        return false;
    }
    // Storage related methods
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                cfg.appWriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error ", error);
        }
        return false;
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                cfg.appWriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error ", error);
        }
        return false;
    }
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            cfg.appWriteBucketId,
            fileId,
        )
    }
}

const service = new Service();
export default service
