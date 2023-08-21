import React from 'react'
import { useForm } from "react-hook-form";
import Login from './Login';
function Custom_Login() {
    const { register, handleSubmit,  formState: { errors } } = useForm()
    const onSubmit = async (data) => {
       console.log(data)
      
    }

  return (
    <div>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name",{required: true,maxLength: 20})} placeholder='Username' />
                    {errors.username?.type === "required" && "this field is required"}

                    <input type="password" {...register("email",{required:true})} placeholder='password' />
                    {errors.password?.type === "required" && "this field  is required"}

                    <button className='btn'> Login</button>
                    
                </form>

            </div>
       
  )
}

export default Custom_Login