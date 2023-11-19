export default function Accordion() {
    return(
        <div className="flex flex-col gap-3 mt-6">
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-lg font-medium capitalize">
                    Levering af billeder
                </div>
                <div className="collapse-content"> 
                    <p>Senest 14 dage efter bekræftigelse af betaling, modtager I jeres billeder via Email.</p>
                    <p className="italic text-sm">(Emailaddressen anigiver I i blanketten)</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-lg font-medium">
                    Betalingsmuligheder
                </div>
                <div className="collapse-content flex flex-col gap-2"> 
                    <p>Efter udfyldning af blanketten modtager I en faktura via Email</p>
                    <p>I denne mail kan i klikke på knappen "Betal Med Kort"</p>
                    <p>Herefter skal i blot følge de angivne instruktioner</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-lg font-medium">
                    Hjælp Til Print
                </div>
                <div className="collapse-content flex flex-col gap-2"> 
                    <p>Drømmer i om at få printet jeres billede på lærred, i storformat eller bare til familie-albummet?</p>
                    <p>Så skal i være mere end velkomne til at kontakte mig:</p>
                    <p>Mail: <a className="text-blue-500" href="mailto:jfjfotograf@gmail.com">jfjfotograf@gmail.com</a></p>
                    <p>Telefon: <a className="text-blue-500" href="tel:+4540438695">+45 40 43 86 95</a></p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-lg font-medium">
                    Brug For Hjælp?
                </div>
                <div className="collapse-content flex flex-col gap-2"> 
                    <p>Kontakt mig via følgende:</p>
                    <p>Mail: <a className="text-blue-500" href="mailto:jfjfotograf@gmail.com">jfjfotograf@gmail.com</a></p>
                    <p>Telefon: <a className="text-blue-500" href="tel:+4540438695">+45 40 43 86 95</a></p>
                </div>
            </div>
        </div>
    )
}