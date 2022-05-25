import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  let signInError;

  if (loading) {
    return <Loading />;
  }

  if (error || updateError) {
    signInError = (
      <p className="text-red-600">
        <small>{error?.message || updateError?.message}</small>
      </p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast("Sign Up Successfully!!");
    navigate("/");
  };

  return (
    <div className="w-full bg-[#f2f0e8]">
      <div className="container min-h-screen mx-auto px-10 flex flex-col justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body py-5">
            <h2 className="text-center text-3xl font-extrabold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-gray-600">
                    Name
                  </span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-gray-600">
                    Email
                  </span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-gray-600">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "one Uppercase,one Lowercase and one Number",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}

              <input
                type="submit"
                value="SignUp"
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg text-white font-bold py-3 rounded-lg cursor-pointer"
              />
            </form>
            <div className="my-2">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl py-3 mt-3">
          <p className="text-center font-bold text-gray-700">
            <Link to="/signin">
              Already a Member?<span className="text-blue-600"> Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
