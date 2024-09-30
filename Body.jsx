import BodyCard from "../components/BodyCard";

const Body = () => {
    return (
        <section className="flex flex-col gap-4">
            <div>
                <p className=" py-2 font-bold text-2xl">Section 1</p>
                <BodyCard threearrow/>
            </div>
            <div>
                <p className=" py-2 font-bold text-2xl">Section 2</p>
                <BodyCard  threearrow/>
            </div>
        </section>
    );
};

export default Body;
