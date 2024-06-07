import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Button from "./components/Button";

function Doc() {
    const [fileNumbers, setFileNumbers] = useState(0);
    const [fileName] = useState([
        'Nursing certificate certified by XXXXX',
        'Birth certificate',
        'Covid 19 test report',
        'Clinical XXXX certificate',
        'Proof of address',
        'Driver licence',
        'Passport/ID'
    ]);
    const [filesUploaded, setFilesUploaded] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
    const [message, setMessage] = useState(""); // State for message
    const [showLoader, setShowLoader] = useState(false); // State for loader visibility

    const fileInputRef = useRef(null);

    useEffect(() => {
        if (showLoader) {
            const timer = setTimeout(() => {
                setShowLoader(false);
                setMessage(""); // Clear the message after the loader finishes
            }, 3000); // Adjust the duration as needed (3000ms = 3 seconds)
            return () => clearTimeout(timer);
        }
    }, [showLoader]);

    function handleFileChange(e) {
        setSelectedFile(e.target.files[0]);
        setSaveButtonDisabled(false); // Enable Save button when a file is selected
        setNextButtonDisabled(true); // Disable Next button until the file is saved
    }

    function saveFile() {
        if (selectedFile) {
            // Check if the file is already uploaded
            if (!filesUploaded.some(file => file.name === selectedFile.name)) {
                setFilesUploaded(prevFilesUploaded => [...prevFilesUploaded, { name: selectedFile.name, type: selectedFile.type }]);
                setSelectedFile(null); // Clear selected file after saving
                setSaveButtonDisabled(true); // Disable Save button after saving
                setNextButtonDisabled(false); // Enable Next button after saving
                fileInputRef.current.value = ''; // Clear the file input
                setMessage('File uploaded successfully!'); // Set success message
                setShowLoader(true); // Show the loader
            } else {
                setMessage('File already uploaded!'); // Set duplicate file message
                setShowLoader(true); // Show the loader
            }
        } else {
            setMessage('Please select a file to upload.'); // Set no file selected message
            setShowLoader(true); // Show the loader
        }
    }

    function nextFile() {
        if (!nextButtonDisabled && fileNumbers < fileName.length - 1) {
            setFileNumbers(prevFileNumbers => prevFileNumbers + 1);
            setSelectedFile(null); // Clear selected file
            setSaveButtonDisabled(true); // Disable Save button for the next file
            setNextButtonDisabled(true); // Disable Next button until a file is selected and saved
            fileInputRef.current.value = ''; // Clear the file input
            setMessage(""); // Clear message when moving to the next file
            setShowLoader(false); // Ensure loader is hidden
        }else{
            setMessage('Please select a file to upload.'); // Set no file selected message
            setShowLoader(true); // Show the loader
        }
    }

    return (
        <div className="min-h-screen h-auto w-full flex flex-col items-center justify-start gap-40 text-[14px] bg-indigo-950 p-5 lg:p-0 text-white">
            <div className='mt-5 text-start w-full lg:px-[8%] md:px-4 text-[32px] font-semibold text-white'>jobOn</div>

            <div className="max-w-[500px] w-full p-5 flex flex-col items-center justify-start gap-10">
                <div className="w-full py-1 flex items-center justify-center relative z-10 bg-gray-700">
                    <span 
                        className="absolute bg-slate-500 h-full top-0 left-0 -z-[1]" 
                        style={{ width: `${((fileNumbers + 1) / fileName.length) * 100}%` }}
                    ></span>
                    <span className="font-semibold">{fileNumbers + 1}/{fileName.length}</span>
                </div>

                <div className="w-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faFileCirclePlus} className='text-[100px] text-blue-500'/>
                </div>

                <p>Upload {fileName[fileNumbers]}</p>

                <input type="file" ref={fileInputRef} accept=".pdf,.jpg,.png" onChange={handleFileChange} />

                <div className="flex flex-col items-center justify-start gap-5">
                    <div onClick={saveFile} disabled={saveButtonDisabled} >
                        <Button name={'Save'} />
                    </div>
                    <div onClick={nextFile} disabled={nextButtonDisabled} >
                        <Button name={'Next'} />
                    </div>
                </div>

                {message && (
                    <div className="w-auto text-center mt-4 fixed top-0 right-0 z-50">
                        <h1>{Hello }</h1>
                        {showLoader && (
                                <div className="w-full absolute top-0 left-0 h-full bg-blue-700 animate-loader"></div>
                        )}
                    </div>
                 )}
            </div>
        </div>
    )
}

export default Doc;
