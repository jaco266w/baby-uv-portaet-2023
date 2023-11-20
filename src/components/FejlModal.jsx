export default function FejlModal(){
    return(
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => window.location.reload()}>✕</button>
                <h3 className="font-bold text-lg">Der skete en fejl!</h3>
                <p className="py-4">Prøv venligst igen.</p>
                <p className="py-4 my-1">Hvis du oplever gentagne fejl bedes du kontakte mig via følgende</p>
                <p className="py-4">Email: jfjfotograf@gmail.com</p>
                <p className="py-4">Telefon: 40 43 86 95</p>
            </div>
        </dialog>
    )
}