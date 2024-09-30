import {MenuVertical} from "@bigbinary/neeto-icons"
const BodyCard=({buttonCheck,textinfo,threearrow})=>{
return (
 
            <section className="p-4   bg-white shadow-lg rounded-lg border border-black">
                <div className="flex justify-between">
                <h2 className="text-xl font-semibold mb-2">
                    Implementing a Filtering and Sorting API Route
                 
                </h2>
                <div className="flex ">
      <span>
        {buttonCheck && (
          <div className="border-2 border-blue-500 text-blue-600 rounded-full bg-transparent px-2">
            {textinfo}
          </div>
        )}
        
        {threearrow && <MenuVertical className="text-black -600 ml-2 cursor-pointer" />}
      </span>
    </div>
                </div>
               
                <p className="text-gray-700 mb-4">
                    This assessment involves building a new route for a blog post API that requires candidates to validate input parameters, fetch blog...
                    <span className="text-blue-500 cursor-pointer"> more</span>
                </p>
                <div className="flex flex-col space-y-1">
                    <div>
                        <span className="font-semibold">Role:</span> <span>Back-end</span>
                    </div>
                    <div>
                        <span className="font-semibold">Level:</span> <span>New Grad/Intern, Junior, Intermediate</span>
                    </div>
                    <div>
                        <span className="font-semibold">Languages:</span> <span>Node.js, Ruby on Rails, Python (Flask) and 5 more</span>
                    </div>
                    <div>
                        <span className="font-semibold">Time:</span> <span>1 - 2 hours</span>
                    </div>
                    <div>
                        <span className="font-semibold">Attributes:</span> <span>Includes Automation</span>
                    </div>
                </div>
            </section>
)
    
}
export default BodyCard;