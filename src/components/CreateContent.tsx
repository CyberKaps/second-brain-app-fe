import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

//controlled component
export function CreateContent({open, onClose}) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube)


    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type
        },{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
    }
    return <div>
        {open && <div>
            
             <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            
            </div>

            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">

            <div className="flex flex-col justify-center">
               
               <span className="bg-white opacity-100 p-4 rounded-md">
                    <div className="flex justify-end">
                       <div onClick={onClose} className="cursor-pointer">
                       <CrossIcon /> 
                       </div>
                    </div>
                    <div>
                        <Input reference={titleRef} placeholder={"title"} />
                        <Input reference={linkRef} placeholder={"link"} />

                    </div>

                    <h1 className="pl-2">Type</h1>
                    
                    <div className="flex mt-2 mb-4">
                        <Button size="sm" text = "Youtube" varient={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                            setType(ContentType.Youtube)
                        }}></Button>
                        <Button size="sm" text = "Twitter" varient={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                            setType(ContentType.Twitter)
                        }}></Button>

                    </div>

                    <div className="flex justify-center">
                      <Button onClick={addContent} varient="primary" text="Submit" size="sm" />
                    </div>
                </span> 
            
               </div>
            
            </div>

            

            </div>}
    </div>
}


