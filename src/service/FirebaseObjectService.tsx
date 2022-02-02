import { collection, CollectionReference, doc, DocumentData, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import db from './firebase';

/**
    * Generic CRUD class for Firebase.
    * @param tableName: select database table for this object.
    */

export class FireBaseObjectService<T> {
    tableName: string;
    collectionRef: CollectionReference<DocumentData>;

    /**
     * Gets all documents for table
     */
    constructor(tableName: string) {
        this.tableName = tableName;
        this.collectionRef = collection(db, this.tableName);
    }

    /**
     * Gets all documents for table
     * @returns T
     */
    public async getAll() {
        let docs: any[] = [];
        try {
            const objects = await getDocs(this.collectionRef)
            if (objects) {
                objects.docs.map((doc) => {
                    docs.push(doc.data() as T);
                });
            }
            else {
                return [];
            }
            return docs;
        }
        catch (e) {
            console.error(e);
            return [];
        }
    }

    /**
     * Inserts/updates a document into database collection
     * @param T: Database entity
     * @returns boolean
     */
    public async add(object: T) {
        try {
            const reference = doc(collection(db, this.tableName));
            const obj = JSON.parse(JSON.stringify(object));
            obj["id"] = reference.id;
            await setDoc(reference, obj);
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }

    /**
     * Deletes a document from database collection
     * @param T: Database entity
     * @returns boolean
     */
    public async delete(id: string) {
        try {
            const reference = doc(db, this.tableName, id);
            await deleteDoc(reference);
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }
}