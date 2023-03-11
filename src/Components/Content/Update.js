
const Update = () => {
    return (
        <section className=" relative h-screen bg-[url('./section-e.png')] bg-center bg-no-repeat bg-cover">
        <div className="absolute bottom-[100px] sm:bottom-[200px] left-[50px] sm:left-[150px] text-white max-w-[560px]">
            <h2 className="animate-fadeInUp2 animate-animateFill text-3xl font-bold mb-5">Starship Update</h2>
            <a href='/' className="animate-fadeInUp3 animate-animateFill relative inline-block cursor-pointer text-center min-w-[130px] py-4 px-12 mt-3 border-2 border-white  overflow-hidden z-1 after:content-['Rewatch'] after:z-0 after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-white after:scale-y-0 after:transition-transform hover:after:origin-bottom  hover:after:scale-y-100 hover:after:text-black hover:after:py-4 hover:after:px-12 hover:after:font-bold  ">
              
                <span className="font-bold z-10 hover:text-black">Rewatch</span>
            </a>
        </div>
        <div className="absolute animate-bounce bottom-4 left-1/2 transform -translate-x-1/2">
        <svg width="30px" height="20px">
      <path
        stroke="#ffffff"
        fill="none"
        stroke-width="2px"
        d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
      ></path>
        </svg>
        </div>
    </section>
    )
}

export default Update;