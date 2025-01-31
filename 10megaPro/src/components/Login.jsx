import React , {useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { login  as authLogin } from '../Store/auth.slice'
import {Button , Input } from './index'
import { useDispatch } from 'react-redux'
import authService from "../Appwrite/auth"
import {useForm} from "react-hook-form"
import Logo from './Logo'
import Input from './input'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register , handleSubmit} = useForm()
    const [error , SetError] = useState("")
     
   const login = async(data) => {
    SetError("")
    try {
        const session = await authService.login(data)
        if (session) {
            const UserData = await authService.getCurrentUser()
            if (UserData) dispatch(authLogin(UserData));
            navigate("/")
        }
    } catch (error) {
        SetError(error.message)
    }
   }


  return (
    <div className='flex items-center justify-center w-full'>
        <div className= 'mb-2 flex justify-center'>
            <span className='inline-block w-full max-w[100px]'>
                <Logo width='100%'/>
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
               <Input
               label= "Email:"
               placeholder = "Enter your email"
               type = "email"
               {...register("email" , {required: true, 
                validate: (value) => {
                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm . test(value) || "email address must be vaild"
                } 
               })}
               />
               <Input
               label = "Password:"
               type = "password"
               placeholder = "enter your password"
               {...register("password" , {required: true,})}
               />
               <Button type = "submit" className="w-full">
                Sign In 
               </Button>
            </div>

        </form>
    </div>
  )
}

export default Login