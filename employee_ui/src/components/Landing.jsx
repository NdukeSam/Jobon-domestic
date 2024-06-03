import Navbar from "./Navbar";
import backgroundImage from '../assets/bg.png';
import searchIcon from '../assets/search-icon.png'
function Landing(props) {
    return (
        <div className=" relative w-full bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}>
        <Navbar></Navbar>
        <div className="flex flex-col sm:flex-row justify-center items-center h-screen lg:items-center" >
            <div className=" w-1/2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">Job Vacancies</h1>
            <p className="lg:text-lg sm:text-sm pl-3 break-words lg:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eum minima enim asperiores veritatis dolorum deleniti iusto saepe quia, cumque eaque commodi obcaecati doloremque nam sunt alias beatae sed nesciunt.</p>
            </div>
            <div className="p-8 mt-6 bg-gray-500 bg-opacity-25 rounded-2xl">
                <div className="flex flex-col text-center">
                    <div className="ml-8">
                    <img src={searchIcon}alt=" microscope search icon" />
                    </div>
                        
                    <p className="text-xl font-bold break-words w-50">Search Jobs in location</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Landing;