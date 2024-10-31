import { useContext } from "react";
import { AssetsContext } from "../Gramdpa/Grandpa";


const Friends = () => {
   const gift =useContext(AssetsContext)
    return (
        <div>
            <h2>Friends</h2>
            <p>received: {gift}</p>
        </div>
    );
};

export default Friends;