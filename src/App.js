
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import RecentLaunch from "./Components/Content/RecentLaunch";
import RecentMission from "./Components/Content/RecentMission";
import RecentLaunchMission from "./Components/Content/RecentLaunchMission";
import Update from "./Components/Content/Update";
import StarshipLand from "./Components/Content/StarshipLand";
import Footer from "./Components/Footer/Footer";


function App() {
  

  return (
   
    <>
    <Header/>
   
    <div className="bg-[url('./homebg.png')] bg-center bg-no-repeat bg-cover relative uppercase h-screen">
    <Home/>
    </div>
    <RecentLaunch/>
    <RecentMission/>
    <RecentLaunch/>
    <RecentLaunchMission/>
    <Update/>
    <StarshipLand/>
    <Footer/>
    </>
   
  );
}

export default App;
