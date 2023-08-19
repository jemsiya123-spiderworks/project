import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

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