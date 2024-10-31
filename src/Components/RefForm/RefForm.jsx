// import { useEffect, useRef, useState } from "react";

import { useEffect, useRef } from "react";


// const RefForm = () => {
// const refName = useRef(null)
// const refEmail = useRef(null)
// const refPassWord = useRef(null)
// useEffect(()=>{
// refName.current.focus();
// },[])
// const [error,setError]=useState("")
// const handleFormSubmit= x=>{
//     x.preventDefault();
//     console.log(refName.current.value)
//     console.log(refEmail.current.value)
//     if(refPassWord.current.value.length <6){
//         setError("password must be 6 character")
//     } else{
//         setError("")
//         console.log(refPassWord.current.value)
//     }
   
// }
//     return (
//         <div>
//             <div className="my-10 ">
//             <form className="" onSubmit={handleFormSubmit}>
//                 <input ref={refName} className="bg-slate-200" type="text" name="name" />
//                 <br />
//                <input ref={refEmail}  defaultValue={"munna@gamil.com"} className="bg-slate-200 my-2" type="email" name="email" required />
//                <br />
//                <input ref={refPassWord} className="bg-slate-200 my-2" type="password" name="password" required />
//                <br />
//                 <input type="submit" value="submit"  />
//                 {
//                     error && <p>{error}</p>
//                 }
//             </form>
//         </div>
//         </div>
//     );
// };

// export default RefForm;


//practice 3 uncontrolled element: useE=Ref to create a reference to the element and access value by using like : nameRef.current.value



const RefForm = () => {
const nameRef = useRef(null)
const emailRef = useRef(null)
const passwordRef = useRef(null)

useEffect(()=>{
    nameRef.current.focus()
},[])

    const handleSubmit = e=>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
          <div className="my-10  ">
            
            <form  onSubmit={ handleSubmit}>
         
                
<input ref={nameRef} className="bg-gray-200 my-2" type="name" name="name" id="" placeholder="name" required  />
<br />
<input ref={emailRef} className="bg-gray-200 my-2" type="email" name="email" id="" defaultValue={'munna@gamil.com'} placeholder="email"/>
<br />
<input ref={passwordRef} className="bg-gray-200 my-2" type="password" name="password" id=""  placeholder="password"/>
<br />
<input className="bg-red-600" type="submit" value="submit" />


            </form>
        </div>
        </div>
    );
};

export default RefForm;