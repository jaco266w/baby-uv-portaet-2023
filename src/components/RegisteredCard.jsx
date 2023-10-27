import { IconContext } from "react-icons";
import { IoPersonOutline, IoCalendarOutline } from "react-icons/io5";
import { FaBaby } from "react-icons/fa6";

import { useState } from "react";

export default function RegisteredCard(props) {
    const [offerSent, setOfferSent] = useState(props.offerSent === "tilbud sendt");
    const [paid, setPaid] = useState(props.paid === "betalt");

    const handleOfferSentClick = () => {
        fetch(`https://nlmbwlvsavadhbzkqkie.supabase.co/rest/v1/BabyUndervandsPortraetter_2023?id=eq.${props.id}`, {
        method: "PATCH",
        headers: {
            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sbWJ3bHZzYXZhZGhiemtxa2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNjE4NTUsImV4cCI6MjAxMzkzNzg1NX0.6G4K9mtwPoYu29tRewmpE2QshrSJbhYzw9oG2BQND8w",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ offerSent: !offerSent }),
        }).then(() => {
        setOfferSent(!offerSent);
        });
    };

    const handlePaidClick = () => {
        fetch(`https://nlmbwlvsavadhbzkqkie.supabase.co/rest/v1/BabyUndervandsPortraetter_2023?id=eq.${props.id}`, {
        method: "PATCH",
        headers: {
            apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sbWJ3bHZzYXZhZGhiemtxa2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNjE4NTUsImV4cCI6MjAxMzkzNzg1NX0.6G4K9mtwPoYu29tRewmpE2QshrSJbhYzw9oG2BQND8w",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ paid: !paid }),
        }).then(() => {
        setPaid(!paid);
        });
    };
    
    const offerSentStyle = props.offerSent === 'tilbud sendt' ? 'text-green-500' : 'text-red-500';
    const paidStyle = props.paid === 'betalt' ? 'text-green-500' : 'text-red-500';

    return (
        <article id={props.id} className="m-5 md:my-4 p-5 bg-gray-200 shadow-xl rounded-md">
            <div>
                <div className="flex items-end gap-2">
                    <IconContext.Provider value={{size: 30}}>
                        <IoPersonOutline />
                    </IconContext.Provider>
                    <p>{props.firstName} {props.lastName}</p>
                </div>
                <p className="text-gray-500 font-light">{props.email}</p>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <div className="flex items-end mt-3 mb-4 -ml-0.5 gap-2">
                        <IconContext.Provider value={{size: 30}}>
                            <FaBaby />
                        </IconContext.Provider>
                        <p>{props.babyName}</p>
                    </div>
                    <div className="flex items-end gap-2">
                        <IconContext.Provider value={{size: 28}}>
                            <IoCalendarOutline />
                        </IconContext.Provider>
                        <p>{props.trainingDay}</p>
                    </div>
                </div>
                <div>
                    <p className={`capitalize mt-3 mb-4 ${offerSentStyle}`}>{props.offerSent}</p>
                    <p className={`capitalize ${paidStyle}`}>{props.paid}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-4">
                <button
                    className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded-md shadow-md capitalize"
                    onClick={handleOfferSentClick}
                >
                    Send tilbud
                </button>
                <button
                    className="px-4 py-1.5 bg-green-500 text-white text-sm rounded-md shadow-md capitalize ml-2"
                    onClick={handlePaidClick}
                >
                    Betal
                </button>
            </div>
        </article>
    )
}