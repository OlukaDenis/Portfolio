/* eslint-disable require-jsdoc */

/**
 * A wrapper for database connection. It centeralizes generic CRUD operations.
 * Here, we are implementing the Database class with Singleton design pattern
  * Singleton is a design pattern where we create only a single instance (or object) from a class
 *
 */
 const admin = require("firebase-admin");
 const moment = require("moment-timezone");
 const {initializeFirebaseApp, restore, backup} = require("firestore-export-import");
 const timezone = "Africa/Nairobi";
 const dateFormat = "YYYY-MM-DD HH:mm:ss";
 const serviceAccount = process.env.GCLOUD_PROJECT === "makao-app" ? require("../../makao-app-adminsdk.json") : require("../../makao-staging-firebase-adminsdk.json");
 
 class Database {
   constructor() {
     if (this.instance) return this.instance;
 
     Database.instance = this;
 
     // Since the functions and firestore run on the same server,
     //  we can simply use default credential.
     // However, if your app run different location, you need to create a JSON Firebase credentials
 
     // Initialize firebase admin
     const dbURL = process.env.GCLOUD_PROJECT === "makao-app" ? "https://makao-app.firebaseio.com" : "https://makao-staging.firebaseio.com";
     admin.initializeApp({
       credential: admin.credential.cert(serviceAccount),
       databaseURL: dbURL,
     });
     initializeFirebaseApp(serviceAccount);
 
     this.firestore = admin.firestore();
     admin.firestore().settings({ignoreUndefinedProperties: true});
   }
 
   async create(collection, data, key = null) {
     const payload = {
       ...data,
       createdAt: moment(new Date()).tz(timezone).format(dateFormat),
       updatedAt: moment(new Date()).tz(timezone).format(dateFormat),
       isDeleted: false,
       deletedAt: null,
     };
 
     const result = key ? await this.firestore.collection(collection).doc(key).set(payload) : await this.firestore.collection(collection).add(payload);
     data.id = key ? key : result.id;
     return data;
   }
 
   async getList(collection) {
     const result = await this.firestore.collection(collection).limit(10).get();
 
     const list = [];
     result.forEach((doc) => {
       const data = doc.data();
       data.id = doc.id;
       list.push(data);
     });
     return list.length ? list : null;
   }
 
   async getPaginatedList(collection, offset, limit) {
     const result = await this.firestore.collection(collection)
         .orderBy("updatedAt", "desc")
         .limit(limit)
         .offset(offset)
         .get();
 
     const list = [];
     result.forEach((doc) => {
       const data = doc.data();
       data.id = doc.id;
       list.push(data);
     });
     return list.length ? list : null;
   }
 
   async getSortedPaginatedList(collection, key, value, offset, limit) {
     const result = await this.firestore.collection(collection)
         .where(key, "==", value)
         .orderBy("updatedAt", "desc")
         .limit(limit)
         .offset(offset)
         .get();
 
     const list = [];
     result.forEach((doc) => {
       const data = doc.data();
       data.id = doc.id;
       list.push(data);
     });
     return list.length ? list : null;
   }
 
   async getDoubleSortedPaginatedList(collection, key, value, secondKey, secondValue, offset, limit) {
     const result = await this.firestore.collection(collection)
         .where(key, "==", value)
         .where(secondKey, "==", secondValue)
         .orderBy("updatedAt", "desc")
         .limit(limit)
         .offset(offset)
         .get();
 
     const list = [];
     result.forEach((doc) => {
       const data = doc.data();
       data.id = doc.id;
       list.push(data);
     });
     return list.length ? list : null;
   }
 
   async get(collection, id) {
     const result = await this.firestore.collection(collection).doc(id).get();
     if (!result.exists) return null; // Record not found
 
     const doc = result.data();
     doc.id = result.id;
     return doc;
   }
 
   async filter(collection, dataKey, value) {
     const result = await this.firestore.collection(collection)
         .where(dataKey, "==", value)
         .get();
 
     const list = [];
     result.forEach((doc) => {
       const data = doc.data();
       data.id = doc.id;
       list.push(data);
     });
     return list.length ? list : null;
   }
 
   async secondLevelFilter(collection, firstKey, firstValue, secondKey, secondValue) {
     const result = await this.firestore.collection(collection)
         .where(firstKey, "==", firstValue)
         .where(secondKey, "==", secondValue)
         .get();
 
     const list = [];
     result.forEach((doc) => {
       const data = doc.data();
       data.id = doc.id;
       list.push(data);
     });
     return list.length ? list : null;
   }
 
   async secondFilterOrderBy(collection, byOrder, firstKey, firstValue, secondKey, secondValue) {
     const result = await this.firestore.collection(collection)
         .orderBy(byOrder, "asc")
         .where(firstKey, "==", firstValue)
         .where(secondKey, "==", secondValue)
         .get();
 
     const list = [];
     result.forEach((doc) => {
       const data = doc.data();
       data.id = doc.id;
       list.push(data);
     });
     return list.length ? list : null;
   }
 
   async thirdLevelFilter(collection, firstKey, firstValue, secondKey, secondValue, thirdKey, thirdValue) {
     const result = await this.firestore.collection(collection)
         .where(firstKey, "==", firstValue)
         .where(secondKey, "==", secondValue)
         .where(thirdKey, "==", thirdValue)
         .get();
 
     const list = [];
     result.forEach((doc) => {
       const data = doc.data();
       data.id = doc.id;
       list.push(data);
     });
     return list.length ? list : null;
   }
 
 
   async set(collection, id, data) {
     const doc = this.firestore.collection(collection).doc(id);
     const result = await doc.get();
 
     if (!result.exists) return null; // Record not found
 
     const payload = {
       ...data,
       updatedAt: moment(new Date()).tz(timezone).format(dateFormat),
     };
     // await doc.set(data);
     await doc.update(payload);
     const updateResult = await this.get(collection, id);
 
     return updateResult;
   }
 
   async delete(collection, id) {
     const doc = this.firestore.collection(collection).doc(id);
     const result = await doc.get();
 
     if (!result.exists) return null; // Record not found
 
     await doc.delete();
 
     return {id};
   }
 
   firestoreDb() {
     return this.firestore;
   }
 
   async importData(data) {
     const result = await restore(data);
 
     return !result ? "Data imported successfuly" : "Error importing data";
   }
 
   async exportData(collection) {
     const result = await backup(collection);
     return result;
   }
 }
 
 module.exports = new Database();