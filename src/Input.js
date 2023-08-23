import React from "react";

function Input ({ label, value}) {
    console.log({ label, value})

    
    return(
        <label className="settings__input-label">{label}
   
            <input type="text"  className="settings__input" readOnly="readOnly" defaultValue={value || ""}/>
        </label>
        // <>
        //      <p></p>
        //      <p>{value}</p>
        //      </>
    )
}
export default Input