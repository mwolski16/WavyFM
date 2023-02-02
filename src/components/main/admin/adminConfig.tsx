import {db_fire, firestore} from "../../firebase/firebase_config";
import {doc, updateDoc, getDoc} from "firebase/firestore";
import {useState} from "react";

export async function getDisplayElements() {
    const collection = db_fire.collection("admin_variables");
    const docRef = doc(firestore, "admin_variables", "covers");
    const docSnap = await getDoc(docRef);
    // @ts-ignore
    return docSnap.data().numOfCovers || 10;
}
export async function setDisplayElements(e:any, a:any) {
    e.preventDefault();
    const collection = db_fire.collection("admin_variables");
    collection.get().then((snapshot) => {
        snapshot.forEach(element => {
            const docRef = doc(firestore, "admin_variables", "covers");
            console.log(a);
            updateDoc(docRef, {
                numOfCovers: a
            })
        })
    })
}