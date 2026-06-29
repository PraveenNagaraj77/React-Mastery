import React from 'react'
import { useForm } from 'react-hook-form'

const LoginFormPage = () => {
    const { register,handleSubmit,formState:{errors} } = useForm();

    function onSubmit(data){
        console.log(data);
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Enter Name'
            {...register("name",{required:"Name is Required"})}
            />

            {
                errors.name && (<p>{errors.name.message}</p>)
            }


            <button type='submit'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default LoginFormPage