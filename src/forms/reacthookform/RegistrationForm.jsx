import React from 'react'
import { useForm } from 'react-hook-form'

const RegistrationForm = () => {
    const { register,handleSubmit,
        formState : {errors}
     } = useForm();

     function onSubmit(data){
        console.log(data);
        alert("Registration Successful");
     }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Name' 
            {...register("name",{required:"Name is Required"})}
            />

            <p>{errors.name?.message}</p>


            <input placeholder='Email' 
            {...register("email",{
                required:"Email is required",
                pattern:{
                    value:/^\S+@\S+\.\S+$/,
                    message:"Invalid Email"
                }
            })}
            />
            <p>{errors.email?.message}</p>

            <input type="password" placeholder='password'{
                ...register("password",{
                    required:"Password Required",
                    minLength :{
                        value:8,
                        message:"Minimum 8 Characters"
                    }
                })
            } />

            <p>{errors.password?.message}</p>

            <button type='submit'>
                Register
            </button>

        </form>
    </div>
  )
}

export default RegistrationForm