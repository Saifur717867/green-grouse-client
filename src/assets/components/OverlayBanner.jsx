

const OverlayBanner = () => {
    
    return (
        <div>
            <div className="relative h-[300px] bg-[url(https://i.ibb.co/wy0d137/card-12.jpg)] bg-cover bg-no-repeat bg-center top-0 w-full">
                <div className="bg-black absolute top-0 left-0 w-full h-[300px] bg-opacity-75">
                    <div className="flex flex-col justify-center items-center h-[300px] text-center">
                        <h1 className="text-white text-5xl font-bold">Post And Bid All Action Here</h1>
                        <p className="text-white text-sm pt-4">Forget the old rules. You can have the best people.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlayBanner;