const Header = () => {
    return (
        <div>
            <div
                className="hero h-[650px] p-20 bg-no-repeat  mt-10 space-y-5 rounded-3xl text-white"
                style={{
                    backgroundImage:
                        "url(https://i.postimg.cc/WbSxX9wN/Rectangle-1.png)",
                }}
            >
                <div className="hero "></div>
                <div className="hero-content text-center ">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi <br /> exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className="flex justify-center gap-2">
                        <button className="btn rounded-full text-lg font-bold">Get Started</button>
                        <button className="btn rounded-full text-lg font-bold">Get Started</button>
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;
