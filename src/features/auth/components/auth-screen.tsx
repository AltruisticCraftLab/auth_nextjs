"use client";

import { useState } from "react";
import { SignInFlow } from "../types";

export const AuthScreen = () => {

    const [authState, setAuthState] = useState<SignInFlow>("signIn");


    return (
        <div className="h-full flex items-center justify-center bg-slate-500">
            Auth Screen
        </div>
    );
};