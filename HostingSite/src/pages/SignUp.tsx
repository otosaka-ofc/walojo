import { BsFillRocketTakeoffFill } from "react-icons/bs";
import {
    FaFacebook,
    FaGithub,
    FaGitlab,
    FaGoogle,
    FaLock,
    FaPlus,
    FaUserPlus,
} from "react-icons/fa6";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";

import { FieldValues, useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoAlertFill } from "react-icons/go";

export function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, isAutenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAutenticated) navigate("/servers");
    }, [isAutenticated, navigate]);

    const onSubmit = handleSubmit(async (values: FieldValues) => {
        signup(values);
    });
    return (
        <div className="w-full bg-base-200 flex items-center justify-center h-screen mt-10">
            <div className="card bg-base-100 text-primary-content w-96 shadow-2xl">
                <div className="card-body items-center">
                    <RiAccountPinCircleFill className="text-emerald-500 w-1/3 h-1/3" />
                    <h2 className="card-title font-bold text-3xl text-emerald-500">
                        Sign Up
                    </h2>
                    <div className="text-center mt-5">
                        <span className="btn btn-circle rounded-full ring ring-emerald-400 me-3">
                            <FaGoogle className="text-emerald-400 w-6 h-6" />
                        </span>
                        <span className="btn btn-circle rounded-full ring ring-emerald-400 me-3">
                            <FaFacebook className="text-emerald-400 w-6 h-6" />
                        </span>
                        <span className="btn btn-circle rounded-full ring ring-emerald-400 me-3">
                            <FaGithub className="text-emerald-400 w-6 h-6" />
                        </span>
                        <span className="btn btn-circle rounded-full ring ring-emerald-400">
                            <FaGitlab className="text-emerald-400 w-6 h-6" />
                        </span>
                    </div>
                    <div className="divider">OR</div>
                    {RegisterErrors.map((error: string, i: number) => {
                        return <p className="bg-red-400 text-white font-bold p-2 text-xs rounded-box" key={i}>{error}</p>;
                    })}
                    <form action="#" onSubmit={onSubmit}>
                        <label
                            htmlFor="#"
                            className="flex items-center input input-bordered border-emerald-400 border-2 mb-3"
                        >
                            <MdAlternateEmail className="w-6 h-6 text-emerald-400 me-2" />
                            <input
                                type="text"
                                className="grow"
                                placeholder="User Name"
                                {...register("username", { required: true })}
                            />
                            {errors.username && (
                                <GoAlertFill className="text-red-500 w-6 h-6" />
                            )}
                        </label>
                        <label
                            htmlFor="#"
                            className="flex items-center input input-bordered border-emerald-400 border-2 mb-3"
                        >
                            <FaPlus className="w-6 h-6 text-emerald-400 me-2" />
                            <input
                                type="text"
                                className="grow"
                                placeholder="First Name"
                                {...register("firstname", { required: true })}
                            />
                            {errors.firstname && (
                                <GoAlertFill className="text-red-500 w-6 h-6" />
                            )}
                        </label>

                        <label
                            htmlFor="#"
                            className="flex items-center input input-bordered border-emerald-400 border-2 mb-3"
                        >
                            <FaUserPlus className="w-6 h-6 text-emerald-400 me-2" />
                            <input
                                type="text"
                                className="grow"
                                placeholder="Last Name"
                                {...register("lastname", { required: true })}
                            />
                            {errors.lastname && (
                                <GoAlertFill className="text-red-500 w-6 h-6" />
                            )}
                        </label>
                        <label
                            htmlFor="#"
                            className="flex items-center input input-bordered border-emerald-400 border-2 mb-3"
                        >
                            <MdEmail className="w-6 h-6 text-emerald-400 me-2" />
                            <input
                                type="email"
                                className="grow"
                                placeholder="Email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <GoAlertFill className="text-red-500 w-6 h-6" />
                            )}
                        </label>
                        <label
                            htmlFor="#"
                            className="flex items-center input input-bordered border-emerald-400 border-2 mb-3"
                        >
                            <FaLock className="w-6 h-6 text-emerald-400 me-2" />
                            <input
                                type="password"
                                className="grow"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <GoAlertFill className="text-red-500 w-6 h-6" />
                            )}
                        </label>

                        <div className="card-actions justify-center">
                            <button
                                type="submit"
                                className="btn btn-ghost rounded-full bg-emerald-500 text-white font-bold text-xl"
                            >
                                <BsFillRocketTakeoffFill className="w-6 h-6" />
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
