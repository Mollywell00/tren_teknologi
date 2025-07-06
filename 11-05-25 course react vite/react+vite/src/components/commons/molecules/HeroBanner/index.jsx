import CardMedium from "../../atoms/CardMedium"
import DoubleCurvedText from "../../atoms/DoubleCurvedText"

const HeroBanner = () => {
    const viewText = (type) =>{
        return(
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-27 w-27 flex flex-col gap-2 items-center justify-center rounded-full">
                <DoubleCurvedText type={type} />
            </div>
        )
    }

    return (
    <section className="relative h-[460px] w-full rounded-b-4xl ">
        <img src="/images/terapi.jpg" className="h-full w-full rounded-4xl object-cover shadow-md"/>
        <div className="absolute bg-(--bg-primary-cray) h-32 w-32 rounded-full -bottom-18 -translate-x-1/2 transform left-1/2"/>
        <div className="absolute -bottom-16 left-1/2 flex h-28 w-28 -translate-x-1/2 transform cursor-pointer flex-col items-center justify-center gap-3 rounded-full bg-(--bg-secondary-cray) shadeow-2x1 transition-transform duration-300 ease-in-out hover:scale-105">
            {viewText("top")}

            <i className="fa fa-plus mb-2  text-xl text-white transition-transform duration-300 ease-in-out hover:-rotate-45"></i>
            
            {viewText("bottom")}
        </div>
    </section>
    )
}
export default HeroBanner