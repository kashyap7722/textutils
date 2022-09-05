import React,{useState} from 'react'

export default function TextForm(props) {
    // when user clicked on Convert To UpperCase button, this function will invoke..
    const handleUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase","success");
    }
    const handleLowerCase=()=>{
        let lowText=text.toLowerCase();
        setText(lowText);
        props.showAlert("Converted To LowerCase","success");
    }
        const handleClear=()=>{
        let clerText="";
        setText(clerText);
        props.showAlert("Text Cleared","success");
    }
   const handleCharPos=()=>{
    
    let cnt=prompt("enter number");
    alert(text.charAt(cnt));
    props.showAlert("Position Retrived","success");
   }

   const handleCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied","success");
   }

    // when user wants to add text this function will call, and it will add to existing text variable..
    // onChange event can be used to change existing values.. if you dont use this event you will not add text to existing text..
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    // setting default value in textarea using useState()
    // whatever you write in useState() as a string, shown as default value
    // here text is variable and setText is function. you can use multiple variable
    const[text,setText]=useState("");
    return (
        <>
              <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className="form-control"  onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" onClick={handleUpperCase} className="btn btn-primary mx-1 my-1">Convert To UpperCase</button>
            <button type="button" onClick={handleLowerCase} className="btn btn-primary mx-1 my-1">Convert To LowerCase</button><br></br>
            <button type="button" onClick={handleClear} className="btn btn-primary mx-1 my-1">Clear Text</button>
            <button type="button" onClick={handleCharPos} className="btn btn-primary mx-1 my-1">Character Position</button>
            <button type="button" onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
        </div>
        <div className='container my-2'>
            <h2>Your Text Summary</h2>
            <p>{text.length>0?text.trim().split(" ").length:0} words and {text.length} characters</p>
            <h2 className='text-primary'>Preview</h2>
            <p className='text-danger'>{text.length>0?text:"Please Enter Text To Show Preview"}</p>
        </div>
        </>
      
    )
}
