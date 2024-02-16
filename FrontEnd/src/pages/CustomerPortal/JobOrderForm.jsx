import { useEffect } from "react";

const JobOrder = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="w-full h-[1024px] relative bg-white overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-center text-base text-black font-inter"
      data-animate-on-scroll
    >
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(0deg,_#ccc,_rgba(204,_204,_204,_0))] w-[219px] h-[1024px]" />
      <button className="cursor-pointer [border:none] p-0 bg-darkgray absolute top-[132px] left-[1130px] rounded-[20px] w-[273px] h-12">
        <div className="absolute top-[11px] left-[31px] text-lg font-extrabold font-inter text-black text-center inline-block w-[212px] h-[25px]">{`New Job Order `}</div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[349px] left-[29px] w-[167px] h-[61px]">
        <div className="absolute top-[0px] left-[3px] rounded-31xl bg-darkgray w-[162px] h-[61px]" />
        <div className="absolute top-[19px] left-[0px] text-base font-extrabold font-inter text-black text-center inline-block w-[167px] h-[23px]">
          Job Order
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[436px] left-[27px] w-[167px] h-[61px]">
        <div className="absolute top-[0px] left-[3px] rounded-31xl bg-white box-border w-[162px] h-[61px] border-[1px] border-solid border-darkgray" />
        <div className="absolute top-[19px] left-[0px] text-base font-extrabold font-inter text-black text-center inline-block w-[167px] h-[23px]">
          Payment History
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[523px] left-[29px] w-[167px] h-[61px]">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-white box-border w-[162px] h-[61px] border-[1px] border-solid border-darkgray" />
        <div className="absolute top-[19px] left-[0px] text-base font-extrabold font-inter text-black text-center inline-block w-[167px] h-[23px]">
          Settings
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[895px] left-[32px] w-[167px] h-[61px]">
        <div className="absolute top-[0px] left-[0px] rounded-31xl bg-white box-border w-[162px] h-[61px] border-[1px] border-solid border-darkgray" />
        <div className="absolute top-[19px] left-[0px] text-base font-extrabold font-inter text-black text-center inline-block w-[167px] h-[23px]">
          Logout
        </div>
      </button>
      <div className="absolute top-[12px] left-[219px] text-[30px] font-extrabold inline-block w-[269px] h-9">
        JOB ORDERS
      </div>
      <div className="absolute top-[210px] left-[245px] bg-gainsboro w-[1158px] h-[33px]" />
      <div className="absolute top-[217px] left-[261px] font-extrabold inline-block w-[50px] h-[29px]">
        JO#
      </div>
      <div className="absolute top-[218px] left-[408px] font-extrabold inline-block w-[97px] h-[29px]">
        JO Status
      </div>
      <div className="absolute top-[216px] left-[585px] font-extrabold inline-block w-[131px] h-[29px]">
        Payment Status
      </div>
      <div className="absolute top-[216px] left-[787px] font-extrabold inline-block w-[131px] h-[29px]">
        Due Date
      </div>
      <div className="absolute top-[217px] left-[946px] font-extrabold inline-block w-[131px] h-[29px]">
        SO#
      </div>
      <div className="absolute top-[218px] left-[1119px] font-extrabold inline-block w-[131px] h-[29px]">
        Job Location
      </div>
      <div className="absolute top-[218px] left-[1289px] font-extrabold inline-block w-[131px] h-[29px]">
        Details
      </div>
      <div className="absolute top-[263px] left-[251px] text-left inline-block w-[181px] h-7">
        JO-00000002
      </div>
      <div className="absolute top-[262px] left-[404px] whitespace-pre-wrap text-left inline-block w-[181px] h-7">
        {" "}
        Started
      </div>
      <div className="absolute top-[260px] left-[609px] whitespace-pre-wrap text-left inline-block w-[84px] h-7">
        {" "}
        pending
      </div>
      <div className="absolute top-[264px] left-[812px] text-left inline-block w-[117px] h-7">
        09/02/2024
      </div>
      <div className="absolute top-[261px] left-[1161px] text-left inline-block w-[75px] h-7">
        Davao
      </div>
      <div className="absolute top-[261px] left-[966px] text-left inline-block w-[115px] h-7">
        SO-00000026
      </div>
      <div className="absolute top-[76px] left-[0px] w-[219px] h-[203px] text-lg">
        <img
          className="absolute top-[0px] left-[29px] rounded-[100px] w-[150px] h-[150px]"
          alt=""
          src="/rectangle-30.svg"
        />
        <div className="absolute top-[163px] left-[0px] font-semibold inline-block w-[219px] h-10">
          Mark Angelo Baes
        </div>
      </div>
      <img
        className="absolute h-[2.29%] w-[1.67%] top-[25.59%] right-[5.21%] bottom-[72.13%] left-[93.13%] max-w-full overflow-hidden max-h-full [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        alt=""
        src="/vector.svg"
        data-animate-on-scroll
      />
      <div className="absolute top-[151px] left-[245px] text-lg font-extrabold text-left inline-block w-[111px] h-[29px]">
        Sort By:
      </div>
      <div className="absolute top-[151px] left-[330px] text-lg font-extrabold text-left inline-block w-[111px] h-[29px]">
        JO#
      </div>
      <img
        className="absolute top-[3px] left-[0px] w-[219px] h-[60px] object-cover"
        alt=""
        src="/sticker-3-1@2x.png"
      />
    </div>
  );
};

export default JobOrder;
