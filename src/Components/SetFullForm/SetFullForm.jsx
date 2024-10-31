import { useState } from "react";


const SetFullForm = () => {
const [email,setEmail] = useState(null)
const [password,setPassword]= useState(null)
const [name,setName] = useState('munna')
const [error,setError]= useState('')

// submit button

  const formSubmit= y =>{
y.preventDefault();
if(password.length <8){
setError('password must be 8 character')
} else{
    setError('')
    console.log(name,email,password)
}

}



// change event handler
  const emailChange = e=>{
setEmail(e.target.value)
    }
    const passwordChange= x=>{
setPassword(x.target.value)
    }
    const nameChange = y =>{
        setName(y.target.value)
    }
    return (
        <div>
              <div className="my-10 ">
            <form className="" onSubmit={formSubmit}>
                <input value={name}
                onChange={ nameChange} 
                className="bg-slate-200" type="text" name="name" />
                <br />
               <input onChange={emailChange} className="bg-slate-200 my-2" type="email" name="email"  />
               <br />
               <input
               onChange={passwordChange}
               className="bg-slate-200 my-2" type="password" name="password" required />
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

export default SetFullForm;