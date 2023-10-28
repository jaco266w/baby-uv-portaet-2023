import RegisteredCard from "./RegisteredCard";

import { useEffect, useState } from "react";

export default function RegisteredList(props) {

    const [registrations, setRegistrations] = useState(null);
    const url = `https://nlmbwlvsavadhbzkqkie.supabase.co/rest/v1/BabyUndervandsPortraetter_2023?trainingDay=eq.${props.weekDay}`;
    console.log(url);

    useEffect(() => {
        fetch(url, {
            "method": "GET",
            "headers": {
                "apiKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sbWJ3bHZzYXZhZGhiemtxa2llIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNjE4NTUsImV4cCI6MjAxMzkzNzg1NX0.6G4K9mtwPoYu29tRewmpE2QshrSJbhYzw9oG2BQND8w"
            }
        })
            .then(response =>  {
                return response.json();
            })
            .then(data => {
                const sortedData = data.sort((a, b) => {
                  if (a.firstName < b.firstName) {
                    return -1;
                  }
                  if (a.firstName > b.firstName) {
                    return 1;
                  }
                  return 0;
                });
                setRegistrations(sortedData);
            })
    }, []);
    console.log(registrations);
    return(
        <div className="ml-auto mr-auto max-w-6xl">
            <h2 className="ml-6 mt-16 uppercase text-3xl font-medium">{props.weekDay}</h2>
            {registrations && (
                <p className="ml-6 text-gray-500 capitalize">antal tilmeldte: {registrations.length}</p>
            )}
            <div className="w-full md:grid md:grid-cols-1 md:gap-4">
            { registrations && (
                registrations.length > 0 ? (
                    registrations.map(registration => (
                    <RegisteredCard
                        key={registration.id}
                        id={registration.id}
                        firstName={registration.firstName}
                        lastName={registration.lastName}
                        email={registration.email}
                        babyName={registration.babyName}
                        trainingDay={registration.trainingDay}
                        offerSent={registration.offerSent ===true ? "tilbud sendt" : "ikke sendt"}
                        paid={registration.paid ===true ? "betalt" : "ikke betalt"}
                    />
                ))
          ) : (
            <RegisteredCard firstName="no registered"/>
          )
        )}
            </div>
        </div>
    )
}