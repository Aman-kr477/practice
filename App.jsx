
import './App.css';
import Heading from './Sections/Heading';
import Description from './Sections/Description';
import Body from './Sections/Body';
import Catalogue from './Sections/Catalogue';
import SkillSet from './Sections/SkillSet';
const App=()=>{
  return (
    <div className='flex gap-4  '>
    {/* first we make two part -->
    one in left side 
    other is in -->right 
    */}
    <div className='flex-1 space-y-6 px-4'>
      <Heading />
      <Description />
      <Body />
    </div>
    <div className='flex-1 pt-6 '>
     <Catalogue />
    </div>
    <div className=' pt-6 ml-9'> 
      <SkillSet />
    </div>
    </div>
  )
}

export default App;
