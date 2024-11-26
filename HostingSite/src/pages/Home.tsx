import {
    FaCentos,
    FaDebian,
    FaFedora,
    FaOpensuse,
    FaUbuntu,
    FaWindows,
} from "react-icons/fa6";
import ubuntuScreenSHot from "../assets/ubuntu-neofetch.png";
import { GrArchlinux } from "react-icons/gr";

function Home() {
    return (
        <div className="h-full w-full bg-base-200 pt-20">
            <div className="w-full h-full text-center justify-items-center mt-3 lg:mt-10">
                <div className="card bg-base-100 w-64 lg:w-1/2 shadow-xl text-center">
                    <div className="card-body">
                        <div className="indicator">
                            <h2 className="card-title text-4xl">New offer</h2>
                            <span className="indicator-item badge badge-accent text-white font-bold">
                                new
                            </span>
                        </div>
                        <p>
                            Servers with a capacity greater than 4GB of RAM
                            receive a 30% discount for the first month!
                        </p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-accent text-white uppercase font-bold">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <h1 className="font-bold lg:text-7xl m-10 lg:m-5 text-4xl">
                    Dream here...
                </h1>
                <h1 className="font-bold lg:text-7xl m-10 lg:m-5 text-4xl">
                    Deploy here...
                </h1>
                <ul className="steps mt-5 steps-vertical lg:steps-horizontal">
                    <li className="step step-secondary font-bold me-10">
                        Register
                    </li>
                    <li className="step step-secondary font-bold me-10">
                        Choose plan
                    </li>
                    <li className="step step-secondary font-bold me-10">
                        Choose SO
                    </li>
                    <li className="step step-accent font-bold me-10">Deploy</li>
                    <li className="step step-accent font-bold me-10">Manage</li>
                </ul>
                <div className="mt-10 bg-base-100 rounded-2xl me-2 ms-2 shadow-xl lg:rounded-full">
                    <div
                        className="tooltip tooltip-bottom"
                        data-tip="Ubuntu Server"
                    >
                        <span className="btn btn-circle bg-red-500 text-white font-bold m-5">
                            <FaUbuntu className="w-7 h-7" />
                        </span>
                    </div>
                    <div
                        className="tooltip tooltip-bottom"
                        data-tip="Debian Server"
                    >
                        <span className="btn btn-circle bg-white text-pink-500 font-bold m-5">
                            <FaDebian className="w-7 h-7" />
                        </span>
                    </div>
                    <div
                        className="tooltip tooltip-bottom"
                        data-tip="OpenSuse Server"
                    >
                        <span className="btn btn-circle bg-white text-green-500 font-bold m-5">
                            <FaOpensuse className="w-7 h-7" />
                        </span>
                    </div>
                    <div
                        className="tooltip tooltip-bottom"
                        data-tip="Windows Server"
                    >
                        <span className="btn btn-circle bg-sky-400 text-white font-bold m-5">
                            <FaWindows className="w-7 h-7" />
                        </span>
                    </div>
                    <div
                        className="tooltip tooltip-bottom"
                        data-tip="Fedora Server"
                    >
                        <span className="btn btn-circle bg-sky-400 text-white font-bold m-5">
                            <FaFedora className="w-7 h-7" />
                        </span>
                    </div>
                    <div
                        className="tooltip tooltip-bottom"
                        data-tip="CentOS Server"
                    >
                        <span className="btn btn-circle bg-blue-600 text-white font-bold m-5">
                            <FaCentos className="w-7 h-7" />
                        </span>
                    </div>
                    <div
                        className="tooltip tooltip-bottom"
                        data-tip="ArchLinux Server"
                    >
                        <span className="btn btn-circle bg-white text-cyan-400 font-bold m-5">
                            <GrArchlinux className="w-7 h-7" />
                        </span>
                    </div>
                </div>
                <img
                    src={ubuntuScreenSHot}
                    alt="ubuntu-screenshot"
                    className="mt-10 rounded-3xl lg:w-1/2 lg:h-auto w-4/5 shadow-xl"
                />
            </div>
        </div>
    );
}

export default Home;
