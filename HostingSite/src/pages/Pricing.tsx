import React from "react";
import { BiSolidTimer } from "react-icons/bi";
import { FiCpu } from "react-icons/fi";
import { IoServer, IoSpeedometer } from "react-icons/io5";

export default function Pricing() {
    return (
        <div className="flex justify-center w-auto h-auto mt-40 gap-3">
            <div className="card bg-base-100 w-96 shadow-xl h-auto">
                <div className="card-body">
                    <h2 className="font-bold text-gray-500">
                        <span className="text-5xl text-center">FREE</span>
                        <h2 className="m-3"></h2>
                        <span className="font-bold text-5xl justify-start">
                            0.0$
                        </span>
                        <span className="text-gray-500">/month</span>
                    </h2>
                    <p>Free mode, only one server for user</p>
                    <div className="divider"></div>
                    <h2 className="flex m-1">
                        <FiCpu className="w-6 h-6 text-blue-500" />
                        <span className="ms-1 font-bold text-blue-500 me-1">
                            CPU Threads:
                        </span>
                        <span className="ms-auto font-bold me-10">
                            2 Threads
                        </span>
                    </h2>
                    <h2 className="flex m-1">
                        <IoSpeedometer className="w-6 h-6 text-teal-500" />
                        <span className="ms-1 font-bold text-teal-500 me-1">
                            RAM:
                        </span>
                        <span className="ms-auto font-bold me-10">2 GB</span>
                    </h2>
                    <h2 className="flex m-1">
                        <BiSolidTimer className="w-6 h-6 text-orange-500" />
                        <span className="ms-1 font-bold text-orange-500 me-1">
                            Time:
                        </span>
                        <span className="ms-auto font-bold me-10">
                            5 hours / day
                        </span>
                    </h2>
                    <h2 className="flex m-1">
                        <IoServer className="w-6 h-6 text-red-500" />
                        <span className="ms-1 font-bold text-red-500 me-1">
                            Databases:
                        </span>
                        <span className="ms-auto font-bold me-10 text-red-500">
                            none
                        </span>
                    </h2>
                    <div className="card-actions justify-center">
                        <button className="btn bg-gray-500 text-white font-bold">
                            Get Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl h-auto">
                <div className="card-body">
                    <h2 className="font-bold text-yellow-500">
                        <span className="text-5xl text-center">BASIC</span>
                        <h2 className="m-3"></h2>
                        <span className="font-bold text-5xl justify-start">
                            5.0$
                        </span>
                        <span className="text-gray-500">/month</span>
                    </h2>
                    <p>Basic mode, recommended for beginners and small entrepreneurs.</p>
                    <div className="divider"></div>
                    <h2 className="flex m-1">
                        <FiCpu className="w-6 h-6 text-blue-500" />
                        <span className="ms-1 font-bold text-blue-500 me-1">
                            CPU Threads:
                        </span>
                        <span className="ms-auto font-bold me-10">
                            3 Threads
                        </span>
                    </h2>
                    <h2 className="flex m-1">
                        <IoSpeedometer className="w-6 h-6 text-teal-500" />
                        <span className="ms-1 font-bold text-teal-500 me-1">
                            RAM:
                        </span>
                        <span className="ms-auto font-bold me-10">3-6 GB</span>
                    </h2>
                    <h2 className="flex m-1">
                        <BiSolidTimer className="w-6 h-6 text-orange-500" />
                        <span className="ms-1 font-bold text-orange-500 me-1">
                            Time:
                        </span>
                        <span className="ms-auto font-bold me-10">
                            UNLIMITED
                        </span>
                    </h2>
                    <h2 className="flex m-1">
                        <IoServer className="w-6 h-6 text-red-500" />
                        <span className="ms-1 font-bold text-red-500 me-1">
                            Databases:
                        </span>
                        <span className="ms-auto font-bold me-10 text-red-500">
                            only 1
                        </span>
                    </h2>
                    <div className="card-actions justify-center">
                        <button className="btn bg-yellow-500 text-white font-bold">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl h-auto">
                <div className="card-body bg-gradient-to-r from-indigo-200 to-emerald-200 rounded-box">
                    <h2 className="font-bold text-purple-500">
                        <span className="text-5xl text-center">PRO</span>
                        <h2 className="m-3"></h2>
                        <span className="font-bold text-5xl justify-start">
                            5.0$
                        </span>
                        <span className="text-gray-500">/month</span>
                    </h2>
                    <p>Basic mode, recommended for beginners and small entrepreneurs.</p>
                    <div className="divider"></div>
                    <h2 className="flex m-1">
                        <FiCpu className="w-6 h-6 text-blue-500" />
                        <span className="ms-1 font-bold text-blue-500 me-1">
                            CPU Threads:
                        </span>
                        <span className="ms-auto font-bold me-10">
                            3 Threads
                        </span>
                    </h2>
                    <h2 className="flex m-1">
                        <IoSpeedometer className="w-6 h-6 text-teal-500" />
                        <span className="ms-1 font-bold text-teal-500 me-1">
                            RAM:
                        </span>
                        <span className="ms-auto font-bold me-10">3-6 GB</span>
                    </h2>
                    <h2 className="flex m-1">
                        <BiSolidTimer className="w-6 h-6 text-orange-500" />
                        <span className="ms-1 font-bold text-orange-500 me-1">
                            Time:
                        </span>
                        <span className="ms-auto font-bold me-10">
                            UNLIMITED
                        </span>
                    </h2>
                    <h2 className="flex m-1">
                        <IoServer className="w-6 h-6 text-red-500" />
                        <span className="ms-1 font-bold text-red-500 me-1">
                            Databases:
                        </span>
                        <span className="ms-auto font-bold me-10 text-red-500">
                            only 1
                        </span>
                    </h2>
                    <div className="card-actions justify-center">
                        <button className="btn bg-purple-500 text-white font-bold">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
