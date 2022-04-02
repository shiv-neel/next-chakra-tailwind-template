import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
	User,
} from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import Router from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from './firebase'

export interface AuthType {
	user: User | null | undefined
	googleSignIn: () => Promise<boolean>
	logout: () => Promise<boolean>
}

export const AuthContext = createContext<AuthType>({} as AuthType)

export const useAuth = () => {
	return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User | null>()

	const googleProvider = new GoogleAuthProvider()
	const googleSignIn = async () => {
		return await signInWithPopup(auth, googleProvider)
			.then((userCredential) => {
				const user = userCredential.user
				setUser(user)
			})
			.then(() => Router.push('/'))
	}

	const logout = async () => {
		return await signOut(auth).then(() => Router.push('/'))
	}

	useEffect(() => {
		// onAuthStateChanged listener checks auth's current user, and sets it to user
		// unsubscribe from onAuthStateChanged listener once the component is mounted
		const updateLastLogin = async () => {
			if (user)
				setDoc(
					doc(db, 'users', user!.uid),
					{
						displayName: user?.displayName,
						lastLogin: Date.now(),
					},
					{ merge: true }
				)
		}
		const unsubscribe = onAuthStateChanged(auth, (user) => setUser(user))
		updateLastLogin()
		return unsubscribe
	}, [])

	const value = {
		user,
		googleSignIn,
		logout,
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
