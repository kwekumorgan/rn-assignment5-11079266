import React, {createContext,useState,useEffect} from 'react';
import {Appearance} from 'react-native';

const ThemeContext = createContext();

export const  useTheme=() => useContext (ThemeContext);


export const ThemeProvider =({children}) => {
  const colorScheme= Appearance.getColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme==='dark');

  useEffect (() => {
		const listener=(preferences) =>{
			const newColorScheme = preferences.colorScheme;
			setIsDarKMode(newColorScheme=== 'dark');
		};
		Appearance.addChangeListener(listener);
		return () =>{
			Appearance.removeChangeListener(listener);
		};
	}, []
);
	const toggleTheme = () => {
		setIsDarkMode ((previous) => !prevMode);
	};

	return (
		<ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};