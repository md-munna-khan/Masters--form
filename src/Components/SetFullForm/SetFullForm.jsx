// import { useState } from "react";

import { useState } from "react";


// const SetFullForm = () => {
// const [email,setEmail] = useState(null)
// const [password,setPassword]= useState(null)
// const [name,setName] = useState('munna')
// const [error,setError]= useState('')

// // submit button

//   const formSubmit= y =>{
// y.preventDefault();
// if(password.length <8){
// setError('password must be 8 character')
// } else{
//     setError('')
//     console.log(name,email,password)
// }

// }



// // change event handler
//   const emailChange = e=>{
// setEmail(e.target.value)
//     }
//     const passwordChange= x=>{
// setPassword(x.target.value)
//     }
//     const nameChange = y =>{
//         setName(y.target.value)
//     }
//     return (
//         <div>
//               <div className="my-10 ">
//             <form className="" onSubmit={formSubmit}>
//                 <input value={name}
//                 onChange={ nameChange} 
//                 className="bg-slate-200" type="text" name="name" />
//                 <br />
//                <input onChange={emailChange} className="bg-slate-200 my-2" type="email" name="email"  />
//                <br />
//                <input
//                onChange={passwordChange}
//                className="bg-slate-200 my-2" type="password" name="password" required />
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

// export default SetFullForm;

// 2 practice = controller element:use individual field state for each input field

const SetFullForm = () => {
const [email,setEmail]= useState("")
const [name,setName]= useState("munna")
const [Password,setPassword]= useState("")

const [error ,setError] = useState("")

const handleSubmit = e=>{
    e.preventDefault();
    if(Password.length<6){
        setError("password must be 6 character")
    } else{
        setError("")
        console.log(email,name,Password)
    }
   
}
const emailChange = e =>{
    e.preventDefault();
    setEmail(e.target.value)

}
const nameChange = e =>{
    e.preventDefault();
    setName(e.target.value)

}
const passwordChange = e =>{
    e.preventDefault();
    setPassword(e.target.value)

}

    return (
        <div>
           <div className="my-10  ">
            
            <form onSubmit={handleSubmit}  >
         
                
<input onChange={nameChange} className="bg-gray-200 my-2" type="name" value={name} name="name" id="" placeholder="name"  />
<br />
<input onChange={emailChange } className="bg-gray-200 my-2" type="email"  name="email" id="" placeholder="email"/>
<br />
<input onChange={ passwordChange} className="bg-gray-200 my-2" type="password" name="password" id=""  placeholder="password" required/>
<br />
<input className="bg-red-600" type="submit" value="submit"  />

{
    error && <p> password must be 6 character or longer</p>
}
            </form>
        </div>
        </div>
    );
};

export default SetFullForm;