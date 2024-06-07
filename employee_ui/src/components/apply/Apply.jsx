import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-regular-svg-icons';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Button from "../Button"

function Apply(){
  const [fileName, setFileName] = useState([
    'Nursing certificate certified by XXXXX',
    'Birth certificate',
    'Covid 19 test report',
    'Clinical XXXX certificate',
    'Proof of address',
    'Driver licence',
    'Passport/ID'
]);


    return(
        <div className="min-h-screen h-auto w-full flex flex-col items-center justify-start gap-10 text-[14px] bg-indigo-950 p-5 lg:p-0 text-white">
        <div className=' mt-5 text-start w-full lg:px-[8%] md:px-4 text-[32px] font-semibold text-white'>jobOn</div>
          <div className='max-w-[700px] w-full p-5 md:p-10 bg-slate-600 rounded-2xl flex flex-col items-center justify-start gap-6'>
              <h1 className='text-[25px] w-full text-start'>Apply</h1>
 
          <div>
          <div className='bg-slate-700 w-full px-5 py-2 flex items-center justify-start gap-10 mb-5'>
              <FontAwesomeIcon icon={faFileCirclePlus} className='text-[100px] text-blue-500'/>
              <h2 className='text-[16px]'>Upload all files required below.</h2>
              </div>
              <p className='text-[16px]'>
                You can upload multiple files of the following format (Pdf,JPG,PNG) see list or required documents for the specific role to upload.
              </p>
          </div>


        <p className='w-full text-start text-white text-[22px] underline tracking-wide'>Nursing in isreal</p>

        <ul className='capitalize list-disc w-full text-start'>
            {fileName.map(names => ( <li key={names}>{names}</li>))}
        </ul>

        <Button name={'Next'}/>
          </div>
      </div>
    )
}

export default Apply;