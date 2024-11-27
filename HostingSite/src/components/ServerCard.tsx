import {
    FaCentos,
    FaDebian,
    FaFedora,
    FaOpensuse,
    FaPen,
    FaTrash,
    FaUbuntu,
    FaWindows,
} from "react-icons/fa6";
import { Server, useServers } from "../context/ServersContext";
import { GrArchlinux } from "react-icons/gr";
import {
    MdDriveFileRenameOutline,
    MdLabel,
    MdOutlineCancel,
} from "react-icons/md";
import { FaSave, FaTrashAlt } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { FiCpu } from "react-icons/fi";
import { IoSpeedometer } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function Ubuntu() {
    return (
        <div className="flex text-center">
            <div className="w-9 h-9 rounded-full bg-red-500 text-white font-bold p-1 shadow-md">
                <FaUbuntu className="w-7 h-7 absolute" />
            </div>
            <h3 className="m-1 font-bold text-gray-500">Ubuntu</h3>
        </div>
    );
}
function Debian() {
    return (
        <div className="flex text-center">
            <div className="w-9 h-9 rounded-full bg-white text-pink-500 font-bold p-1 shadow-md">
                <FaDebian className="w-7 h-7 absolute" />
            </div>
            <h3 className="m-1 font-bold text-gray-500">Debian</h3>
        </div>
    );
}
function OpenSuse() {
    return (
        <div className="flex text-center">
            <div className="w-9 h-9 rounded-full bg-white text-green-500 font-bold p-1 shadow-md">
                <FaOpensuse className="w-7 h-7" />
            </div>
            <h3 className="m-1 font-bold text-gray-500">OpenSuse</h3>
        </div>
    );
}

function Windows() {
    return (
        <div className="flex text-center">
            <div className="w-9 h-9 rounded-full bg-sky-400 text-white font-bold p-1 shadow-md">
                <FaWindows className="w-7 h-7" />
            </div>
            <h3 className="m-1 font-bold text-gray-500">Windows</h3>
        </div>
    );
}
function Fedora() {
    return (
        <div className="flex text-center">
            <div className="w-9 h-9 rounded-full bg-sky-400 text-white font-bold p-1 shadow-md">
                <FaFedora className="w-7 h-7" />
            </div>
            <h3 className="m-1 font-bold text-gray-500">Fedora</h3>
        </div>
    );
}
function CentOS() {
    return (
        <div className="flex text-center">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold p-1 shadow-md">
                <FaCentos className="w-7 h-7" />
            </div>
            <h3 className="m-1 font-bold text-gray-500">Cent OS</h3>
        </div>
    );
}
function ArchLinux() {
    return (
        <div className="flex text-center">
            <div className="w-9 h-9 rounded-full bg-white text-cyan-400 font-bold p-1 shadow-md">
                <GrArchlinux className="w-7 h-7" />
            </div>
            <h3 className="m-1 font-bold text-gray-500">Arch Linux</h3>
        </div>
    );
}

