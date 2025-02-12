import { useState } from "react";

export const Box = ({children}) =>{
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="box">
            <button
            className="btn-toogle"
            onClick={() => setIsOpen((open) => !open)}>
                {isOpen ? "-" : "+"}
            </button>
            {isOpen && children}
        </div>
    )
}