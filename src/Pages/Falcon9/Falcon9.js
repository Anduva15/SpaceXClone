import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Counter from "../Counter";

const Falcon9 = () => {
  
    return   ( 
        <>
        <Header/>

        <section className=" relative h-screen bg-[url('./falcon-9.png')]  bg-center bg-no-repeat bg-cover animate-fadeIn">
  
    </section>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white uppercase text-center font-familjen">
        <h3 className="text-[100px] animate-fadeInUp1">Falcon 9</h3>
        <p className="text-[20px] animate-fadeInUp2 animate-animateFill">First orbital class rocket capable of reflight</p>
    </div>
    <div className="bg-black">
        <div className="max-w-[960px] my-0 mx-auto flex flex-row justify-between align-middle text-center uppercase text-white">
            <Counter target="207" title="counterLaunches">
                Total Launches
            </Counter>
            <Counter target="165" title="counterLandings">
                Total Landings
            </Counter>
            <Counter target="142" title="counterReflights">
                Total Reflights
            </Counter>
            
        </div>
    </div>

        <Footer/>   
        </>
 )
};

export default Falcon9;