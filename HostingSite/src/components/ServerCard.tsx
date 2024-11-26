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
import { Server } from "../context/ServersContext";
import { GrArchlinux } from "react-icons/gr";
import {
    MdDriveFileRenameOutline,
    MdLabel,
    MdOutlineCancel,
} from "react-icons/md";
import { FaSave, FaTrashAlt } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";

function Ubuntu() {
    return (
        <div className="w-9 h-9 rounded-full bg-red-500 text-white font-bold p-1 shadow-md">
            <FaUbuntu className="w-7 h-7 absolute" />
        </div>
    );
}
function Debian() {
    return (
        <div className="w-9 h-9 rounded-full bg-white text-pink-500 font-bold p-1 shadow-md">
            <FaDebian className="w-7 h-7" />
        </div>
    );
}
function OpenSuse() {
    return (
        <div className="w-9 h-9 rounded-full bg-white text-green-500 font-bold p-1 shadow-md">
            <FaOpensuse className="w-7 h-7" />
        </div>
    );
}

function Windows() {
    return (
        <div className="w-9 h-9 rounded-full bg-sky-400 text-white font-bold p-1 shadow-md">
            <FaWindows className="w-7 h-7" />
        </div>
    );
}
function Fedora() {
    return (
        <div className="w-9 h-9 rounded-full bg-sky-400 text-white font-bold p-1 shadow-md">
            <FaFedora className="w-7 h-7" />
        </div>
    );
}
function CentOS() {
    return (
        <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold p-1 shadow-md">
            <FaCentos className="w-7 h-7" />
        </div>
    );
}
function ArchLinux() {
    return (
        <div className="w-9 h-9 rounded-full bg-white text-cyan-400 font-bold p-1 shadow-md">
            <GrArchlinux className="w-7 h-7" />
        </div>
    );
}

function ServerCard({ server }: { server: Server }) {
    console.log(server);
    return (
        <div className="bg-white rounded-box max-w-md w-full p-10">
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
                <p className="text-slate-500">{server.description}</p>
                <h2>{server.cpu}</h2>
                <h2>{server.ram}</h2>
                <h2>{server.os}</h2>
                <h2>{server.active}</h2>
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
                    <form action="" method="dialog" className="mt-5">
                        <label
                            htmlFor=""
                            className="input input-bordered flex text-center gap-2 mb-5"
                        >
                            <MdDriveFileRenameOutline className="w-10 h-10 text-emerald-500" />
                            <input
                                type="text"
                                name=""
                                id=""
                                className="grow"
                                placeholder="Server name..."
                            />
                        </label>
                        <label
                            htmlFor=""
                            className="input input-bordered flex text-center gap-2 h-auto"
                        >
                            <MdLabel className="w-10 h-10 text-emerald-500" />
                            <textarea
                                name=""
                                id=""
                                className="grow textarea min-h-10"
                                placeholder="Server description..."
                            />
                        </label>
                        <div className="text-center mt-5 flex justify-between">
                            <button className="btn me-3 btn-success text-white font-bold">
                                <FaSave className="w-5 h-5" />
                                Save
                            </button>
                            <button className="btn">
                                <MdOutlineCancel className="w-5 h-5" />
                                Cancel
                            </button>
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
                    <form action="" method="dialog" className="flex justify-between">
                        <button className="btn bg-red-500 text-white font-bold">
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
