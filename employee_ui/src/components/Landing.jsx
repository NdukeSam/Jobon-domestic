import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/bg.png';
import searchIcon from '../assets/search-icon.png';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center gap-0 sm:gap-[100px] h-auto w-full bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col sm:flex-row justify-center items-center h-full text-white px-4">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">Job Vacancies</h1>
          <p className="lg:text-lg sm:text-sm break-words lg:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eum minima enim asperiores veritatis dolorum deleniti iusto saepe quia, cumque eaque commodi obcaecati doloremque nam sunt alias beatae sed nesciunt.
          </p>
        </div>
        <div 
          className="w-[150px] md:w-[250px] p-8 bg-gray-500 bg-opacity-75 rounded-2xl flex flex-col items-center mt-8 sm:mt-0 cursor-pointer" 
          onClick={() => navigate('/preferencesearch')}
        >
          <img className="w-16 md:w-20 mb-4" src={searchIcon} alt="microscope search icon" />
          <p className="text-[14px] md:text-[18px] font-bold break-words text-center">Search Jobs in Location</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
