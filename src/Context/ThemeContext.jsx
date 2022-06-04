import { createContext, useState } from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({children})=>{
    const toggleTheme = ()=>{
        if(theme==="light")
        {
            setTheme("dark")
        }
        else{
            setTheme("light")

        }
    }
    const [theme,setTheme] = useState('light');
    return <ThemeContext.Provider value={{
        theme,
        isLight:theme==='light',
        toggleTheme
    }}>{children}</ThemeContext.Provider> 
}