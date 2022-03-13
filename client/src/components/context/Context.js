import { createContext } from "react";

const Cart = createContext();

const Context = ({children}) => {
    return <Cart.Provider>

    </Cart.Provider>;
};

export default Context;