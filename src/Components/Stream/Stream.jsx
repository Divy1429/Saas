import React from "react";
import aj from '../../assets/aj.png';
import cube from '../../assets/cube.png';

export default function StreamlinedManagement() {
  const features = [
    {
      image: aj,
      title: "Integration ecosystem",
      description: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
    },
    {
      image: cube,
      title: "Goal setting and tracking",
      description: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    },
  ];
return (
    <div className="w-full  flex items-center  justify-center">
      <div className="max-w-[1200px] flex flex-col justify-center items-center w-full overflow-hidden">
        {/* Header */}
        <div className="text-center pt-[92px] ">
          <div className="inline-block h-[27px] border-[1px] border-[#2222221A] mb-[20px] px-[13px] py-[2px] rounded-[10px]">
            <p className="text-[13px] font-normal font-['Inter']">
              Everything you need
            </p>
          </div>
          <h1 className="md:text-[54px] text-[32px]    font-['DM_Sans'] md:leading-[60px] leading-[32px] tracking-[0.01em]  md:tracking-[-0.06em] md:font-bold font-semibold  mb-5">
            Streamlined for easy
            <br />
            management
          </h1>
          <p className="text-[22px]  font-['Inter'] tracking-[-0.036em] leading-[31px] max-w-[358px] text-wrap md:max-w-[535px] mx-auto mb-15">
            Enjoy customizable lists, team work tools, and smart
            tracking all in one place. Set tasks, get reminders, and
            
            see your progress simply and quickly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-[992px] min-h-full  w-full  flex justify-center items-center  pb-[106px]">
          <div className="grid grid-cols-1 min-h-[538px]  lg:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px]  h-[538px] w-[486px] max-sm:max-w-[408px] flex flex-col items-center justify-center shadow-sm"
              >
                <div className="flex justify-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-[329px] h-[329px] object-contain"
                  />
                </div>
                <h3 className="text-[26px] font-bold font-['DM_Sans'] leading-[60px] text-center">
                  {feature.title}
                </h3>
                <p className="text-[16px] max-w-[345px] leading-[23px] font-['Inter'] text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}