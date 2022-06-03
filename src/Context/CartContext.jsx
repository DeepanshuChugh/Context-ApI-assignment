    import { createContext, useState } from "react";

    export const CartContext = createContext(0);

    export const CartProvider=({children})=>{

        const [count,setCount] = useState(0);
        return <CartContext.Provider value={{count,setCount}}>{children}</CartContext.Provider>
    }
