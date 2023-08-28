const Omnie = () => {
    return (
        <>
            <div>
                <h1 className="text-6xl m-6">O mnie</h1>
                <div className="grid lg:grid-cols-2 grid-rows-2 font-bold">
                    <div className="border-b-2 border-zinc-900 lg:border-b-0   ">
                        <p>Mam na imię <span className="text-red-700">Mateusz.</span></p>
                        <p>Jestem studentem poszukającym pracy w branży it</p>
                        <p>Interesuje się fornt-endem</p>
                        <p>W wolnym czasie gram w gry komputerowe lub koduje</p>
                        <p>W przyszłości chciałbym zostać programistą</p>

                    </div>
                    <div className="mt-4">
                        <p>Frameworki z którymi miałem styczność:</p>
                        <p><span className="text-red-800">React</span> (na codzień jest moim ulubionym)</p>
                        <p><span className="text-red-800">Angular</span> (w wolnej chiwli)</p>
                        <p><span className="text-red-800">Vue</span> (używany był jedynie przy <p>niektórych projektach z kolegą w sesji kolaboracyjnej)</p></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Omnie;