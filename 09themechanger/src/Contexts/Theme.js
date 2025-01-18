import { createContext , useContext } from "react";


// whenever this ThemeContext is called it will provide these Objects

export const ThemeContext = createContext({
    themeMode: "light", // set the default value of the app
    darkTheme: () => {},
    LightTheme: () => {},

})

export const ThemeProvider = ThemeContext.Provider // will wrap this 


// custom hook
// whenever useTheme is called it will provide ThemeContext(i.e  themeMode , darkTheme , LightTheme etc)
export default function useTheme() {
    return useContext(ThemeContext)
}


