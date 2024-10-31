

const ReUsableform = ({formTitle,formSubmit, submitBtnText ='Submit',children}) => {

const handleLocalSubmit = e=>{
    e.preventDefault()
    const data = {
        name:e.target.name.value,
        email:e.target.email.value,
        password: e.target.password.value
    }
formSubmit(data)
}

    return (
        <div>
            <div className="my-10 ">
                {children}
            <form className="" onSubmit={handleLocalSubmit}>
                <input className="bg-slate-200" type="text" name="name" />
                <br />
               <input className="bg-slate-200 my-2" type="email" name="email"  />
               <br />
               <input className="bg-slate-200 my-2" type="password" name="password"  />
               <br />
                <input type="submit" value={submitBtnText}  />
            </form>
        </div>
        </div>
    );
};

export default ReUsableform;