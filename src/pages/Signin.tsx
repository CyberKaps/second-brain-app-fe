import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";


export function Signin() {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded border min-w-48 p-8">
            <Input placeholder="Username" />
            <Input placeholder="Password" />

            <div className="flex justify-center pt-4">
                <Button loader={false} fullwidth={true} size="sm" varient="primary" text="Signin" />
            </div>

        </div>
    </div>
}