import { useState } from "react"

function NoteButton(){
    const[open , setOpen] = useState(false);
    const[note , setNote] = useState([]);

    const handleSideBar = () =>{
        setOpen(!open);   
    }

    const handlekeyDown= (e) => {        
        if(e.key === "Enter"){
            handleSideBar();            
        }
    } 

return(
    <div>
        <button 
            className="note-button"
            type = "button"
            onClick={handleSideBar}
        >
            🕮
        </button>

        {open && (
            <div className="note">
                <header className="note-header">
                    <h3>Special Note</h3>
                </header>
                <textarea
                    className="note-textarea"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Write your note here..."
                    onKeyDown={handlekeyDown}
                />
            </div>
        )}
    </div>
)

}
export default NoteButton