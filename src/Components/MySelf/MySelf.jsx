import { useContext } from "react";
import Special from "../Special/Special";
import { DollarContext } from "../Gramdpa/Grandpa";


const MySelf = ({assets}) => {
    const dollar = useContext(DollarContext)
    return (
        <div>
            <h2>my self</h2>
            <h2>i have received {dollar}</h2>
           <section className="flex">
           <Special assets={assets}></Special>
           </section>
        </div>
    );
};

export default MySelf;