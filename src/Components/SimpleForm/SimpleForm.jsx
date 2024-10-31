


// const SimpleForm = () => {
//     const formSubmit = x=>{
//         x.preventDefault();
//         console.log(x.target.name.value);
//         console.log(x.target.email.value);
//         console.log(x.target.password.value);
//         console.log("form added")
//     }
//     return (
//         <div className="my-10 ">
//             <form className="" onSubmit={formSubmit}>
//                 <input className="bg-slate-200" type="text" name="name" />
//                 <br />
//                <input className="bg-slate-200 my-2" type="email" name="email"  />
//                <br />
//                <input className="bg-slate-200 my-2" type="password" name="password"  />
//                <br />
//                 <input type="submit" value="submit"  />
//             </form>
//         </div>
//     );
// };

// export default SimpleForm;

// 1 practice use form tag and on submit handler with event (p)  and name to get value from access e.target.[name of the input field]/.value
const SimpleForm = () => {
   
  const handleSubmit = p =>{
    p.preventDefault ();
    console.log(p.target.name.value)
    console.log(p.target.email.value)
    console.log(p.target.password.value)
   
  }
    
    return (
        <div className="my-10  ">
            
            <form  onSubmit={ handleSubmit}>
         
                
<input className="bg-gray-200 my-2" type="name" name="name" id="" placeholder="name"  />
<br />
<input className="bg-gray-200 my-2" type="email" name="email" id="" placeholder="email"/>
<br />
<input className="bg-gray-200 my-2" type="password" name="password" id=""  placeholder="password"/>
<br />
<input className="bg-red-600" type="submit" value="submit" />


            </form>
        </div>
    );
};

export default SimpleForm;