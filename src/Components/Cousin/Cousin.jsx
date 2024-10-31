import { useContext } from "react";
import Special from "../Special/Special";
import { AssetsContext } from "../Gramdpa/Grandpa";
import Friends from "../Friends/Friends";


const Cousin = ({name,assets}) => {
   
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
           {assets && <Special assets={assets}></Special>}
            {name === "muktar" && <Friends></Friends>}
        </div>
    );
};

export default Cousin;