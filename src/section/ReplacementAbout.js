// import React, { useState } from "react";

// function Testimonial({ tabsContent }) {
//     const [currentTabIndex, setCurrentTabIndex] = useState(0);

//     function handleOnClick(getIndex) {
//         setCurrentTabIndex(getIndex);
//     }

//     const getSlideDirection = (index) => {
//         if (index === currentTabIndex) {
//             return "translate-x-0";
//         }
//         return index > currentTabIndex
//             ? "translate-x-full"
//             : "-translate-x-full";
//     };

//     return (
//         <div className="Content_Holder">
//             <div
//                 className="py-20 pl-16 w-full bg-[#202F3F] flex min-h-[45vh] justify-between items-center relative"
//                 style={{
//                     clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
//                     WebkitClipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
//                 }}
//             >
//                 {/* Left side: Image */}
//                 <div className="w-1/2 flex justify-center overflow-visible relative">
//                     <img
//                         src={tabsContent[currentTabIndex].image}
//                         alt={tabsContent[currentTabIndex].label}
//                         className="transition-all duration-700 h-[420px] relative -top-20"
//                     />
//                 </div>
//                 {/* Right side: Text content */}
//                 <div className="w-1/2 flex flex-col justify-between">
//                     <div className="relative overflow-hidden p-5 text-white text-lg h-40">
//                         {tabsContent.map((tab, index) => (
//                             <div
//                                 key={index}
//                                 className={`absolute top-0 left-0 w-full transition-transform ease-out duration-700 transform ${
//                                     index === currentTabIndex
//                                         ? "translate-x-0"
//                                         : getSlideDirection(index)
//                                 } ${
//                                     index !== currentTabIndex
//                                         ? "opacity-0"
//                                         : "opacity-100"
//                                 }`}
//                             >
//                                 {tab.content}
//                             </div>
//                         ))}
//                     </div>

//                     <div className="flex mb-3 w-full">
//                         {tabsContent.map((items, index) => (
//                             <div
//                                 className="inline-flex mb-2 cursor-pointer"
//                                 onClick={() => handleOnClick(index)}
//                                 key={items.label}
//                             >
//                                 <div
//                                     className={`w-full border-t text-white px-12 border-white h-6 ${
//                                         currentTabIndex === index
//                                             ? "border-t-[3px] border-white"
//                                             : ""
//                                     }`}
//                                 >
//                                     {items.label}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Testimonial;
