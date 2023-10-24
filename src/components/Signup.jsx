import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { Button, Input, Container, Logo } from "./index";
import { useForm} from "react-hook-form";
function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit,watch } = useForm();
  const dispatch = useDispatch();

  const create = async (data) => {
    setError("");

    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className='"mb-2 flex justify-center"'>
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              type="text"
              placeholder="Enter your Full Name"
              {...register("name", { required: true })}
            />
            <Input
              label="Email: "
              placeholder="Enter your Email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              type="password"
              label="Password: "
              placeholder="Enter your Password"
              {...register("password", { required: true })}
            />
       {/* {     TODO:write confirm password logic} */}
            {/* <Input
              type="password"
              label="Confirm Password: "
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              placeholder="Confirm your Password"
            /> */}
            <Button type='submit' className='w-full'>Sign up</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
