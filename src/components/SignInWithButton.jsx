import React, { useState } from 'react'
import AppleIcon from '../assets/IconsSVG/AppleIcon'
import GoogleIcon from '../assets/IconsSVG/GoogleIcon'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { Link } from 'react-router-dom'

const SignInWithButton = ({ comp }) => {
    const [googleSignInSuccess, setGoogleSignInSuccess] = useState(false)
    const auth = getAuth();

    const handleSignInWithGoogle = async () => {
        const provider = new GoogleAuthProvider()

        try{ 
            const result = await signInWithPopup(auth, provider)
            console.log("Signin with google successfully...!",result)
            setGoogleSignInSuccess(true)
        } catch (error) {
            console.error(error)
        }
    }
    
    function handleSignInWithApple() {
        return null;
    }


    return (
        <Link to={googleSignInSuccess? '/dashboard' : '/'}>
            <div className='flex bg-white rounded-lg px-3 py-1 my-3 items-center' onClick={comp === 'Google' ? handleSignInWithGoogle : handleSignInWithApple}>
                <div className='mr-2'>
                    {comp === 'Google' ? (
                        <GoogleIcon className="my-4" />
                    ) : (
                        <AppleIcon className="my-4" />
                    )}
                </div>
                <p> Sign in with {comp} </p>
            </div>
        </Link>

    )
}

export default SignInWithButton
