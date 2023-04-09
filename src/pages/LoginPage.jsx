import React from 'react'
import SignInButton from '../components/SignInButton'
import SignInWithButton from '../components/SignInWithButton'
import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='min-h-screen bg-black md:w-[40%] flex items-center'>
                <p className='flex-auto text-center text-[72px] font-[700] text-white'>Board</p>
            </div>

            <div className='flex flex-auto items-center justify-center px-8 bg-[#F5F5F5]'>
                <div className='w-full max-w-md'>
                    <p className='text-[32px] font-[700]'>Sign in</p>
                    <p className='text-[14px] font-[400]'>Sign in to your account</p>

                    <div className='flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3'>
                        <SignInWithButton comp='Google' />
                        <SignInWithButton comp='Apple' />
                    </div>

                    <div className='bg-white rounded-lg p-[30px] mt-4'>
                        <p className='ml-[2px] my-[5px] text-[14px]'>Email address</p>
                        <input
                            className='bg-gray-100 text-[14px] rounded-lg py-[5px] px-[15px]'
                            placeholder='johndoe@gmail.com'
                        />
                        <p className='ml-[2px] my-[5px] text-[14px]'>Password</p>
                        <input
                            className='flex flex-auto text-[14px] bg-gray-100 rounded-lg py-[5px] px-[15px]'
                            placeholder='••••••••'
                            type='password'
                        />
                        <div className='ml-[2px] my-[10px]'>
                            <a className='text-[12px] text-[#346BD4]' href=''>
                                Forgot password?
                            </a>
                        </div>
                        <Link to={'/dashboard'}>
                            <SignInButton />
                        </Link>
                    </div>

                    <p className='text-[#858585] my-3 text-center'>
                        Don't have an account?{' '}
                        <a className='text-[#346BD4]' href=''>
                            Register here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
