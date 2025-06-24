import { useState } from "react"

function NoteButton(){
    const[open , setOpen] = useState(false);
    const[note , setNote] = useState([]);

    const handleSideBar = () =>{
        console.log(note.length)
        setOpen(!open);
        
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
                <p style={{margin: "1%" , fontSize: "20px"}}>Special Note</p>
                <textarea
                    type="text"
                    value={note}
                    onChange={(e)=>setNote(e.target.value)}
                />
            </div>
        )}
    </div>
)

}
export default NoteButton