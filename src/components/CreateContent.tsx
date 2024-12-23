import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./ui/Button";


//controlled component
export function CreateContent({open, onClose}) {
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
               <div className="flex flex-col justify-center">
               
               <span className="bg-white opacity-100 p-4 rounded-md">
                    <div className="flex justify-end">
                       <div onClick={onClose} className="cursor-pointer">
                       <CrossIcon /> 
                       </div>
                    </div>
                    <div>
                        <Input placeholder={"title"} />
                        <Input placeholder={"link"} />

                    </div>
                    <div className="flex justify-center">
                      <Button varient="primary" text="Submit" size="sm" />
                    </div>
                </span> 
            
               </div>
            
            </div>}
    </div>
}


