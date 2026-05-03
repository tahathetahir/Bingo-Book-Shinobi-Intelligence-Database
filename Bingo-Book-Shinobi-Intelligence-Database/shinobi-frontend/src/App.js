import {useState,useEffect} from "react"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import sanin from "./sanin.jpeg"
import Fight from "./nvs.mp4"
import all_shinobis from "./all_shinobis.jpeg"
import village from "./village.jpeg"
import traitor from "./traitor.jpeg"
import hokage from "./hokage.jpeg"
import sasuke_leaving from "./sasuke_leaving.mp4"
import forbidden from "./forbidden.jpeg"
import legacy from "./legacy.jpeg"
import war from "./war.jpeg"
import chunin from "./chunin.jpeg"
import clan from "./clan.jpeg"
import counter from "./counter.jpeg"
import rich from "./rich.jpeg"
import power from "./power.jpeg"
import carry from "./carry.jpeg"
import rivalry from "./archRivals.jpeg"
import inventory from "./tenten.jpeg"
import mentor from "./mentor.jpeg"
import lastStand from "./lastStand.jpeg"
const Base_url = 'http://localhost:5000'


/* ================================================== BACK END CONNECTION ================================================== */

const fetchShinobis = async (setQdata) => {
    const result = await fetch(`${Base_url}/shinobi`);
    const data =  await result.json();
    setQdata(data);
}

