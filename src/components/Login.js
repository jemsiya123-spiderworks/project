import { useForm } from "react-hook-form";
import axios from 'axios';
import Custom_Login from "./Custom_Login";

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
                <Custom_Login />
            </div>
        </div>
    </section>
  );
}