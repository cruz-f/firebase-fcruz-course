import { getDocs, query, where } from "firebase/firestore";
import { inviteCollectionRef } from "./collections";
import type { IInvite } from "../types";

export const fetchInvite = async (inviteId: string, inviteCode: string) => {
  try {
    const q = query(
      inviteCollectionRef,
      where("id", "==", inviteId),
      where("code", "==", inviteCode)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size === 1) {
      const doc = querySnapshot.docs[0];
      return doc.data() as IInvite;
    } else {
      console.error(
        "Invite not found or multiple invites found with the same criteria."
      );
      throw new Error("Invite not found or multiple invites found");
    }
  } catch (error) {
    console.error("Error fetching invite code:", error);
    throw new Error("Failed to fetch invite code");
  }
};
