import Accordion from "./Accordion"

export default function Info() {
    return(
        <div className="flex justify-center md:mt-16">
            <div className="mx-6  max-w-2xl">
                <p className="italic text-sm md:text-lg">Tak for en hyggelig portræt session.</p>
                <p className="capitalize md:text-5xl text-3xl font-medium text-gray-800 leading-8 mb-5">Ønsker i at købe jeres undervands portræt?</p>
                <div className="flex flex-col gap-1">
                    <p className="text-md md:text-lg">Så kan I gøre det her på siden.</p>
                    <p className="text-md md:text-lg">Udfyld <a className="text-blue-500" href="#signUp">blanketten</a> herunder.</p>
                    <p className="text-md md:text-lg">I modtager 2 billeder i digital form, så I selv har mulighed for at printe dem ud.</p>
                    <p className="text-xl md:text-2xl capitalize">Pris 250kr. pr. barn</p>
                </div>
                <Accordion />
            </div>
        </div>
    )
}