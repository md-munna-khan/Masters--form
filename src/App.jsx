import Grandpa from "./Components/Gramdpa/Grandpa";
import HookForm from "./Components/HookForm/HookForm";
import RefForm from "./Components/RefForm/RefForm";
import ReUsableform from "./Components/ReUsableform/ReUsableform";
import SetFullForm from "./Components/SetFullForm/SetFullForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";


const App = () => {
  const handleSignUpSubmit = data =>{
 console.log('sign up data',data)
  }
  const handleUpdateProfile = data=>{
 console.log('update profile',data)
  }



  return (
    <div className=" text-center">
      <h1>Form master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <SetFullForm></SetFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}


{/* <ReUsableform 
formTitle={"sign up "}
handleSubmitbtn={handleSignUpSubmit}>

  </ReUsableform>

<ReUsableform 
formTitle={"profile update"}
submitBtn={"update"} 
handleSubmitbtn={handleUpdateProfile}></ReUsableform> */}















      {/* <ReUsableform 
      formTitle={'sign up'} 
      formSubmit={handleSignUpSubmit}>
<div>
  <h2>sign up</h2>
  <p>please sign up right now</p>
</div>
      </ReUsableform>


      <ReUsableform 
      formSubmit={handleUpdateProfile}
      formTitle={'profile update'}  
      submitBtnText="update">
        <div>
          <h2> update your profile</h2>
        </div>
      </ReUsableform> */}

      <Grandpa></Grandpa>
    </div>
  );
};

export default App;