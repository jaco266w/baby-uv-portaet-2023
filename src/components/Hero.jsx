export default function Hero() {
    return(
        <div className="grid">
            <img className="col-start-1 col-end-2 row-start-1 row-end-2 z-10 place-self-end object-cover lg:-mb-16" src="/assets/wave.svg" alt="" />
            <img className="col-start-1 col-end-2 row-start-1 row-end-2 max-h-56 lg:max-h-[32rem] w-full object-cover" src="/assets/hero_images.webp" alt="" />
        </div>
    )
}