import { collection, CollectionReference, doc, DocumentData, getDocs, deleteDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from './firebase';

/**
* Generic CRUD class for Firebase.
* @param tableName: database table name
*/

export class FireBaseObjectService<T> {
    private tableName: string;
    private collectionRef: CollectionReference<DocumentData>;

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
     * Inserts a document into database collection
     * @param T: database entity
     * @returns boolean
     */
    public async add(object: T) {
        try {
            const obj = JSON.parse(JSON.stringify(object));
            const reference = doc(this.collectionRef);
            obj['id'] = reference.id;
            await setDoc(reference, obj);
        }
        catch (e) {
            console.error(e);
            return false;
        }
    }

    /**
     * Deletes a document from database collection
     * @param T database entity
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


    /**
     * Updates or inserts document into collection
     * @param id object id
     * @param object updated/new object
     */
    public async update(id: string, object: T) {
        const reference = doc(db, this.tableName, id);
        await updateDoc(reference, object)
    }
}