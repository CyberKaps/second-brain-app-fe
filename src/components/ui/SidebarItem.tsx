

export function SidebarItem({text, icon}) {
    return <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-44 pl-4 transition-all duration-200">
       <div className="pr-2">{icon}</div>
       <div className="">{text}</div>
    </div>

}