const fetchVillages = async (setQdata) => {
    const result = await fetch(`${Base_url}/village`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const chakra_consumption = async (setQdata) => {
    const result = await fetch(`${Base_url}/chakra1`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const NeverFought = async (setQdata) => {
    const result = await fetch(`${Base_url}/nf`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const Population = async (setQdata) => {
    const result = await fetch(`${Base_url}/pp`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const Overpopulated = async (setQdata) => {
    const result = await fetch(`${Base_url}/op`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}


const FamousVillage = async (setQdata) => {
    const result = await fetch(`${Base_url}/opp`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const LoserNinjas = async (setQdata) => {
    const result = await fetch(`${Base_url}/ln`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const VillageStrength = async (setQdata) => {
    const result = await fetch(`${Base_url}/vs`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const NinjaCount = async (setQdata) => {
    const result = await fetch(`${Base_url}/nc`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const JutsuCreators = async (setQdata) => {
    const result = await fetch(`${Base_url}/jc`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const OverpoweredJutsu = async (setQdata) => {
    const result = await fetch(`${Base_url}/oj`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const ExemptedNinjas = async (setQdata) => {
    const result = await fetch(`${Base_url}/en`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const SpecialVillages = async (setQdata) => {
    const result = await fetch(`${Base_url}/sv`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const Missions = async (setQdata) => {
    const result = await fetch(`${Base_url}/ms`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const Squads = async (setQdata) => {
    const result = await fetch(`${Base_url}/sq`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}


const Rivals = async (setQdata) => {
    const result = await fetch(`${Base_url}/rv`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const Standoffs = async (setQdata) => {
    const result = await fetch(`${Base_url}/st`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}


/* =========================== META FUNCTIONALITIES ===========================*/


const SaninLegacy = async (setQdata,inputValue) => {
    const result = await fetch(`${Base_url}/sl`,
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"},
            body : JSON.stringify({
                threshold:inputValue
            })
        });

    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const TraitorPurge = async (setQdata,inputValue,inputValue1) => {
    const result = await fetch(`${Base_url}/tp`,
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"},
            body : JSON.stringify({
                id:inputValue,
                rogue:inputValue1
            })
        });

    const data = await result.json();
    console.log(data);
    setQdata(data);
}


const KageS = async (setQdata,inputValue,inputValue1) => {
    const result = await fetch(`${Base_url}/ks`,
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"},
            body : JSON.stringify({
                id:inputValue,
                village:inputValue1
            })
        });

    const data = await result.json();
    console.log(data);
    setQdata(data);
}


const JutsuF = async (setQdata,inputValue) => {
    const result = await fetch(`${Base_url}/jf`,
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"},
            body : JSON.stringify({
                element:inputValue
            })
        });

    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const bloodlinePurity = async (setQdata) => {
    const result = await fetch(`${Base_url}/bp`,
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"},
            body : JSON.stringify({
                element:0
            })
        });

    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const perfectCounter = async (setQdata,inputValue,inputValue1) => {
    const result = await fetch(`${Base_url}/pc`,
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"},
            body : JSON.stringify({
                id:inputValue,
                element:inputValue1
            })
        });

    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const squadFinance = async (setQdata) => {
    const result = await fetch(`${Base_url}/sf`,
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"},
            body : JSON.stringify({
                element:0
            })
        });

    const data = await result.json();
    console.log(data);
    setQdata(data);

}

const villageResourceWar = async (setQdata) => {
    const result = await fetch(`${Base_url}/vrws`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const chuninCorruption = async (setQdata) => {
    const result = await fetch(`${Base_url}/cecd`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const mentorPupilCreep = async (setQdata) => {
    const result = await fetch(`${Base_url}/mppa`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const lastStandProtocol = async (setQdata, village, threshold) => {
    const result = await fetch(`${Base_url}/lsdp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ villageName: village, population: threshold })
    });
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const globalPowerIndex = async (setQdata) => {
    const result = await fetch(`${Base_url}/gpir`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const squadCarryAudit = async (setQdata) => {
    const result = await fetch(`${Base_url}/cia`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const historicalRivalry = async (setQdata) => {
    const result = await fetch(`${Base_url}/hrr`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const blackMarketAudit = async (setQdata) => {
    const result = await fetch(`${Base_url}/ibma`);
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

const InsertNewShinobi = async (setQdata,id,nname,dob,nstatus,clan,chakra,jname,village,nrank,mentor) => {
    const result = await fetch(`${Base_url}/register`,{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            id : id,
            nname : nname,
            dob : dob,
            nstatus : nstatus,
            clan : clan,
            chakra : chakra,
            jname : jname,
            village : village,
            nrank : nrank,
            mentor : mentor
        })
    });
    const data = await result.json();
    console.log(data);
    setQdata(data);
}

/* ================================================== RENDERING STARTS FROM HERE ================================================== */

function LandingPage({setFeatures}){
    const [about,setAbout] = useState(false);
    return(
        <div className="font-extrabold bg-black min-h-screen text-white">
                <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 bg-gradient-to-r from-white-400/30 via-orange-300/20 to-yellow-300/30 shadow-black-600/20 transition-all duration-300">
                <div className='flex flex-col '>
                    <h3 className="text-xl md:text-8xl font-bold tracking-wide text-black drop-shadow-sm">
                        Bingo Book:
                    </h3>
                    <h3 className="text-xl md:text-8xl font-bold tracking-wide text-orange-600 drop-shadow-sm">
                        Shinobi
                    </h3>
                    <h3 className="text-xl md:text-8xl font-bold tracking-wide text-white drop-shadow-sm">
                        Intelligence
                    </h3>
                    <h3 className="text-xl md:text-8xl font-bold tracking-wide text-white drop-shadow-sm">
                        Database
                    </h3>     
                    
                    <br/>
                    <br/>
                    <button className="px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl"
                    onClick = {() => setFeatures(true)}>Features</button>
      
                    <button className ="absolute top-4 right-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl "
                    onClick = {async () => {setAbout(true)}}>
                About
            </button>

                </div>
                
            </div>


            <div className="relative h-screen w-full overflow-hidden">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
            <source src = {Fight}/>
            </video>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>
            </div>
        <br/>
        <br/>
            <div className="bg-black">
                <h4 className="font-serif text-4xl md:text-7xl font-semibold tracking-wide ">
                <span className="text-white mb-4">The Players Behind The</span>
                <span className='text-red-800 mb-4'> Play</span>
                </h4>
            <br/>
                <table className='border-spacing-y-2 '>
                    <tbody>
                        <tr>
                            <td className="px-4">
                                Muhammad Taha Tahir
                            </td>
                            <td className="px-4">
                                24l-0677
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4">
                                Muhammad Rafay
                            </td>
                            <td className="px-4">
                                24l-0649
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4">
                                Muhammad Ibrahim
                            </td>
                            <td className="px-4" >
                                24l-0713
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4">
                                Nauman Ali
                            </td>
                            <td className="px-4">
                                24l-0641
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
                    {about && (<About setAbout={setAbout} />)}
        </div>


    );
}

function About({setAbout})
{
    return(
        <div className = "fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop overflow-y-auto ">
        <button onClick = {() => setAbout(false)} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
        <div className = "relative group">
        
        <div className="max-w-4xl text-white p-8 space-y-6">
                                <h1 className='text-4xl md:text-5xl font-extrabold text-center text-white tracking-wide mb-4'>Bingo-Book-Shinobi Intelligence-Database</h1>

                    <p>This project manages a ninja world database, tracking academy students, Genin, missions, and Chunin exam participants. It also maintains a Bingo Book for rogue shinobi and monitors village resources like weapons, scrolls, and ninjutsu, providing a complete system for shinobi and military data.</p>
        <h2>Abstract</h2> 
        <p>In the world of shinobi-warriors trained in the art of ninjutsu,taijutsu, and genjutsu, keeping
        intel on different shinobis, their abilities, their ranks, and similar attributes is crucial. Where
        the global order of the ninja world is at stake, large scale ninja wars, vicious ninja operations,
        and competitive tournaments, chunin exams are an all time reality. Nations need to have
        complete information on shinobis of other nations to estimate the strength of each nation.
        Such estimates help in battlefields,competitions, and missions to anticipate the scale of
        defense or offense required on a certain forefront. Moreover, it is also imperative to keep
        intel on rogue ninjas and associations-akatsuki to be able to tackle their villainous agendas.
        Lastly, tracking the progress skills of shinobis trained in the academy is essential for
        predicting future military capabilities of one’s own nation.</p>
        <p>In a nutshell, a well-structured ninja database is the bread and butter of today’s ninja world.
        An efficient database means a stronger and well informed nation, technically enhancing its
        capability to act strategically and have a tactical advantage over others.</p>

        <h2> Description</h2>
        <p>In the ninja world, all novice ninjas enroll in an academy and graduate after passing first tier
        exams known as genin exams. After which they are assigned in teams of three under
        supervision of senior ninjas to further train and enhance their ninja prowess. If deemed fit,
        the senior ninja trainer (jonin), approves his/her students to partake in second tier exams,
        known as chunin exams where genins from different nations come to compete for the title of
        chunin. This project aims to maintain shinobi database of :</p>
        <ol>
        <li>1. Novice shinobis enrolled in academy of different nations</li>
        <li>2. Shinobis that passed the Genin exams</li>
        <li>3. Shinobis assigned to different rank missions</li>
        <li>4. Shinobis Shinobis participating in Chunin exams.</li>
        <br/>
        <p>Not all shinobis conform to the structures of the ninja world and its ideologies. Not all are
        courageous enough to walk the path of righteousness. So the fallen ones, the ones who
        betray their nations and resort to unlawful practices, need to be hunted down and put to rest
        for the good of all.</p>
        <br/>
        <li>5. This project also aims to maintain a bingo book, keeping intel on any shinobis that
        have gone rogue to do the aforementioned deed.</li>
        <br/>
        Moreover, we have incorporated additional utilities to keep intel on resources of different
        nations, which includes ninja weapons, forbidden scrolls and other ninjutsu sources. Thus,
        this project also:
        <br/>
        <li>6. Maintains track of village’s military arsenals and ninjutsu resources.</li>
        </ol>
        </div>

        </div>
        </div>
    );
}

function MetaFeatures({setFeatures,setBasic,setqqWindow,qqWindow,qdata,setQdata}){
 
    return (
        <>        
        <div className = "fixed inset-0 z-50 flex items-start justify-center bg-black/90 backdrop overflow-y-auto">
        <button onClick = {() => setFeatures(false)} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
        <button onClick = {()=> setBasic(true)} className = "absolute top-4 right-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Basic Features</button>
        <div className=" min-h-screen text-white">
            <div className = "text-center">
            <h1 className="text-12xl md:text-8xl font-semibold tracking-wide ">
               <span className = "text-orange-800 mb-4">Meta</span>
               <span className=' text-white mb-4'>Features</span> 
            </h1>
            </div>

            <br/>
            <br/>      

            <FeatureCards setBasic = {setBasic} qdata = {qdata} setQdata = {setQdata} qqWindow = {qqWindow} setqqWindow = {setqqWindow}/>    
            </div>        

        </div>    
        </>
    );
}

function BasicFeatures({setBasic,qqWindow,setqqWindow,setQdata,qdata}){
    
    return (
        <>        
        <div className = "fixed inset-0 z-50 flex justify-center bg-black/95 backdrop overflow-y-auto">
        <button onClick = {() => {setBasic(false); setQdata([])}} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
        <div className=" min-h-screen text-white">
            <div className="text-center">
                <h1 className="text-12xl md:text-8xl font-semibold tracking-wide ">
                <span className = "text-white mb-4">Basic</span> 
                <span className = "text-orange-800 mb-4">Features</span> 
                </h1>
            </div>

            <br/>
            <br/>

            <BasicFeatureCards qdata= {qdata} setQdata = {setQdata} qqWindow = {qqWindow} setqqWindow = {setqqWindow} />

            </div>        

        </div>    
        </>
    );
}

function BasicFeatureCards({qdata,setQdata,qqWindow,setqqWindow}){
    return(
        <div className = "grid grid-cols-4 gap-6 p-10 ">
            <div className = "relative group p-6 border border-gray-400">
                <button onClick = {() => {fetchShinobis(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30  transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                    <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">All Shinobis</h3></div>
                </button>   

                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    See all Shinobis
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {async () => {await fetchVillages(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">All Villages</h3></div>
            </button> 
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    See all  Villages
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {async () => {await chakra_consumption(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30  transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Poor Ranks</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    Find ninja ranks with average chakra consumption above a threshold
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {NeverFought(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Never Fought</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    Get ninjas who have never participated in any mission
                </div>
            </div>


            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {Population(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30  transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Population</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                     list of villages along with the total number of ninjas residing in each
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {Overpopulated(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30  transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Over Populated</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                     Villages having more ninjas than average
                </div>
            </div>
            
            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {FamousVillage(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30  transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Over Populated</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                     Villages who have hosted chunin cometition and also have rogue associations originating from them
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {LoserNinjas(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Loser Ninjas</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                     Display ninjas who never won a standoff but participated in atleast one 
                </div>
            </div>

                        <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {NinjaCount(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Ninja Count</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    list of villages along with the total number of ninjas residing in each
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {JutsuCreators(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Jutsu Creators</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    Jutsu and their creators
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {OverpoweredJutsu(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Strong Jutsu</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    Jutsus having more power than specific jutsu
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {ExemptedNinjas(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Exempted Ninjas</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    Ninja who isn't in standoff
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {SpecialVillages(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Special Villages</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    Villages who have hosted chunin cometition and also have rogue associations originating from them
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {Missions(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Missions</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    Displaying missions along with the squad assigned to them originating from them
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {Squads(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Squads</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                    Squads with mentor names having more than 1 member under it
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {Rivals(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30  transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Mission Analysis</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                Mission Revenue Analytics
                </div>
            </div>

            <div className = "relative group p-6 border border-gray-400">
            <button onClick = {() => {Standoffs(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30  transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
            <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Standoffs</h3></div>
            </button>   
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2  opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg whitespace-nowrap">
                Standoff History Tracker
                </div>
            </div>

             {qqWindow && (<QWindow setqqWindow = {setqqWindow} qdata = {qdata} setQdata={setQdata}/> )}        
        </div>
        ); 
}

function QWindow({setqqWindow,qdata,setQdata})
{
        const headers = qdata.length > 0 ?  Object.keys(qdata[0]) : [];

        return(
        <div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop">
        <button onClick = {() => {setqqWindow(false); setQdata([])}} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
        <div className=" min-h-screen text-white">
            <div>
            <th className="text-12xl md:text-8xl font-semibold tracking-wide text-white mb-4">
               Query 
            </th>
            <th className = "text-12xl md:text-8xl font-semibold tracking-wide text-orange-800 mb-4">Result </th>
            </div>

            <br/>
            <br/>

            <div className="bg-black/80 border border-white/20 rounded-2xl p-6 w-[80%] max-w-16xl max-h-[80vh] overflow-y-auto">

                            {Array.isArray(qdata) && qdata.length > 0 && (
                <table className="border border-white/30 boder-separate border-spacing-2 w=full text-white">
                    <thead>
                        <tr>
                            {headers.map((key,i) => (
                                <th key = {i} className = "border border-white/40 px-4 py-2 bg-white/10 rounded-md">
                                    {key}
                                </th>
                        ))}
                        </tr>
                    </thead>

                    <tbody>

                            {qdata.map((row,i) => (
                                <tr key = {i}>
                                   {headers.map((key,j)=> (
                                    <td key = {j} className='border border-white/40 px-4 py-2 bg-white/10 rounded-md'>
                                        {row[key]}
                                    </td>
                               ))}
                                </tr>
                            ))}

                    </tbody>
                    
                   
                        
                </table>
            )
            }
            </div>

            </div>        

        </div>  
        );  
}

function Input({qqWindow,setqqWindow,setQdata,qdata,setInput})
{
    const [iv,setIv] = useState("");
    return(
    <>        
        <div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop">
        <div className=" min-h-screen text-white">
            <div className = "text-center">
            <h1 className="text-12xl md:text-8xl font-semibold tracking-wide ">
               <span className = "text-red-800 mb-4">Input</span>
               <span className=' text-white mb-4'>Parameters</span> 
            </h1>
            </div>

            <br/>
            <br/>      
        <button onClick = {() => setInput(false)} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
            <input value = {iv} onChange = {(e) => setIv(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Threshold of Number of Students'
            type = "integer"/>
            
            <button className ="absolute top-4 right-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl "
             onClick = {async () => {await SaninLegacy(setQdata,iv); setqqWindow(true)}}>
                Submit
            </button>

            </div>
             {qqWindow && (<QWindow setqqWindow = {setqqWindow} qdata = {qdata} setQdata={setQdata}/> )}        

        </div>    
        </>
        );
}


function Input1({qqWindow,setqqWindow,setQdata,qdata,setInput1})
{
    const [iv,setIv] = useState("");
    const [iv1,setIv1] = useState("");
    return(
    <>        
        <div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop">
        <div className=" min-h-screen text-white">
            <div className = "text-center">
            <h1 className="text-12xl md:text-8xl font-semibold tracking-wide ">
               <span className = "text-red-800 mb-4">Input</span>
               <span className=' text-white mb-4'>Parameters</span> 
            </h1>
            </div>

            <br/>
            <br/>      
        <button onClick = {() => setInput1(false)} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
            <input value = {iv} onChange = {(e) => setIv(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter ninja Id'
            type = "text"/>
            
            <input value = {iv1} onChange = {(e) => setIv1(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Rogue association Name'
            type = "text"/>

            <button className ="absolute top-4 right-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl "
             onClick = {async () => {await TraitorPurge(setQdata,iv,iv1); setqqWindow(true)}}>
                Submit
            </button>

            </div>
             {qqWindow && (<QWindow setqqWindow = {setqqWindow} qdata = {qdata} setQdata={setQdata}/> )}        

        </div>    
        </>
        );
}

function Input2({qqWindow,setqqWindow,setQdata,qdata,setInput2})
{
    const [iv,setIv] = useState("");
    const [iv1,setIv1] = useState("");
    return(
    <>        
        <div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop">
        <div className=" min-h-screen text-white">
            <div className = "text-center">
            <h1 className="text-12xl md:text-8xl font-semibold tracking-wide ">
               <span className = "text-red-800 mb-4">Input</span>
               <span className=' text-white mb-4'>Parameters</span> 
            </h1>
            </div>

            <br/>
            <br/>      
        <button onClick = {() => setInput2(false)} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
            <input value = {iv} onChange = {(e) => setIv(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter ninja Id'
            type = "text"/>
            
            <input value = {iv1} onChange = {(e) => setIv1(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Village Name'
            type = "text"/>

            <button className ="absolute top-4 right-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl "
             onClick = {async () => {await KageS(setQdata,iv,iv1); setqqWindow(true)}}>
                Submit
            </button>

            </div>
             {qqWindow && (<QWindow setqqWindow = {setqqWindow} qdata = {qdata} setQdata={setQdata}/> )}        

        </div>    
        </>
        );
}

function Input3({qqWindow,setqqWindow,setQdata,qdata,setInput3})
{
    const [iv,setIv] = useState("");
    return(
    <>        
        <div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop">
        <div className=" min-h-screen text-white">
            <div className = "text-center">
            <h1 className="text-12xl md:text-8xl font-semibold tracking-wide ">
               <span className = "text-red-800 mb-4">Input</span>
               <span className=' text-white mb-4'>Parameters</span> 
            </h1>
            </div>

            <br/>
            <br/>      
        <button onClick = {() => setInput3(false)} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
            <input value = {iv} onChange = {(e) => setIv(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Element of Jutsu'
            type = "text"/>


            <button className ="absolute top-4 right-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl "
             onClick = {async () => {await JutsuF(setQdata,iv); setqqWindow(true)}}>
                Submit
            </button>

            </div>
             {qqWindow && (<QWindow setqqWindow = {setqqWindow} qdata = {qdata} setQdata={setQdata}/> )}        

        </div>    
        </>
        );
}


function Input4({qqWindow,setqqWindow,setQdata,qdata,setInput4})
{
    const [iv,setIv] = useState("");
    const [iv1,setIv1] = useState("");
    const [iv2,setIv2] = useState("");
    const [iv3,setIv3] = useState("");
    const [iv4,setIv4] = useState("");
    const [iv5,setIv5] = useState("");
    const [iv6,setIv6] = useState("");
    const [iv7,setIv7] = useState("");
    const [iv8,setIv8] = useState("");
    const [iv9,setIv9] = useState("");
    return(
    <>        
        <div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop">
        <div className=" min-h-screen text-white">
            <div className = "text-center">
            <h1 className="text-12xl md:text-8xl font-semibold tracking-wide ">
               <span className = "text-red-800 mb-4">Input</span>
               <span className=' text-white mb-4'>Parameters</span> 
            </h1>
            </div>

            <br/>
            <br/>      
        <button onClick = {() => setInput4(false)} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
    

            <input value = {iv} onChange = {(e) => setIv(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja ID'
            type = "text"/>

            <input value = {iv1} onChange = {(e) => setIv1(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja Name'
            type = "text"/>

            <input value = {iv2} onChange = {(e) => setIv2(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja Date of Birthday'
            type = "text"/>

            <input value = {iv3} onChange = {(e) => setIv3(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja Status'
            type = "text"/>

            <input value = {iv4} onChange = {(e) => setIv4(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja Clan'
            type = "text"/>

            <input value = {iv5} onChange = {(e) => setIv5(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja ChakraNature'
            type = "text"/>

            <input value = {iv6} onChange = {(e) => setIv6(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja Main Jutsu'
            type = "text"/>

            <input value = {iv7} onChange = {(e) => setIv7(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja Village'
            type = "text"/>

            <input value = {iv8} onChange = {(e) => setIv8(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja Rank'
            type = "text"/>

            <input value = {iv9} onChange = {(e) => setIv9(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja MentorID'
            type = "text"/>

        <button className ="absolute top-4 right-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl "
             onClick = {async () => {await InsertNewShinobi(setQdata,iv,iv1,iv2,iv3,iv4,iv5,iv6,iv7,iv8,iv9); setqqWindow(true)}}>
                Dive In
            </button>
            </div>
             {qqWindow && (<QWindow setqqWindow = {setqqWindow} qdata = {qdata} setQdata={setQdata}/> )}        

        </div>    
        </>
        );
}

function Input5({qqWindow,setqqWindow,setQdata,qdata,setInput5})
{
    const [iv,setIv] = useState("");
    const [iv1,setIv1] = useState("");
    return(
    <>        
        <div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop">
        <div className=" min-h-screen text-white">
            <div className = "text-center">
            <h1 className="text-12xl md:text-8xl font-semibold tracking-wide ">
               <span className = "text-red-800 mb-4">Input</span>
               <span className=' text-white mb-4'>Parameters</span> 
            </h1>
            </div>

            <br/>
            <br/>      
        <button onClick = {() => setInput5(false)} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
            <input value = {iv} onChange = {(e) => setIv(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Ninja ID'
            type = "text"/>
            <input value = {iv1} onChange = {(e) => setIv1(e.target.value)}className="w-full px-5 py-4 rounded-2xl bg-black/40 text-white  border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
            placeholder='Enter Chakra Nature Element'
            type = "text"/>


            <button className ="absolute top-4 right-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl "
             onClick = {async () => {await perfectCounter(setQdata,iv,iv1); setqqWindow(true)}}>
                Submit
            </button>

            </div>
             {qqWindow && (<QWindow setqqWindow = {setqqWindow} qdata = {qdata} setQdata={setQdata}/> )}        

        </div>    
        </>
        );
}

function Input6({qqWindow,setqqWindow,setQdata,qdata,setInput6})
{

    return(
    <>        
        <div className = "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop">
        <div className=" min-h-screen text-white">
            <div className = "text-center">
            <h1 className="text-12xl md:text-8xl font-semibold tracking-wide ">
               <span className = "text-red-800 mb-4">Input</span>
               <span className=' text-white mb-4'>Parameters</span> 
            </h1>
            </div>

            <br/>
            <br/>      
        <button onClick = {() => setInput6(false)} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
            <button className ="absolute top-4 right-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl "
             onClick = {async () => {await squadFinance(setQdata); setqqWindow(true)}}>
                Begin Financial Review
        </button>
        </div>
        </div>    
        </>
        );
}

function Input7({qqWindow, setqqWindow, setQdata, qdata, setInput7}) {
    const [iv, setIv] = useState("");
    const [iv1, setIv1] = useState("");

    return (
        <>        
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop">
            <div className="min-h-screen text-white w-full max-w-md px-4">
                <div className="text-center">
                    <h1 className="text-12xl md:text-8xl font-semibold tracking-wide ">
                       <span className="text-red-800 mb-4">Input</span>
                       <span className='text-white mb-4'>Parameters</span> 
                    </h1>
                </div>

                <br/><br/>      
                <button onClick={() => setInput7(false)} className="absolute top-4 left-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl ">Back</button>
                
                <input value={iv} onChange={(e) => setIv(e.target.value)} className="w-full px-5 py-4 mb-4 rounded-2xl bg-black/40 text-white border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
                placeholder='Enter Village (e.g. Sand)' type="text" />
                
                <input value={iv1} onChange={(e) => setIv1(e.target.value)} className="w-full px-5 py-4 mb-4 rounded-2xl bg-black/40 text-white border border-white/20 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 transition-all duration-300"
                placeholder='Population Threshold (e.g. 3000)' type="text" />

                <button className="absolute top-4 right-4 px-8 py-4 bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-red-600 border border-red-600 max-w-2xl "
                 onClick={async () => { await lastStandProtocol(setQdata, iv, iv1); setqqWindow(true) }}>
                    Initiate Protocol
                </button>
            </div>
            {qqWindow && (<QWindow setqqWindow={setqqWindow} qdata={qdata} setQdata={setQdata}/> )}        
        </div>        
        </>
    );
}


function FeatureCards({qqWindow,setqqWindow,setQdata,qdata}){
    const [input,setInput] = useState(false);
    const [input1,setInput1] = useState(false);
    const [input2,setInput2] = useState(false);
    const [input3,setInput3] = useState(false);
    const [input4,setInput4] = useState(false);
    const [input5,setInput5] = useState(false);
    const [input6,setInput6] = useState(false);
    const [input7,setInput7] = useState(false);

    return(
        <div className = "grid grid-cols-2 gap-6 p-10">
            <div >
             <button onClick = {() => {setInput(true);}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30  w-full h-32 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">The Sanin Legacy</h3></div>
                <img src = {sanin} className="w-60 h-16 object-cover object-top rounded-xl"/>
            </button> 
            </div>

            <div>
             <button onClick = {() => {setInput1(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 w-full h-32 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Traitor's Purge</h3></div>
                <img src = {traitor} className="w-60 h-16 object-cover object-top rounded-xl"/>
            </button> 
            </div>

            <div>
             <button onClick = {() => {setInput2(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30  w-full h-32 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Kage's Succession</h3></div>
                <img src = {hokage} className="w-60 h-16 object-cover  rounded-xl"/>
            </button> 
            </div>

            <div>
             <button onClick = {() => {setInput3(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 border  w-full h-32 border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Jutsu Forbidden</h3></div>
                <img src = {forbidden} className="w-60 h-16 object-cover object-top rounded-xl"/>
            </button> 
            </div>
            

            <div>
             <button onClick = {() => {setqqWindow(true);bloodlinePurity(setQdata); }} className="bg-black/40 rounded-3xl overflow-hidden w-full h-32 shadow-lg shadow-black/30 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Bloodline Purity</h3></div>
                <img src = {clan} className="w-60 h-16 object-cover  rounded-xl"/>
            </button> 
            </div>
            <div>
             <button onClick = {() => {setInput5(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 w-full h-32 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Perfect Counter</h3></div>
                <img src = {counter} className="w-60 h-16 object-cover  rounded-xl"/>
            </button> 
            </div>

            <div>
             <button onClick = {() => {squadFinance(setQdata); setqqWindow(true)}} className="bg-black/40 rounded-3xl overflow-hidden w-full h-32 shadow-lg shadow-black/30 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                <div><h3 className = "text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Squad Finance</h3></div>
                <img src = {rich} className="w-60 h-16 object-cover  rounded-xl"/>
            </button> 
            </div>

            <div>
             <button onClick={async () => { await villageResourceWar(setQdata); setqqWindow(true); }} className="bg-black/40 rounded-3xl w-full h-32 overflow-hidden shadow-lg shadow-black/30 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                <div><h3 className="text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Resource War Sim</h3></div>
                <img src={war} className="w-60 h-16 object-cover rounded-xl"/>
            </button> 
            </div>

            <div>
             <button onClick={async () => { await chuninCorruption(setQdata); setqqWindow(true); }} className="bg-black/40 rounded-3xl w-full h-32 overflow-hidden shadow-lg shadow-black/30 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                <div><h3 className="text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Corruption Detector</h3></div>
                <img src={legacy} className="w-60 h-16 object-cover rounded-xl"/>
            </button> 
            </div>

	    <div>
  	     <button onClick={async () => { await mentorPupilCreep(setQdata); setqqWindow(true); }} className="bg-black/40 rounded-3xl w-full h-32 overflow-hidden shadow-lg shadow-black/30 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
	        <div><h3 className="text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Power Creep</h3></div>
	        <img src={all_shinobis} className="w-60 h-16 object-cover rounded-xl"/>
	    </button> 
	    </div>

	    <div>
             <button onClick={() => {setInput7(true)}} className="bg-black/40 rounded-3xl overflow-hidden shadow-lg shadow-black/30 w-full h-32 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
                <div><h3 className="text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Last Stand</h3></div>
                <img src={lastStand} className="w-60 h-16 object-cover rounded-xl"/>
            </button> 
	    </div>
          
          	<div>
          	    <button onClick={async () => { await globalPowerIndex(setQdata); setqqWindow(true); }} className="bg-black/40 w-full h-32 rounded-3xl overflow-hidden shadow-lg shadow-black/30 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
          		<div><h3 className="text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Power Index Rerank</h3></div>
          		<img src={power} className="w-60 h-16 object-cover rounded-xl"/>
          	    </button> 
          	</div>
          
          	<div>
          	    <button onClick={async () => { await squadCarryAudit(setQdata); setqqWindow(true); }} className="bg-black/40 w-full h-32 rounded-3xl overflow-hidden shadow-lg shadow-black/30 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
          		<div><h3 className="text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Squad Carry Audit</h3></div>
          		<img src={carry} className="w-60 h-16 object-cover rounded-xl"/>
          	    </button> 
          	</div>

          	<div>
          	    <button onClick={async () => { await historicalRivalry(setQdata); setqqWindow(true); }} className="bg-black/40  w-full h-32 rounded-3xl overflow-hidden shadow-lg shadow-black/30 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
          		<div><h3 className="text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Historical Rivalry</h3></div>
          		<img src={rivalry} className="w-60 h-16 object-cover rounded-xl"/>
          	    </button> 
          	</div>
          
          	<div>
          	    <button onClick={async () => { await blackMarketAudit(setQdata); setqqWindow(true); }} className="bg-black/40 w-full h-32 rounded-3xl overflow-hidden shadow-lg shadow-black/30 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
          		<div><h3 className="text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Black Market Audit</h3></div>
          		<img src={inventory} className="w-60 h-16 object-cover rounded-xl"/>
          	    </button> 
          	</div>

            <div>
          	    <button onClick={async () => { setInput4(true); }} className="bg-black/40 w-full h-32 rounded-3xl overflow-hidden shadow-lg shadow-black/30 border border-white/30 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-orange-500/30 max-w-2xl mx-auto px-4 py-3 mx-6 flex items-center justify-between">
          		<div><h3 className="text-2xl md:text-4xl font-semibold tracking-wide text-white mb-4">Register New !</h3></div>
          		<img src={chunin} className="w-60 h-16 object-cover rounded-xl"/>
          	    </button> 
          	</div>

            {input && (<Input setInput = {setInput} setqqWindow={setqqWindow} setQdata={setQdata} qqWindow={qqWindow} qdata={qdata} />)}
            {input1 && (<Input1 setInput1 = {setInput1} setqqWindow={setqqWindow} setQdata={setQdata} qqWindow={qqWindow} qdata={qdata} />)}
            {input2 && (<Input2 setInput2 = {setInput2} setqqWindow={setqqWindow} setQdata={setQdata} qqWindow={qqWindow} qdata={qdata} />)}
            {input3 && (<Input3 setInput3 = {setInput3} setqqWindow={setqqWindow} setQdata={setQdata} qqWindow={qqWindow} qdata={qdata} />)}
            {input5 && (<Input5 setInput5 = {setInput5} setqqWindow={setqqWindow} setQdata={setQdata} qqWindow={qqWindow} qdata={qdata} />)}
            {input6 && (<Input6 setInput6 = {setInput6} setqqWindow={setqqWindow} setQdata={setQdata} qqWindow={qqWindow} qdata={qdata} />)}
            {input7 && (<Input7 setInput7 = {setInput7} setqqWindow={setqqWindow} setQdata={setQdata} qqWindow={qqWindow} qdata={qdata} />)}
            {input4 && (<Input4 setInput4 = {setInput4} setqqWindow={setqqWindow} setQdata={setQdata} qqWindow={qqWindow} qdata={qdata} />)}
            {qqWindow && (<QWindow setqqWindow={setqqWindow} qdata={qdata} setQdata={setQdata}/> )}        

        </div>
        );
}

function App()
{
const [qdata,setQdata] = useState([]);
const [qqWindow,setqqWindow] = useState(false);
const [features,setFeatures] = useState(false);
const [basic,setBasic] = useState(false);   


    return(
    <>
        <LandingPage setFeatures = {setFeatures} />
        {features && (<MetaFeatures setFeatures={setFeatures} setBasic = {setBasic} qqWindow = {qqWindow} setqqWindow = {setqqWindow} setQdata={setQdata} qdata={qdata}/>)}  
        {basic && (<BasicFeatures setBasic ={setBasic} qqWindow = {qqWindow} setqqWindow = {setqqWindow} setQdata={setQdata} qdata={qdata}/>)}
        
    </>
    );
}

export default App;