import React , {useRef, useState} from "react";
import RemoveButton from '../removeButton/RemoveButton';
import CheckmarkButton from "../checkmarkButton/CheckmarkButton";
import ProgressBar from '../pregressBar/ProgressBar';
import NoteButton from "../noteButton/NoteButton";


function UserInput(){
    const[inputValue , setInputValue] = useState([""]);
    const[doneInputs, setDoneInputs] = useState([]);
    const inputRefs = useRef([]);

    const handlekeyDown= (e) => {        
        if(e.key === "Enter" ){
            setInputValue((prev) => [...prev, ""]);
            setDoneInputs((prev) => [...prev, false]);
            setTimeout(() => {
                const newIndex = inputValue.length; 
                const newInput = inputRefs.current[newIndex];
                if(newInput){
                  newInput.focus()
                } 
            }, 0); 
        }
    }           

    const handleChange= (e,index) => {
      const newValue = [...inputValue]
      newValue[index] = e.target.value;
      setInputValue(newValue);
    };

    const handleRemove = (indexToRemove) => {
      const updatedValues = inputValue.filter((_,index) => index !== indexToRemove);
      const updatedDoneInputs = doneInputs.filter((_, index) => index !== indexToRemove);
      setInputValue(updatedValues);
      setDoneInputs(updatedDoneInputs);
    };

    const handleCheckmark = (index) => {
      if(inputValue[index].length !== 0 ){
        const newDoneInputs = [...doneInputs];
        newDoneInputs[index] = !newDoneInputs[index];
        setDoneInputs(newDoneInputs);
      }
    };


    return(
      <>
        <ProgressBar inputValue={inputValue} doneInputs={doneInputs}/>

        {inputValue.map((item, index) => (
          <div key={index} className="input-wrapper">
            <div className="input-container">
              <span className="input-number">{index + 1}</span>
              <input
                type="text"
                value={item}
                onChange={(e) => handleChange(e , index)}
                onKeyDown={handlekeyDown}
                ref={(el) => (inputRefs.current[index] = el)}
                className={doneInputs[index] ? "done" : ""}
              />
              <RemoveButton index={index} handleRemove={handleRemove} />
              <CheckmarkButton index={index} handleCheckmark={handleCheckmark} />
              <NoteButton/>
            </div>
          </div>
        ))}
        </>
    )
};

export default UserInput;
