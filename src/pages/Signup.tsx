import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Signup() {
    const usernameRef = useRef<HTMLInputElement>();
    const PasswordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate()

    async function signup() {
    
        const username = usernameRef.current?.value;
        const password = PasswordRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password
        })
        navigate("/signin")
        alert("you have signed up")
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={PasswordRef} placeholder="Password" />

            <div className="flex justify-center pt-4">
                <Button onClick={signup} loader={false} fullwidth={true} size="sm" varient="primary" text="Signup" />
            </div>

        </div>
    </div>
}