function ServerCard({ server }: { server: Server }) {
    const { register, handleSubmit, setValue } = useForm();
    const { deleteServer, updateServer } = useServers();
    /*     const navigate = useNavigate(); */

    const onHandleSubmit = handleSubmit(async (data) => {
        data._id = server._id;
        updateServer(data as Server);
    });

    useEffect(() => {
        setValue("name", server.name);
        setValue("description", server.description);
    });
    return (
        <div className="bg-white rounded-box max-w-md w-full p-10">
            {server.active ? (
                <>
                    <span className="absolute">
                        <span className="relative ms-64 font-bold text-sky-500">
                            Running
                        </span>
                    </span>
                </>
            ) : (
                <>
                    <span className="absolute">
                        <span className="relative ms-64 font-bold text-red-500">
                            Stoped
                        </span>
                    </span>
                </>
            )}
            <span className="relative flex h-5 w-5 ms-auto">
                {server.active ? (
                    <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
                    </>
                ) : (
                    <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
                    </>
                )}
            </span>
            <div>
                {server.os == 1 ? (
                    <Ubuntu />
                ) : server.os == 2 ? (
                    <Debian />
                ) : server.os == 3 ? (
                    <OpenSuse />
                ) : server.os == 4 ? (
                    <Windows />
                ) : server.os == 5 ? (
                    <Fedora />
                ) : server.os == 6 ? (
                    <CentOS />
                ) : (
                    <ArchLinux />
                )}
                <header className="flex justify-between">
                    <h1 className="text-2xl font-bold">{server.name}</h1>
                    <div className="flex gap-x-1">
                        <button
                            className="btn bg-red-500 hover:bg-red-400 text-white font-bold m-1"
                            onClick={() => {
                                (
                                    document.getElementById(
                                        server._id + "delete"
                                    ) as HTMLDialogElement
                                )?.showModal();
                            }}
                        >
                            <FaTrash className="w-h-4 h-4" />
                            drop
                        </button>
                        <button
                            className="btn btn-success text-white font-bold m-1"
                            onClick={() => {
                                (
                                    document.getElementById(
                                        server._id
                                    ) as HTMLDialogElement
                                )?.showModal();
                            }}
                        >
                            <FaPen className="w-h-4 h-4" />
                            edit
                        </button>
                    </div>
                </header>
                <p className="text-slate-500 mt-3 m-2">{server.description}</p>
                <h2 className="flex m-1">
                    <FiCpu className="w-6 h-6 text-blue-500" />
                    <span className="ms-1 font-bold text-blue-500 me-1">
                        CPU Threads:
                    </span>
                    {server.cpu}
                </h2>
                <h2 className="flex m-1">
                    <IoSpeedometer className="w-6 h-6 text-teal-500" />
                    <span className="ms-1 font-bold text-teal-500 me-1">
                        RAM
                    </span>
                    {server.ram}
                </h2>
            </div>

            <dialog id={server._id} className="modal h-auto">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg">
                        <FaPen className="w-8 h-8" />
                        Edit the Server Details
                    </h3>
                    <form
                        action=""
                        className="mt-5"
                        onSubmit={onHandleSubmit}
                    >
                        <label
                            htmlFor=""
                            className="input input-bordered flex text-center gap-2 mb-5"
                        >
                            <MdDriveFileRenameOutline className="w-10 h-10 text-emerald-500" />
                            <input
                                type="text"
                                id=""
                                className="grow"
                                placeholder="Server name..."
                                {...register("name")}
                            />
                        </label>
                        <label
                            htmlFor=""
                            className="input input-bordered flex text-center gap-2 h-auto"
                        >
                            <MdLabel className="w-10 h-10 text-emerald-500" />
                            <textarea
                                className="grow textarea min-h-10"
                                placeholder="Server description..."
                                {...register("description")}
                            />
                        </label>
                        <div className="text-center mt-5 flex justify-between">
                            <button
                                className="btn me-3 btn-success text-white font-bold"
                                type="submit"
                                onClick={() => {
                                    (document.getElementById(server._id) as HTMLDialogElement)?.close();
                                }}
                            >
                                <FaSave className="w-5 h-5" />
                                Save
                            </button>

                            <form action="" method="dialog">
                                <button className="btn">
                                    <MdOutlineCancel className="w-5 h-5" />
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </form>
                </div>
            </dialog>
            <dialog id={server._id + "delete"} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg text-red-500">
                        <GoAlertFill className="w-7 h-7" />
                        You are sure!?
                    </h3>
                    <p className="py-4">
                        The server will be permanently dropped
                    </p>
                    <form
                        action=""
                        method="dialog"
                        className="flex justify-between"
                    >
                        <button
                            className="btn bg-red-500 text-white font-bold"
                            onClick={() => {
                                deleteServer(server._id);
                            }}
                        >
                            <FaTrashAlt className="w-5 h-5" />
                            Drop
                        </button>
                        <button className="btn">Cancel</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default ServerCard;
