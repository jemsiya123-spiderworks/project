import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Login() {
  const { register, handleSubmit,  formState: { errors } } = useForm()
    const onSubmit = async (data) => {
      try {
        const formData = { ...data };
        console.log(formData);
        const response = await axios.post('/login', formData);
        console.log(response.data);
        alert('Form submitted successfully!');
      } 
      catch (error) {
        console.error(error);
        alert('Form submission failed. Please try again later.');
      } 
        }
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Login</h2>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name",{required: true,maxLength: 20})} placeholder='Username' />
                    {errors.username?.type === "required" && "this field is required"}

                    <input type="password" {...register("email",{required:true})} placeholder='password' />
                    {errors.password?.type === "required" && "this field  is required"}

                    <button className='btn'> Login</button>
                    
                </form>

            </div>
        </div>
    </section>
  );
}