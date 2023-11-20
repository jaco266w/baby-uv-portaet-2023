export default function Modal(){
    return(
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => window.location.reload()}>✕</button>
                <h3 className="font-bold text-lg">Bestilling Modtaget!</h3>
                <p className="py-4">Du vil indenfor 24 timer modtage en faktura via email, som indeholder betalings information</p>
            </div>
        </dialog>
    )
}