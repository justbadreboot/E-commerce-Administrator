
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyCXQTdqHG9U04Z1v2WwYC_KYfD-5ws6N30",
  authDomain: "e-commerce-f94b4.firebaseapp.com",
  projectId: "e-commerce-f94b4",
  storageBucket: "e-commerce-f94b4.appspot.com",
  messagingSenderId: "877635723661",
  appId: "1:877635723661:web:ce72d77bda74f8076a9dc4",
  measurementId: "G-S7N8QSPQHZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

//Recibe el arametro file y retorna url del archivo

export async function uploadProductFile(file){
  const storageRef = ref(storage, `Products/${v4()}`)
  await uploadBytes(storageRef, file)
  const url=await getDownloadURL(storageRef)
  return url
}