import { useState } from "react"

const useInputState = (defaultValue= '')=>{
    const [value,setValue]= useState(defaultValue);
    // const handleChange = x =>{
    //     setValue(x.target.value)
    // }
   
    // return [value,handleChange]
    const onChange = x =>{
        setValue(x.target.value)
    }
    return{
        value,onChange
    }
}
export default useInputState