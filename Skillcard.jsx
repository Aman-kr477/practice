import { Checkbox } from "@bigbinary/neetoui";
const Skillcard=({items})=>{
    return(
    <div className="space-y-4"> 
        {items.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <Checkbox label={item} />
        </div>

      ))}
      </div>)
};
export default Skillcard;