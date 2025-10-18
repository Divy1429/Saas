import React from "react";
import alex from "../../assets/alex.png";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    name: "Alex Rivera",
    handle: "@jamietechguru00",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    name: "Casey Jordan",
    handle: "@caseyj",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    name: "Jordan Patels",
    handle: "@jpatelsdesign",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    name: "Josh Smith",
    handle: "@jjsmith",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    name: "Taylor Kim",
    handle: "@taylorkimm",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    name: "Sam Dawson",
    handle: "@dawsontechtips",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    name: "Morgan Lee",
    handle: "@morganleewhiz",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    name: "Riley Smith",
    handle: "@rileysmith1",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    name: "Casey Harper",
    handle: "@casey09",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
];

export default function TestimonialsColumns() {
  // ✅ Helper: distribute column-wise
  const distributeColumnWise = (data, numCols) => {
    const cols = Array.from({ length: numCols }, () => []);
    data.forEach((item, i) => {
      cols[i % numCols].push(item); // fills columns vertically
    });
    return cols;
  };

  // ✅ Split into 3 columns
  const [col1, col2, col3] = distributeColumnWise(testimonials, 3);

  return ( 
     <div className="max-w-[1200px] w-full mb-[91px] mx-auto h-full flex justify-center bg-white">
      {/* Mobile: Single column - visible only on small screens */}
<div className="relative flex sm:hidden flex-col items-center gap-[20px] w-full mt-[30px]">
   {/* Stronger “white glow” overlay */}
  <div className="absolute h-[625px] inset-1 bg-gradient-to-b from-white/100 to-white/0  pointer-events-none z-30 "></div>
 {/* Stronger “white glow” overlay */}
  <div className="absolute top-[370px]  h-[555px] inset-1 bg-gradient-to-t from-white/100 to-white/0  pointer-events-none z-30 "></div>

  {/* Header */}
        <div className="text-center pt-[112px]">
          <div className="inline-block h-[27px] border-[1px] border-[#2222221A] mb-[20px] px-[13px] py-[2px] rounded-[10px]">
            <p className="text-[13px] font-normal font-['Inter']">
              Testimonials
            </p>
          </div>
          <h1 className="text-[32px] max-w-[163px] font-['DM_Sans']  leading-[31px] tracking-[-0.06em] font-bold  mb-[7px]">
            What our users say
          </h1>
        </div>
  <div className="w-full max-w-[340px] flex flex-col shadow-lg items-start p-[30px] gap-[20px] bg-white border border-[#F1F1F1] rounded-[20px]">
    <p className="text-[#000000] text-[15px] font-['Inter'] leading-[21px]">
      I was amazed at how quickly we were able to integrate this app into our workflow.
    </p>
    <div className="flex items-start gap-2">
      <img src="https://i.pravatar.cc/150?img=2" alt="Casey Jordan" className="w-[42px] h-[42px] rounded-full" />
      <div>
        <h4 className="text-[16px] font-['Inter'] font-medium">Casey Jordan</h4>
        <p className="text-[16px] font-['Inter']">@caseyj</p>
      </div>
    </div>
  </div>

  <div className="w-full max-w-[340px] flex flex-col shadow-lg items-start p-[30px] gap-[20px] bg-white border border-[#F1F1F1] rounded-[20px]">
    <p className="text-[#000000] text-[15px] font-['Inter'] leading-[21px]">
      Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.
    </p>
    <div className="flex items-start gap-2">
      <img src="https://i.pravatar.cc/150?img=5" alt="Taylor Kim" className="w-[42px] h-[42px] rounded-full" />
      <div>
        <h4 className="text-[16px] font-['Inter'] font-medium">Taylor Kim</h4>
        <p className="text-[16px] font-['Inter']">@taylorkimm</p>
      </div>
    </div>
  </div>

  <div className="w-full max-w-[300px] flex flex-col shadow-lg items-start p-[30px] gap-[20px] bg-white border border-[#F1F1F1] rounded-[20px]">
    <p className="text-[#000000] text-[15px] font-['Inter'] leading-[21px]">
      The customizability and integration capabilities of this app are top-notch.
    </p>
    <div className="flex items-start gap-2">
      <img src="https://i.pravatar.cc/150?img=8" alt="Riley Smith" className="w-[42px] h-[42px] rounded-full" />
      <div>
        <h4 className="text-[16px] font-['Inter'] font-medium">Riley Smith</h4>
        <p className="text-[16px] font-['Inter']">@rileysmith1</p>
      </div>
    </div>
    
  </div>
 
</div>
      <div className=" w-full max-sm:hidden ">
        {/* Header */}
        <div className="text-center pt-[112px]">
          <div className="inline-block h-[27px] border-[1px] border-[#2222221A] mb-[20px] px-[13px] py-[2px] rounded-[10px]">
            <p className="text-[13px] font-normal font-['Inter']">
              Testimonials
            </p>
          </div>
          <h1 className="text-[54px] font-['DM_Sans'] leading-[60px] tracking-[-0.06em] font-bold  mb-[7px]">
            What our users say
          </h1>
        </div>
    <div className="relative  flex mt-[41px]   items-start justify-center gap-5">
      {/* Blur overlay */}
      <div className="absolute h-[225px] inset-0 bg-gradient-to-b from-white/100 to-white/20  pointer-events-none z-10"></div>

      {/* Column 1 */}
      <div className="flex flex-col items-start gap-[24px]">
        {col1.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} isFirst={index === 0} />
        ))}
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-start gap-[24px] ">
        {col2.map((testimonial, index) => (
           <TestimonialCard key={index} {...testimonial} isFirst={index === 0} />
        ))}
      </div>

      {/* Column 3 */}
      <div className="flex flex-col items-start  ">
        {col3.map((testimonial, index) => (
           <TestimonialCard key={index} {...testimonial} isFirst={index === 0} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

function TestimonialCard({ text, name, handle, avatar, isFirst }) {
  return (
    <div className={`w-[325px] max-h-full  flex flex-col shadow-lg hover:shadow-xl items-start p-[40px] gap-[20px] box-border bg-white border border-[#F1F1F1]  rounded-[20px]  transition-shadow duration-300 
      ${isFirst ? " " : ""}`}
    >
        <div className={`relative flex flex-col gap-[20px] inset-0 ${isFirst ? " " : ""}`} >
      <p className="text-[#000000] text-[16px] font-['Inter'] leading-[23px]">
        {text}
      </p>

      <div className="flex items-start h-[42px] gap-2">
        <img
          src={avatar}
          alt={name}
          className="w-[42px] h-[42px] object-cover rounded-full"
        />
        <div className="">
          <h4 className="text-[16px] font-['Inter'] h-[23px] font-medium ">
            {name}
          </h4>
          <p className="text-[16px] font-['Inter'] h-[19px] ">{handle}</p>
        </div>
      </div>
      </div>
    </div>
  );
}
