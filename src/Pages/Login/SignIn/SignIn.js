import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  let errorMessage;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if ((error, gError)) {
    errorMessage = (
      <p className="text-red-600 pb-2">
        <small>{error?.message}</small>
      </p>
    );
  }
  if (loading || gLoading) {
    return <Loading />;
  }

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    toast("Sign in Successfully!!");
  };

  const resetPassword = () => {
    const email = getValues("email");
    sendPasswordResetEmail(email);
    toast("Password Reset,Check Email & Set Your Password");
  };

  return (
    <div className="w-full bg-[#f2f0e8]">
      <div className="container min-h-screen mx-auto px-20  flex flex-col justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body py-5">
            <h2 className="text-center text-3xl font-extrabold">Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                      value: /[A-Za-z]{2}/,
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
              {errorMessage}
              <input
                type="submit"
                value="SignIn"
                className="w-full bg-blue-600 hover:bg-blue-700 text-lg text-white font-bold py-3 rounded-lg cursor-pointer"
              />
            </form>
            <div className="my-2">
              <button
                onClick={() => signInWithGoogle()}
                className="btn border border-gray-400 hover:border-gray-400 w-full max-w-sm flex rounded-full items-center bg-white text-gray-700 hover:bg-green-50 font-bold"
              >
                <FcGoogle className="text-xl mr-2" /> Continue With Google
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl py-3 mt-3">
          <p className="text-center font-bold text-gray-700">
            <Link onClick={resetPassword} to="/signin">
              Forget Your Password?
            </Link>
          </p>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl py-3 mt-3">
          <p className="text-center font-bold text-gray-700">
            <Link to="/signup">Create new account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
