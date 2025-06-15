import { useState } from 'react';
import './App.css';
import { db } from './config/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

type IInvite = {
  id: string;
  name: string;
  code: string;
  attend: boolean;
};

function App() {
  const [inviteId, setInviteId] = useState<string | null>(null);
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [invite, setInvite] = useState<IInvite | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  const inviteCollectionRef = collection(db, "invite");

  const handleGetInvite = async () => {
    if (inviteCode) {
      try {
        const q = query(inviteCollectionRef, where("id", "==", inviteId), where("code", "==", inviteCode));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size === 1) {
          const doc = querySnapshot.docs[0];
          setInvite(doc.data() as IInvite);
          setNotFound(false);
        } else {
          setInvite(null);
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching invite code:", error);
      }
    }
  };

  return (
    <>
      {/* <Auth /> */}
      <div className="flex flex-col items-center justify-center h-screen">
        <input
          type="text"
          placeholder="Id do convite"
          className="mb-4 p-2 border border-gray-300 rounded"
          onChange={(e) => setInviteId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Código do convite"
          className="mb-4 p-2 border border-gray-300 rounded"
          onChange={(e) => setInviteCode(e.target.value)}
        />
        <button
          type="button"
          className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleGetInvite}
        >
          Ver o meu convite!
        </button>
        {invite && (
          <div className="p-4 border border-gray-300 rounded">
            <h2 className="text-lg font-bold">O teu convite</h2>
            <p><strong>Nome:</strong> {invite.name}</p>
            <p><strong>Código:</strong> {invite.code}</p>
            <p><strong>Presença:</strong> {invite.attend ? 'Sim' : 'Não'}</p>
          </div>
        )}
        {notFound && (
          <p className="text-red-500">Ooops! Não conseguimos encontrar o teu convite.</p>
        )}
      </div>
    </>
  )
}

export default App
