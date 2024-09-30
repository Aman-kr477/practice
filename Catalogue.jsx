import BodyCard from "../components/BodyCard";

const Catalogue=()=>{
    return (
        <section className="flex flex-col gap-4">
            <p className="font-bold text-2xl">Question Catalogue</p>
            <BodyCard textinfo="Add" buttonCheck={true} threearrow={false} />
            <BodyCard  textinfo="Add" buttonCheck={true}  threearrow={false}/>
            <BodyCard  textinfo="Add" buttonCheck={true}  threearrow={false}/>
        </section>
    )
}
export default Catalogue;