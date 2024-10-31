


const SimpleForm = () => {
    const formSubmit = x=>{
        x.preventDefault();
        console.log(x.target.name.value);
        console.log(x.target.email.value);
        console.log(x.target.password.value);
        console.log("form added")
    }
    return (
        <div className="my-10 ">
            <form className="" onSubmit={formSubmit}>
                <input className="bg-slate-200" type="text" name="name" />
                <br />
               <input className="bg-slate-200 my-2" type="email" name="email"  />
               <br />
               <input className="bg-slate-200 my-2" type="password" name="password"  />
               <br />
                <input type="submit" value="submit"  />
            </form>
        </div>
    );
};

export default SimpleForm;