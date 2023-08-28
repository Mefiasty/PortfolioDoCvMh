import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="lg:mb-10 mb-4">
                <h1 className="text-8xl mb-2">Portfolio</h1>
                <center>
                    <img src="zdjecie.png" alt="zdjecie.png" srcset="" className="border-2 rounded-full border-zinc-600" />
                </center>
            </div>

            <div className="menu justify-center ">
                <div className=" lg:h-10  lg:mb-12 mb-6 bg-zinc-400  ">
                    <nav className=" lg:grid lg:grid-cols-3 grid grid-rows-3  ">

                        <Link to="/projekty" className="hover:bg-zinc-900 lg:hover:h-10">Projekty</Link>
                        <Link to="/CV" className="hover:bg-zinc-900 lg:hover:h-10">CV</Link>
                        <Link to="/" className="hover:bg-zinc-900 lg:hover:h-10">O mnie</Link>
                    </nav>
                </div>
                <div className="contents">
                    <Outlet />
                </div>

            </div>
        </>
    )
};

export default Layout;