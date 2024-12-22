
export interface ButtonProps {
    varient: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;
    fullwidth?: boolean;
    loader?: boolean;
 
}

const varientStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-500"

}

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

const defaultStyles = "rounded-md flex items-center ml-2 mt- mr-"

export const Button = ({varient, text, startIcon, endIcon, size, onClick, fullwidth, loader}: ButtonProps) => {

    return <button onClick={onClick} className={`${varientStyles[varient]} ${defaultStyles} ${fullwidth ? " w-full flex justify-center items-center" : ""} ${loader ? " opacity-45" : ""} ${sizeStyles[size]}`} disabled={loader

    }>{startIcon ? <div className="">{startIcon}
    </div> : null }{text} {endIcon}</button>

}


{/* <Button varient="primary" size="md" text={"asd"} startIcon={"-"} /> */}