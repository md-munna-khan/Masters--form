import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Gramdpa/Grandpa";


const Aunty = ({name}) => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty
            <section className="flex">
                <Cousin name={'mukti'}></Cousin>
                <Cousin name={'muktar'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=> setMoney (money + 1000)}> ADD more tk</button>
            </h2>
        </div>
    );
};

export default Aunty;