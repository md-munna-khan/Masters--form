// import useInputState from "../../Hook/useInputState";


// const HookForm = () => {
//     // const [name,handleNameChange] = useInputState('munna')
//     const emailState = useInputState('munna@gamail.com')
//     const formSubmit = e =>{
//         console.log('form data',emailState.value)
//         // console.log('form data',name)
//         e.preventDefault();
//     }
//     return (
//         <div>
//               <div className="my-10 ">
//             <form className="" onSubmit={formSubmit}>
//                 {/* <input value={name} onChange={handleNameChange} className="bg-slate-200" type="text" name="name" /> */}
//                 <br />
//                <input {...emailState} className="bg-slate-200 my-2" type="email" name="email"  />
//                <br />
//                <input className="bg-slate-200 my-2" type="password" name="password"  />
//                <br />
//                 <input type="submit" value="submit"  />
//             </form>
//         </div>
//         </div>
//     );
// };

// export default HookForm;
//practice 4 = customs hook one object holding all the input fields value

import useInputState from "../../Hook/useInputState";

const HookForm = () => {
  const [name , setChange]= useInputState('')

    const handleSubmit = e =>{
        console.log('form data' ,name)
        e.preventDefault()
    }
    return (
        <div>
                 <div className="my-10  ">
            
            <form  onSubmit={ handleSubmit}>
         
                
<input value={name} onChange={setChange}  className="bg-gray-200 my-2" type="name" name="name" id="" placeholder="name"  />
<br />
<input   className="bg-gray-200 my-2" type="email" name="email" id="" placeholder="email"/>
<br />
<input className="bg-gray-200 my-2" type="password" name="password" id=""  placeholder="password"/>
<br />
<input className="bg-red-600" type="submit" value="submit" />


            </form>
        </div>
        </div>
    );
};

export default HookForm;