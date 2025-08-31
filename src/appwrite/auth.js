// import cfg from "../cfg/cfg";
// import { Client, Account, ID } from "appwrite";

// export class AuthService {
//     client=new Client();
//     account;
//     constructor() {
//         this.client
//             .setEndpoint(cfg.appWriteUrl)
//             .setProject(cfg.appWriteProjectId);
//         this.account = new Account(this.client);
//     }
//     async createAccount({email,password,name }) {
//         try {
//             const userAccount = await this.account.create(ID.unique(),email,password,name);
//             if (userAccount) {
//                 return this.login({email,password});
//             } else {
//                 return userAccount;
//             }
//         } catch (error) {
//             console.log("Appwrite service :: createAccount :: error ", error);
//         }
//     }
//     async login({email,password}) {
//         try {
//             return await this.account.createEmailPasswordSession(email, password);
//         } catch (error) {
//             console.log("Appwrite service :: login :: error ", error);
//         }
//     }
//     async getCurrentUser() {
//         try {
//             return await this.account.get();
//         } catch (error) {
//             console.log("Appwrite service :: getCurrentUser :: error ", error);
//         }
//         return null;
//     }
//     async logout() {
//         try {
//             return this.account.deleteSessions();
//         } catch (error) {
//             console.log("Appwrite service :: logout :: error ", error);

//         }
//     }
// }



// const authService = new AuthService();

// export default authService;




import { Client, Account, ID } from "appwrite";
import cfg from "../cfg/cfg";

class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(cfg.appWriteUrl)
      .setProject(cfg.appWriteProjectId);

    this.account = new Account(this.client);
  }

// Signup with name, email, and password
async createAccount({ name, email, password }) {
  if (!email || !password || !name) throw new Error("Missing required signup fields");
  try {
    // Create user
    await this.account.create(ID.unique(), email, password, name);

    // Login after signup using the correct method
    return await this.account.createEmailPasswordSession(email, password);
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
}


  // Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  // Get current user safely
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      if (error.code === 401) {
        console.log("No active session. User not logged in.");
      } else {
        console.error("getCurrentUser error:", error);
      }
      return null;
    }
  }

  // Logout
  async logout() {
    try {
      await this.account.deleteSession("current");
      return true;
    } catch (error) {
      console.error("Logout error:", error);
      return false;
    }
  }
}

const authService = new AuthService();
export default authService;
