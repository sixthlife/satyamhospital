import Image from "next/image";
import React from "react";
import Container from "./Container";
import SectionLeft from "./SectionLeft";
import Slider from "../DoctorsSlider/Slider";

const DoctorsSlider = () => {
  return (
    <div>
      <div className="bg-doctorsBackground h-[500px]">
        <div className="grid-cols-5 hidden lg:grid">
          <div className="w-full border border-[#3979E5] flex flex-col items-center justify-center py-8 ">
            <Image width={184} height={184} alt="Icon" src="/bajaj_logo.svg" />
          </div>
          <div className="w-full border border-[#3979E5] flex flex-col items-center justify-center py-8">
            <Image width={94} height={94} alt="Icon" src="/chola_logo.svg" />
          </div>
          <div className="w-full border border-[#3979E5] flex flex-col items-center justify-center py-8">
            <Image width={94} height={94} alt="Icon" src="/cigna_logo.svg" />
          </div>
          <div className="w-full border border-[#3979E5] flex flex-col items-center justify-center py-8">
            <Image width={94} height={94} alt="Icon" src="/fhpl_logo.svg" />
          </div>
          <div className="w-full border border-[#3979E5] flex flex-col items-center justify-center py-8">
            <Image
              width={94}
              height={94}
              alt="Icon"
              src="/healthindia_logo.svg"
            />
          </div>
        </div>
        <div className="py-8 lg:py-4 ">
          <Container>
            <div className="text-sm my-1 font-bold text-white">
              <span className="w-[3px] h-3 bg-white rounded-md inline-block mr-1"></span>
              Dedicated team
            </div>
            <div className="text-white w-full md:w-2/3 text-2xl md:text-2xl  text-center md:text-left lg:text-3xl font-bold leading-relaxed my-2">
              Our Best Doctors
            </div>
            <Slider />
          </Container>
        </div>
      </div>
      <div className="h-[50px] lg:h-[200px]" />
    </div>
  );
};

export default DoctorsSlider;
