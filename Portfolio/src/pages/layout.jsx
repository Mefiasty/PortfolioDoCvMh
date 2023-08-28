import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="mb-10">
                <h1 className="text-8xl">Portfolio</h1>
                <center>
                    <img src="zdjecie.png" alt="zdjecie.png" srcset="" className="border-2 rounded-full border-zinc-600" />
                </center>
            </div>

            <div className="menu">
                <div className=" lg:h-10  lg:mb-12 mb-6 bg-zinc-400">
                    <nav className=" lg:grid lg:grid-cols-3 grid grid-cols-3  ">

                        <Link to="/projekty" className="hover:bg-zinc-900 hover:h-10">Projekty</Link>
                        <Link to="/CV" className="hover:bg-zinc-900 hover:h-10">CV</Link>
                        <Link to="/" className="hover:bg-zinc-900 hover:h-10">O mnie</Link>
                    </nav>
                </div>
                <div>
                    <Outlet />
                </div>

            </div>
        </>
    )
};

export default Layout;