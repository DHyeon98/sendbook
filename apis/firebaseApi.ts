import { auth, db } from "@/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

export const postBookApi = async (data: any, collectionName: string) => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    await addDoc(collection(db, collectionName), { data });
  } catch (error) {
    console.log(error);
  }
};
