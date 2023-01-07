import {
    collection,
    getDocs,
    query,
    where,
    doc,
    getDoc,
    orderBy,
    setDoc,
} from "firebase/firestore";

import { db } from "./firebaseConfig";

export const fetchFromFirebase = async (categoryId) => {
    let q;
    if (categoryId) {
        q = query(
            collection(db, "products"),
            where("category", "==", categoryId)
        );
        document.title = `Farmacia Maffi | ${categoryId}`;
    } else {
        q = query(collection(db, "products"), orderBy("name"));
        document.title = "Farmacia Maffi | Home";
    }

    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
    }));

    return dataFromFirestore;
};

export const fetchOneFromFirebase = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: id,
            ...docSnap.data(),
        };
    } else {
        console.log("No such document!");
    }
};

export const createOrderFireBase = async (order) => {
    const newOrderRef = doc(collection(db, "orders"));

    await setDoc(newOrderRef, order);
    return newOrderRef;
};
