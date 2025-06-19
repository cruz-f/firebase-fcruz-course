import { collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const inviteCollectionRef = collection(db, "invite");
