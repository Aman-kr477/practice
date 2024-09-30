import BodyCard from "../components/BodyCard";
import {Input} from "@bigbinary/neetoui";
import {Search} from "@bigbinary/neeto-icons"
import { roles,experienceLevels,times,languages } from "../Constants/skillset";
import Skillcard from "../components/Skillcard";
const SkillSet= () => {
    return (
        <section className="flex flex-col gap-4">
         <div className="flex-1  justify-center items-center w-full">
        <Input
          placeholder="Search for Filters"
          prefix={<Search />}
          type="search"
          className="border-2 border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>
   
      <div>
        <p className="font-bold">Role</p>
        <div className="mt-2">{<Skillcard items={roles} />}</div>
      </div>

      <div>
        <p className="font-bold">Experience Level</p>
        <div className="mt-2">{<Skillcard items={experienceLevels}/>}</div>
      </div>

      <div>
        <p className="font-bold">Time to Complete</p>
        <div className="mt-2">{<Skillcard items={times}/>}</div>
      </div>

      <div>
        <p className="font-bold">Languages Supported</p>
        <div className="mt-2">{<Skillcard items={languages}/>}</div>
      </div>
    
        
        </section>
    );
};

export default SkillSet;
