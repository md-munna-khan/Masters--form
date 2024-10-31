import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'
export const MoneyContext =createContext(1000);
 export const AssetsContext = createContext("gold");
const Grandpa = () => {
    const [money,setMoney]= useState(1000)
    const assets = 'diamond';
    return (
        <div className="grandpa  justify-center">
           <h3 className=" text-center">Grandpa</h3>
       <MoneyContext.Provider value={[money,setMoney]}>
       <AssetsContext.Provider value="gold">
         <section className=" flex justify-center ">
<Dad assets={assets}></Dad>
<Uncle assets={assets}></Uncle>
<Aunty></Aunty>
            </section>
         </AssetsContext.Provider>
       </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;
/**
 * 1.create a context and export
 * 2.add provider for the context with a value could be anyThing
 * 3.useContext to access value in the context API
 */