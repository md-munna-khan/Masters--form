import { useEffect, useRef, useState } from "react";


const RefForm = () => {
const refName = useRef(null)
const refEmail = useRef(null)
const refPassWord = useRef(null)
useEffect(()=>{
refName.current.focus();
},[])
const [error,setError]=useState("")
const handleFormSubmit= x=>{
    x.preventDefault();
    console.log(refName.current.value)
    console.log(refEmail.current.value)
    if(refPassWord.current.value.length <6){
        setError("password must be 6 character")
    } else{
        setError("")
        console.log(refPassWord.current.value)
    }
   
}
    return (
        <div>
            <div className="my-10 ">
            <form className="" onSubmit={handleFormSubmit}>
                <input ref={refName} className="bg-slate-200" type="text" name="name" />
                <br />
               <input ref={refEmail}  defaultValue={"munna@gamil.com"} className="bg-slate-200 my-2" type="email" name="email" required />
               <br />
               <input ref={refPassWord} className="bg-slate-200 my-2" type="password" name="password" required />
               <br />
                <input type="submit" value="submit"  />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
        </div>
    );
};

export default RefForm;