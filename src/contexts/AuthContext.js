import firebase from '../config/firebase';
import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(setCurrentUser);
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
