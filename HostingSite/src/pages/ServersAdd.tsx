import React from "react";
import { FaLinux, FaMemory, FaPlus, FaServer } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiSolidRename } from "react-icons/bi";
import { FiCpu } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { Server, useServers } from "../context/ServersContext";
import { useNavigate } from "react-router-dom";

export function ServersAdd(): React.ReactElement {
    //const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const { createServer } = useServers();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        createServer(data as Server);
        navigate("/servers");
    });
    return (
        <div className="w-full bg-base-200 flex items-center justify-center h-screen">
            <div className="card bg-base-100 text-primary-content w-3/6 shadow-2xl mt-16">
                <div className="card-body items-center">
                    <FaServer className="w-1/4 h-1/4 text-emerald-500" />
                    <h2 className="card-title font-bold text-3xl text-emerald-500">
                        Add new Server
                    </h2>
                    <form action="" className="w-2/3" onSubmit={onSubmit}>
                        <label
                            htmlFor=""
                            className="flex items-center input border-emerald-400 border-2 mb-3 rounded-box"
                        >
                            <MdDriveFileRenameOutline className="w-7 h-7 text-emerald-400 me-2" />
                            <input
                                type="text"
                                className="grow"
                                placeholder="Server Name"
                                {...register("name")}
                            />
                        </label>
                        <div className="p-2 flex items-center border-emerald-400 border-2 mb-3 rounded-box h-auto">
                            <BiSolidRename className="w-7 h-7 text-emerald-400 me-2" />
                            <textarea
                                className="textarea rounded-box w-full input-ghost border-none"
                                placeholder="Server Description"
                                {...register("description")}
                            ></textarea>
                        </div>
                        <label
                            htmlFor=""
                            className="p-2 flex items-center border-emerald-400 border-2 mb-3 rounded-box"
                        >
                            <FaLinux className="w-7 h-7 text-emerald-500" />
                            <span className="me-2 text-emerald-500 font-bold">
                                Select OS
                            </span>
                            <select
                                className="select select- w-auto max-w-xs"
                                {...register("oss")}
                            >
                                <option disabled selected id="ubuntu">
                                    Chose one
                                </option>
                                <option>Ubuntu Server</option>
                                <option>Devian Server</option>
                                <option>OpenSuse Server</option>
                                <option>Windows Server</option>
                                <option>Fedora Server</option>
                                <option>CentOs Server</option>
                                <option>ArchLinux Server</option>
                            </select>
                        </label>
                        <div className="p-2 flex items-center border-emerald-400 border-2 mb-3 rounded-box">
                            <FaMemory className="w-7 h-7 text-emerald-400 me-2" />{" "}
                            <span className="m-2 font-bold">RAM</span>
                            <div className="w-full justify-between p-2">
                                <input
                                    type="range"
                                    min={1}
                                    max={5}
                                    className="range range-success"
                                    step={1}
                                    {...register("ram")}
                                />
                                <div className="flex w-full justify-between px-2 text-xs">
                                    <span className="font-bold ">1 GB</span>
                                    <span className="font-bold ">2 GB</span>
                                    <span className="font-bold ">3 GB</span>
                                    <span className="font-bold ">4 GB</span>
                                    <span className="font-bold ">5 GB</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-2 flex items-center border-emerald-400 border-2 mb-3 rounded-box">
                            <FiCpu className="w-7 h-7 text-emerald-400 me-2" />{" "}
                            <span className="m-2 font-bold">CPU Threads</span>
                            <div className="w-full justify-between p-2">
                                <input
                                    type="range"
                                    min={1}
                                    max={4}
                                    className="range range-success bg-gradient-to-r from-red-300 to-emerald-300"
                                    step={1}
                                    {...register("cpu")}
                                />
                                <div className="flex w-full justify-between px-2 text-xs">
                                    <span className="font-bold text-lg text-red-500">
                                        1{" "}
                                    </span>
                                    <span className="font-bold text-lg text-orange-500">
                                        2{" "}
                                    </span>
                                    <span className="font-bold text-lg text-yellow-500">
                                        3{" "}
                                    </span>
                                    <span className="font-bold text-lg text-emerald-600">
                                        4{" "}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full text-center">
                            <button className="btn bg-white border-4 border-emerald-500 text-emerald-500 font-bold">
                                <FaPlus className="w-7 h-7 text-emerald-500" />
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
