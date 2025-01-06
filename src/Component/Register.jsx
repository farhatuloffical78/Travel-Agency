

import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../Provider/AuthProvider';
import { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import { FaEye, FaEyeSlash } from 'react-icons/fa';




const Register = () => {
    const { createnewUser, setUser, updateUserProfile,googleSingin, auth } = useContext(Authcontext); 
    const [error, setError] = useState({});
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const handleGooglesign = () => {
        googleSingin()
        .then(res => {
        console.log(res);
                  navigate('/');
              })
             
      };
   



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const pass = form.password.value;

    //   console.log(name,email,pass,photo);
        if (name.length < 5) {
            setError({ ...error, name: "Name must be at least 5 characters" });
            toast.error("Name must be at least 5 characters");
            return;
        }

        if (!email || !photo || !pass) {
            setError({ ...error, general: "All fields are required" });
            toast.error("All fields are required");
            return;
        }

   
        const hasUppercase = /[A-Z]/.test(pass);
        const hasLowercase = /[a-z]/.test(pass);
        const hasValidLength = pass.length >= 6;

        if (!hasUppercase || !hasLowercase || !hasValidLength) {
            setError({
                ...error,
                password: "Password must have at least 6 characters, an uppercase letter, and a lowercase letter",
            });
            toast.error("Invalid password format");
            return;
        }
 
        toast.success("Registration successful!");
   
        form.reset();
       


 
        createnewUser(email, pass)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        toast.success("User successfully registered!");
                        navigate('/');
                    })
                    .catch((error) => {
                        // console.error("Error updating profile:", error);
                        toast.error("Error updating profile");
                    });
            })
            .catch((error) => {
                // console.error("Error creating user:", error);
                toast.error("Error creating user: " + error.message);
            });
    };

    return (
        <div className='bg-white'>
        
             

            <div className='min-h-screen justify-center items-center flex '>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                    <h2 className='text-2xl text-black mb-5  font-semibold text-center'>Register your account</h2>
                    <form className="card-body shadow-xl border " onSubmit={handleSubmit}>
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                            {error.name && (
                                <label className="label text-xs text-red-500">
                                    {error.name}
                                </label>
                            )}
                        </div>

                        {/* Photo Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mt-4 relative">
    <label htmlFor="password" className="block text-black text-sm font-medium ">
        Password
    </label>
    <input
        type={showPass ? "text" : "password"}
        id="password"
        name="password"
        placeholder="Enter your password"
        className="mt-2 block w-full px-4 py-2 border rounded-md text-black focus:ring-2 focus:ring-[#2d524b] focus:outline-none"
    />
    <button
        type="button"
        className="absolute bg-transparent border-none right-4 top-10"
        onClick={() => setShowPass(!showPass)}
    >
        {showPass ? <FaEyeSlash className='text-black'></FaEyeSlash> : <FaEye className='text-black'></FaEye>}
    </button>
</div>


  {/* Google Login Button */}
  <div className="mt-6">
                            <button
                                onClick={handleGooglesign}
                                className="w-full flex items-center justify-center px-4 py-2 bg-transparent border text-black font-medium rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                >
                                    <path
                                        fill="#FFD700"
                                        d="M43.6 20.2H42V20H24v8.5h11.3c-1.6 4.2-5.7 7.3-10.6 7.3-6.4 0-11.7-5.2-11.7-11.7 0-6.4 5.2-11.7 11.7-11.7 2.8 0 5.4 1 7.4 2.7l6.4-6.4C32.9 6.6 28.6 5 24 5 12.8 5 4 13.8 4 25s8.8 20 20 20c10 0 18.4-7.3 19.8-16.7.1-.6.2-1.3.2-2 0-1-.1-2-.4-3.1z"
                                    />
                                    <path
                                        fill="#FF4500"
                                        d="M6.9 14.1l6.6 4.8C15.5 15 19.4 13 24 13c2.8 0 5.4 1 7.4 2.7l6.4-6.4C32.9 6.6 28.6 5 24 5c-7.2 0-13.4 3.8-17.1 9.1z"
                                    />
                                    <path
                                        fill="#32CD32"
                                        d="M24 45c4.3 0 8.3-1.6 11.3-4.2l-5.4-5.4c-1.6 1.1-3.6 1.7-5.9 1.7-4.8 0-8.9-3.1-10.6-7.3l-6.6 5c3.6 6 10 10.2 17.2 10.2z"
                                    />
                                    <path
                                        fill="#1E90FF"
                                        d="M43.6 20.2H42V20H24v8.5h11.3c-1.1 2.8-3 5.1-5.4 6.7-.1.1-.2.1-.3.2l5.4 5.4c-.1 0 .1-.1.3-.2 3.3-2.3 5.9-5.7 7.2-9.7.6-1.7 1-3.6 1-5.6 0-1-.1-2-.4-3.1z"
                                    />
                                </svg>
                                Continue with Google
                            </button>
                        </div>
                        {/* Submit Button */}
                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white" type="submit">
                                Register
                            </button>
                        </div>
                    </form>

                    {/* Redirect to Login */}
                    <p className='text-center font-semibold text-black mt-5'>
                        Already Have An Account?{' '}
                        <Link className='text-red-500' to='/login'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>

            <ToastContainer autoClose={4000} />
        </div>
    );
};

export default Register;
