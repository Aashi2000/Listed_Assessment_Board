import React from 'react'
import AppleIcon from '../assets/IconsSVG/AppleIcon'
import GoogleIcon from '../assets/IconsSVG/GoogleIcon'

const SignInWithButton = ({ comp }) => {
    return (
        <div className='flex bg-white rounded-lg px-3 py-1 my-3 items-center'>
            <div className='mr-2'>
                {comp === 'Google' ? (
                    <GoogleIcon className="my-4" />
                    // <image src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className='w-10 h-10'/>
                ) : (
                    <AppleIcon className="my-4" />
                )}
            </div>
            <p> Sign in with {comp} </p>
        </div>
    )
}

export default SignInWithButton
