import { IconContext } from "react-icons";
import { IoPersonOutline, IoCalendarOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaBaby } from "react-icons/fa6";

import { useState } from "react";

export default function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [babyName, setBabyName] = useState("");
    const [email, setEmail] = useState("");
    const [trainingDay, setTrainingDay] = useState("default");
    const [consent, setConsent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (trainingDay === "default") {
            alert("Vælg venligst en undervisningsdag");
            return;
        }
        else {
            const registration = { firstName, lastName, babyName, email, trainingDay, consent };
        
            fetch("https://nlmbwlvsavadhbzkqkie.supabase.co/rest/v1/BabyUndervandsPortraetter_2023", {
                method: "POST",
                headers: { 
                    "Accept": "application/json",
                    "apiKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sbWJ3bHZzYXZhZGhiemtxa2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNjE4NTUsImV4cCI6MjAxMzkzNzg1NX0.6G4K9mtwPoYu29tRewmpE2QshrSJbhYzw9oG2BQND8w",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registration)
            }) .then(() => {
                console.log("new registration added");
                window.location.reload();
            })
        }
        
    };


    return (
        <div className="flex justify-center">
            <div className="m-5 md:my-20 p-5 md:p-20 bg-gray-200 shadow-2xl rounded-md">
                <div className="max-w-lg w-full">
                    <img className="w-60 mb-6" src="/assets/logo.webp" alt="Jacob Jørgensen Medieproduktion logo" />
                    <h1 className="bg-orange-400 text-white text-center py-4 text-lg mb-8 capitalize md:text-2xl">baby undervands portrætter 2023</h1>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <label className="flex ml-2 mb-2">
                            <IconContext.Provider value={{size: 30}}>
                                <IoPersonOutline />
                            </IconContext.Provider>
                            <p className="text-red-500 self-end">*</p>
                        </label>
                        <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-4">
                            <input className="pl-2.5 py-2 border rounded-md font-light" type="text" placeholder="Mor/Far Fornavn" required 
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input className="pl-2.5 py-2 border rounded-md font-light" type="text" placeholder="Mor/Far Efternavn" required 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <label className="flex ml-2 mt-6 mb-2">
                            <IconContext.Provider value={{size: 30}}>
                                <FaBaby />
                            </IconContext.Provider>
                            <p className="text-red-500 self-end">*</p>
                        </label>
                        <input className="pl-2.5 py-2 border rounded-md font-light" type="text" placeholder="Barnets Fornavn" required 
                            value={babyName}
                            onChange={(e) => setBabyName(e.target.value)}
                        />
                        <label className="flex ml-2 mt-6 mb-2">
                            <IconContext.Provider value={{size: 30}}>
                                <HiOutlineMail />
                            </IconContext.Provider>
                            <p className="text-red-500 self-end">*</p>
                        </label>
                        <input className="pl-2.5 py-2 border rounded-md font-light" type="email" placeholder="Email" required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="flex ml-2 mt-6 mb-2">
                            <IconContext.Provider value={{size: 30}}>
                                <IoCalendarOutline />
                            </IconContext.Provider>
                            <p className="text-red-500 self-end">*</p>
                        </label>
                        <select className="pl-3 py-3 border bg-white rounded-md font-light"  required value={trainingDay} onChange={(e) => setTrainingDay(e.target.value)}>
                            <option value="default" disabled>Vælg Undervisningsdag...</option>
                            <option value="Mandag">Mandag</option>
                            <option value="Tirsdag">Tirsdag</option>
                            <option value="Onsdag">Onsdag</option>
                            <option value="Torsdag">Torsdag</option>
                            <option value="Fredag">Fredag</option>
                        </select>
                        <div className="flex gap-2 my-6">
                            <input required type="radio" 
                                checked={consent === true}
                                onChange={(e) => setConsent(true)}
                            />
                            <label className="text-sm md:text-base" >Jeg acceptere følgende <a target="_blank" className="text-blue-700 underline" href="#">privatlivspolitik</a> ang. behandling af mine data, samt følgende <a target="_blank" className="text-blue-700 underline" href="#">samtykkeerklæring</a> ang. portræt-sessonien.</label>
                        </div>
                        <button className="bg-orange-400 text-white text-lg rounded-md py-2 w-40 ml-auto mr-auto">Tilmeld</button>
                    </form>
                </div>
            </div>
        </div>
      
    );
}