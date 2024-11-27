"use client"

import { auth } from "@/firebase/client";
import { Button } from "./ui/button";
import { signInWithPopup, GoogleAuthProvider  } from "firebase/auth";

export default function ContinueWithGoogleButton(){
    return (
        <Button onClick={() => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        }}>
            Continue with Google
        </Button>
    )
}