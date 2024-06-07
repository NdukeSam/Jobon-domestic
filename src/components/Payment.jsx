import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import msc from "../assets/msc.jpg";
import vsc from "../assets/vsc.jpg";
import ppc from "../assets/ppc.jpg";
import allCountry from "../country.json";
import CustomCheckbox from "./Checkbox.jsx";

function Payment() {
  const [pick, setPick] = useState('');
  const [subscription, setSubscription] = useState({ name: '', price: '' });
  const [plan, setPlan] = useState(1);

  useEffect(() => {
    switch (plan) {
      case 1:
        setSubscription({ name: 'monthly', price: 25 });
        break;
      case 2:
        setSubscription({ name: 'Year', price: 300 });
        break;
      default:
        break;
    }
  }, [plan]);

  function handlePlan(num) {
    setPlan(num);
  }

  function submit(e){
    e.preventDefault()
}

  return (
    <div className="min-h-screen h-auto w-full flex flex-col items-center justify-start gap-10 text-[14px] bg-indigo-950 p-5 lg:p-0">
    <div className=' mt-5 text-start w-full lg:px-[8%] md:px-4 text-[32px] font-semibold text-white'>jobOn</div>
      <div className="w-full max-w-[500px] md:max-w-[900px] h-auto p-6 bg-white rounded-2xl">
        <FontAwesomeIcon icon={faCircleXmark} className="mb-5 text-[25px] font-extralight" />
        <form className="w-full">
          <h1 className="text-slate-900 font-bold text-[22px] mb-5">Upgrade to a Plus Account</h1>
          <div className="flex md:flex-row flex-col items-start justify-between gap-5 h-auto">
            <div className="w-full md:w-[55%] flex flex-col items-start justify-start gap-8">
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <label htmlFor="bill" className="text-neutral-600 font-semibold">Billed to</label>
                <input type="text" id="bill" className="border-[1.5px] border-slate-300 w-full px-3 py-2 rounded-lg outline-none" />
                <div className="w-full border-2 flex items-center justify-between rounded-lg px-2">
                  <input type="number" className="flex-1 outline-none border-none py-2" placeholder="Card Number" />
                  <div className="sm:flex items-center justify-start gap-2 hidden">
                    <img src={vsc} alt="1" className="w-[30px] h-[20px] object-cover border-2" />
                    <img src={msc} alt="2" className="w-[30px] h-[20px] object-cover border-2" />
                    <img src={ppc} alt="3" className="w-[30px] h-[20px] object-cover border-2" />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 w-full">
                  <input type="text" className="w-1/2 border-[1.5px] p-2 outline-none rounded-lg border-slate-300" placeholder="MM/YY" />
                  <input type="number" placeholder="CVV" className="w-1/2 outline-none border-[1.5px] p-2 rounded-lg border-slate-300" />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="country" className="w-full text-neutral-600 font-semibold">Country</label>
                <div className="w-full relative mt-2">
                  <select className="w-full p-2 border-[1.5px] border-slate-300 rounded-lg outline-none cursor-pointer" onChange={(e) => setPick(e.target.value)}>
                    {allCountry.map(country => (<option key={country.name} value={country.name}>{country.name}</option>))}
                  </select>
                  <div className="absolute w-10 h-full right-8 top-0 flex items-center justify-center pointer-events-none">
                    {allCountry.map(image => image.name === pick ? (<img src={image.flags.png} className="rounded-sm w-full h-6 border-[1px]" alt={image.name} />) : null)}
                  </div>
                </div>
                <input type="text" placeholder="Zip Code" className="border-[1.5px] border-slate-300 w-full rounded-lg p-2 outline-none mt-3" />
              </div>
            </div>
            <div className="w-full md:w-[45%] flex flex-col items-start justify-start gap-2">
              <p className='text-neutral-600 font-semibold'>Membership Type</p>
              <div
                className={`flex items-center justify-start gap-2 border-[1.5px] w-full rounded-lg py-5 px-2 cursor-pointer  ${plan === 1 ? 'border-blue-500' : ''}`}
                onClick={() => handlePlan(1)}
              >
                <CustomCheckbox checked={plan === 1} />
                <div>
                  <p className='text-[16px] font-semibold'>Pay Monthly</p>
                  <p className='text-neutral-400'>$25 / month per member</p>
                </div>
              </div>
              <div
                className={`flex items-center justify-start gap-2 border-[1.5px] w-full rounded-lg py-5 px-2 cursor-pointer ${plan === 2 ? 'border-blue-500' : ''}`}
                onClick={() => handlePlan(2)}
              >
                <CustomCheckbox checked={plan === 2} />
                <div>
                  <p className='text-[16px] font-semibold'>Pay Anually</p>
                  <p className='text-neutral-400'>$300 / year per member</p>
                </div>
              </div>
              <button type='submit' className='w-full bg-blue-500 py-3 rounded-lg text-white flex items-center justify-center gap-4 mt-4 hover:opacity-90' onClick={(e)=> submit(e)}>
                <FontAwesomeIcon icon={faBolt} />
                Upgrade to plus</button>
            </div>
          </div>
          <p className="w-full md:w-[55%] text-[14px] text-slate-500 mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos reprehenderit alias suscipit hic, maxime excepturi.</p>
          <div className="mt-12">
            <p className='text-[20px] font-bold text-slate-900'>${subscription.price}.00 / {subscription.name} / User</p>
            <p className="text-blue-400 text-[14px]">Details</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
