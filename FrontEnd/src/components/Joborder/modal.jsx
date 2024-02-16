import { useState, useEffect } from "react";
import { Switch } from '@headlessui/react'


// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose }) => {
  const [servicetype, setServiceTypeValue] = useState('');
  const [servicechoice, setServiceChoice] = useState('');
  const [keyboardmodstype, setKeyboardModsTypeValue] = useState('');

  const [keyboardcleanenabled, setKeyboardCleanEnabled] = useState(false);
  const [keycapenabled, setKeyCapEnabled] = useState(false);
  const [switchenabled, setSwitchEnabled] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className=" flex  flex-col mt-4 gap-8">
              <h1 className="text-center text-4xl font-bold">Service</h1>
              <div className="flex">
                <h3 className="flex-grow">Type of Service:</h3>
                <select
                  value={servicetype} 
                  onChange={e => {
                    setServiceTypeValue(e.target.value); 
                    setServiceChoice(e.target.value);}
                  } 
                >
                  <option value="">-- Please Select --</option>
                  <option value="Keyboard Modding">Keyboard Modding</option>
                  <option value="PC Cleaning">PC Cleaning</option>
                  <option value="PC Building">PC Building</option>
                </select>
              </div>        
              {servicechoice==="Keyboard Modding" ?(
                <div className=" flex flex-col gap-8">
                  <div className="flex ">
                    <h3 className="flex-grow">Type of Keyboard Mods:</h3>
                    <select
                      value={keyboardmodstype} 
                      onChange={e => setKeyboardModsTypeValue(e.target.value)} 
                    >
                      <option value="">-- Please Select --</option>
                      <option value="Foam mod">Foam mod</option>
                      <option value="Holee mod">Holee mod</option>
                      <option value="Tape mod">Tape mod</option>
                    </select>
                  </div>
                  <div className="flex">
                    <h2 className="flex-grow">keyboard deep clean</h2>
                    <Switch
                      checked={keyboardcleanenabled}
                      onChange={setKeyboardCleanEnabled}
                      className={`${keyboardcleanenabled ? 'bg-gray-400' : 'bg-gray-200'}
                        relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${keyboardcleanenabled ? 'translate-x-7' : 'translate-x-0'}
                          pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                  </div>
                  <div className="flex gap-8">
                    <h2 className="flex-grow">Keycap cleaning</h2>
                    <Switch
                      checked={keycapenabled}
                      onChange={setKeyCapEnabled}
                      className={`${keycapenabled ? 'bg-gray-400' : 'bg-gray-200'}
                        relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${keycapenabled ? 'translate-x-7' : 'translate-x-0'}
                          pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                  </div>
                  <div className="flex">
                    <h2 className="flex-grow">Switch Lubing</h2>
                    <Switch
                      checked={switchenabled}
                      onChange={setSwitchEnabled}
                      className={`${switchenabled ? 'bg-gray-400' : 'bg-gray-200'}
                        relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${switchenabled ? 'translate-x-7' : 'translate-x-0'}
                          pointer-events-none inline-block h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                    
                  </div>
                  <label className="flex items-center">
                    Description:                   
                  </label>
                  <textarea className="border-2" name="postContent" rows={4} cols={40} />
                  <button className="bg-CACACAC hover:bg-opacity-75 opacity-100 text-black font-bold py-2 px-4 rounded-full ">Submit</button>
                </div>
              )
                : servicechoice==="PC Cleaning"?
                (
                  <div className="flex flex-col gap-8">
                    <p className="flex-grow">Chosen Service: {servicechoice}</p>
                    <label className="flex items-center">
                      Write your post:                   
                    </label>
                    <textarea  className="border-2" name="postContent" rows={4} cols={40} />
                    <button className="bg-CACACAC hover:bg-opacity-75 opacity-100 text-black font-bold py-2 px-4 rounded-full ">Submit</button>
                  </div>
                )
                : servicechoice==="PC Building"?
                (
                  <div className="flex flex-col gap-8">
                    <p className="flex-grow">Chosen Service: {servicechoice}</p>
                    <label className="flex items-center">
                      Write your post:                   
                    </label>
                    <textarea  className="border-2" name="postContent" rows={4} cols={40} />
                    <button className="bg-CACACAC hover:bg-opacity-75 opacity-100 text-black font-bold py-2 px-4 rounded-full ">Submit</button>
                  </div>
                )
                
                :
                null
              }
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
