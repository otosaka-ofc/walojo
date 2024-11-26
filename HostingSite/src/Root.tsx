import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import world from "./assets/world.png";

export function Root() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main >
                <Outlet />
            </main>
            <footer>
                <footer className="footer bg-base-200 text-base-content p-10">
                    <aside>
                        <img src={world} alt="icon" className="w-10 h-10" />
                        <p>
                            Walojo Services Ltd.
                            <br />
                            Providing awesome hosting since 1992
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover" href="/pricings">Servers</a>
                        <a className="link link-hover" href="/pricings">Design</a>
                        <a className="link link-hover" href="/pricings">Web Hosting</a>
                    </nav>
                </footer>
            </footer>
        </>
    );
}
