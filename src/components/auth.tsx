import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Login successful");
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-screen" >
            <input placeholder="Email"
                className="mb-4 p-2 border border-gray-300 rounded"
                type="email"
                onChange={emailOnChange} />
            <input placeholder="Password"
                className="mb-4 p-2 border border-gray-300 rounded"
                type="password"
                onChange={passwordOnChange} />
            <button
                type="button"
                className="mb-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSignIn}>
                Entrar
            </button>
        </div>
    )
}