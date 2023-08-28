const NoPage = () => {
    return (
        <>
            <h1 className="text-9xl">404</h1>
            <h2 className="text-4xl mb-2">Nie ma takiej strony</h2>
            <button className="bg-zinc-900 rounded-full w-56 text-white hover:bg-zinc-700"><a href="/">Wróć na stronę główną</a></button>
        </>
    )
};

export default NoPage;