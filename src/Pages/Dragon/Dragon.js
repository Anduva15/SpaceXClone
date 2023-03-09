import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Counter from "../Counter";

const Dragon = () => {
    return   ( 
        <>
        <Header/>

        <section className=" relative h-screen bg-[url('./dragon.png')]  bg-center bg-no-repeat bg-cover animate-fadeIn">
  
        </section>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white uppercase text-center font-familjen">
            <h3 className="text-[100px] animate-fadeInUp1">Dragon</h3>
            <p className="text-[20px] animate-fadeInUp2 animate-animateFill">Sending humans and cargo into space</p>
        </div>
        <div className="bg-black">
            <div className="max-w-[960px] my-0 mx-auto flex flex-row justify-between align-middle text-center uppercase text-white">
                <Counter target="3" title="counterLaunches">
                    Total Launches
                </Counter>
                <Counter target="7" title="counterLandings">
                    Total Landings
                </Counter>
                <Counter target="4" title="counterReflights">
                    Total Reflights
                </Counter>
                
            </div>
        </div>

        <Footer/>   
        </>
 )
};

export default Dragon;