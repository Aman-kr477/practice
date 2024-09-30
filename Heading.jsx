import { Right } from "@bigbinary/neeto-icons";
import { Button } from "@bigbinary/neetoui";
import { useState } from "react";

const Heading = () => {
  const [activeSection, setActiveSection] = useState("job");

  return (
    <section className="mt-6 flex gap-6">
      {/* Job Description */}
      <div
        onClick={() => setActiveSection("job")}
        className={`flex rounded-full border-2 p-2 gap-2 cursor-pointer ${
          activeSection === "job" ? "bg-gray-500 text-black font-bold" : "border-coral-gray"
        }`}
      >
        <p className="text-red">1.</p>
        <p>Job Description</p>
      </div>

      <Button icon={Right} style="text" />

      {/* Assessment */}
      <div
        onClick={() => setActiveSection("assessment")}
        className={`flex rounded-full border-2 p-2 gap-2 cursor-pointer ${
          activeSection === "assessment"
            ? "bg-gray-500 text-black font-bold"
            : "border-coral-gray"
        }`}
      >
        <p>2.</p>
        <p>Assessment</p>
      </div>
    </section>
  );
};

export default Heading;
