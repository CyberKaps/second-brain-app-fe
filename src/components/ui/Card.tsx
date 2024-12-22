import { ReactElement } from "react";
import { ShareIcon } from "../../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = ({title, link, type}: CardProps) => {
  return (
    <div>
      <div className="p-4 bg-white rounded-md border  max-w-72 min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className=" text-gray-500 pr-2">
              <ShareIcon size="md" />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
             <a href={link} target="_blank">
             <ShareIcon size="md" />
             </a>
            </div>

            <div className=" text-gray-500">
              <ShareIcon size="md" />
            </div>
          </div>
        </div>
        
        <div className="pt-4">
           
           {type === "youtube" &&  <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

            {type === "twitter" && <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}

        </div>

      </div>
    </div>
  );
};