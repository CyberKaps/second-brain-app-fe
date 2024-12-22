import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function Signin() {

    const usernameRef = useRef<HTMLInputElement>();
    const PasswordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
    
        const username = usernameRef.current?.value;
        const password = PasswordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username,
                password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        //redirect user to the dashboard
        navigate("/dashboard")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={PasswordRef} placeholder="Password" />

            <div className="flex justify-center pt-4">
                <Button onClick={signin} loader={false} fullwidth={true} size="sm" varient="primary" text="Signin" />
            </div>

        </div>
    </div>
}