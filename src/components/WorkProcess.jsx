import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaClipboardList, FaPalette, FaCode, FaBug, FaTools } from "react-icons/fa";

const WorkProcess = () => {
  const processes = [
    { title: "Discovery Workshop", icon: <FaSearch size={40} />, description: "Webpulse employs a unique city-wise SEO technique to generate targeted leads." },
    { title: "Development", icon: <FaCode size={40} />, description: "Brand Empower recognises outstanding companies for quality." },
       
    { title: "Testing", icon: <FaBug size={40} />, description: "Telecast is done on National TV Channels such as Zee Business." },  
    { title: "UX/UI Design", icon: <FaPalette size={40} />, description: "We specialize in building visually stunning websites to engage your online audience." },

    { title: "Planning & Documentation", icon: <FaClipboardList size={40} />, description: "We utilize time-tested practices such as SEO, PPC, and Meta Ads." }, 
    { title: "Maintenance", icon: <FaTools size={40} />, description: "Media coverage is done to spread the news on leading news websites." },
  ];

  return (
    <section className="text-white relative overflow-hidden ">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-12 ">Maximizing software engineering output with our  Processes.</h2>
        <div className="relative flex flex-wrap justify-center items-center">
          {/* Infinity Symbol Path */}
          <motion.svg
            className="absolute hidden md:flex w-full h-full top-0 left-0 z-0"
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M20,0 C20,10 60,10 60,50 C60,90 100,90 100,50 C100,10 140,10 140,50 C140,90 180,90 180,90"
              stroke="#3B82F6"
              strokeWidth="1"
              fill="transparent"
              strokeDasharray="5,5"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -20 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
                
              }}
            />
          </motion.svg>

          {/* Process Cards */}
          <div className="relative flex flex-wrap justify-center items-center w-full mx-auto  gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                className={`bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg text-center flex flex-col items-center transition duration-500 relative z-10 min-w-[250px] w-64 mx-4 my-8`}
                style={{ 
                  transform: `translateX(${index * 80}px) translateY(${index % 2 === 0 ? "20px" : "-20px"})`
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <div className=" mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};  

export default WorkProcess;





// import React from "react";
// import { motion } from "framer-motion";
// import { FaSearch, FaClipboardList, FaPalette, FaCode, FaBug, FaTools } from "react-icons/fa";

// const WorkProcess = () => {
//   const processes = [
//     { title: "Discovery Workshop", icon: <FaSearch size={30} />, description: "Webpulse employs a unique city-wise SEO technique to generate targeted leads." },
//     { title: "Planning & Documentation", icon: <FaClipboardList size={30} />, description: "We utilize time-tested practices such as SEO, PPC, and Meta Ads." },
//     { title: "UX/UI Design", icon: <FaPalette size={30} />, description: "We specialize in building visually stunning websites to engage your online audience." },
//     { title: "Development", icon: <FaCode size={30} />, description: "Brand Empower recognises outstanding companies for quality." },
//     { title: "Testing", icon: <FaBug size={30} />, description: "Telecast is done on National TV Channels such as Zee Business." },
//     { title: "Maintenance", icon: <FaTools size={30} />, description: "Media coverage is done to spread the news on leading news websites." },
//   ];

//   return (
//     <section className="text-white relative overflow-hidden py-12">
//       <div className="container mx-auto px-6 relative">
//         <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">We Build Brands</h2>
//         <div className="relative flex flex-wrap justify-center items-center">
//           {/* Infinity Symbol Path */}
//           <motion.svg
//             className="absolute w-full h-full top-0 left-0 z-0"
//             viewBox="0 0 1000 500"
//             preserveAspectRatio="none"
//           >
//             <motion.path
//               d="M50,250 C250,50 750,50 950,250 C750,450 250,450 50,250"
//               stroke="#3B82F6"
//               strokeWidth="4"
//               fill="transparent"
//               strokeDasharray="10,10"
//               strokeLinecap="round"
//               initial={{ strokeDashoffset: 0 }}
//               animate={{ strokeDashoffset: -20 }}
//               transition={{
//                 duration: 1,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             />
//           </motion.svg>

//           {/* Process Cards */}
//           {processes.map((process, index) => (
//             <motion.div
//               key={index}
//               className={`bg-gray-800 p-4 rounded-lg shadow-lg text-center flex flex-col items-center transform transition duration-500 relative z-10 w-40 md:w-48 mx-4 ${
//                 index % 2 === 0 ? "-translate-y-16" : "translate-y-16"
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: index * 0.3 }}
//             >
//               <div className="text-yellow-400 mb-2">{process.icon}</div>
//               <h3 className="text-lg font-semibold mb-1">{process.title}</h3>
//               <p className="text-gray-400 text-xs text-center">{process.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkProcess;
