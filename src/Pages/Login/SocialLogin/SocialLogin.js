import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn border w-full max-w-sm flex items-center hover:border-0 bg-white text-black hover:bg-slate-300 font-bold"
      >
        <FcGoogle className="text-xl mr-2" /> Continue With Google
      </button>
    </div>
  );
};

export default SocialLogin;
