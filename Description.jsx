import Card from '../components/Card'

const Description=()=>{
    const texts=['DS','DS','DS','DS'];
    return (
        
        <section className="flex flex-col  gap-4">
            <div  className="font-semi-bold text-black">Selected Capabilites</div>
            <div className='grid grid-cols-2 gap-8'>
            {
             texts.map((text,index)=>{
                return <Card key={index} text={text}/>
             })   
            }
            </div>
        </section>
    )
}
export default Description;