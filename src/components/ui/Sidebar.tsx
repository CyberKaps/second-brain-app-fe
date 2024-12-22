import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwiiterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";



export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed top-0 left-0 pl-6">
        <div className="flex text-2xl pt-8 items-center gap-2 ">
           <div className="text-purple-600">
             <Logo />
            </div> 
            <div className="font-semibold">
                Brainly
            </div>
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem text={"Twitter"} icon={<TwitterIcon />} />
            <SidebarItem text={"Youtube"} icon={<YoutubeIcon />} />

        </div>
    </div>
}