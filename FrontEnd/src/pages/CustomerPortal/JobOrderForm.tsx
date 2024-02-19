import React, { FunctionComponent, useEffect } from "react";

const JobOrderForm: FunctionComponent = () => {
    useEffect(() => {
        const scrollAnimElements = document.querySelectorAll(
            "[data-animate-on-scroll]"
        );
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        const targetElement = entry.target as HTMLElement;
                        targetElement.classList.add("animate");
                        observer.unobserve(targetElement);
                    }
                }
            },
            {
                threshold: 0.15,
            }
        );

        scrollAnimElements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            scrollAnimElements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div 
        className="w-full h-[1080px] relative bg-silver-100 overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0] text-left text-13xl text-black font-poppins" data-animate-on-scroll>
            <div 
            className="absolute top-[12px] left-[60px] w-[1440px] h-[1014px] overflow-hidden">
                <b 
                className="absolute h-[7.48%] w-[94.74%] top-[0%] left-[1.18%] text-[96px] inline-block [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff]">
                    Job Order Form
                </b>
                <div 
                className="absolute h-[85.4%] w-full top-[14.6%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
                <div 
                className="absolute h-[5.6%] w-[40.6%] top-[20.12%] left-[3.19%] font-semibold inline-block [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff]">
                    Site of Service:
                </div>
                <button 
                className="cursor-pointer [border:none] p-0 bg-white absolute h-[5.92%] w-[26.32%] top-[19.82%] right-[51.74%] bottom-[74.26%] left-[21.94%]">
                    <img 
                    className="absolute top-[3px] left-[315px] w-[59px] h-[59px] object-cover" alt="" src="/expand-arrow@2x.png" />
                </button>
                <button 
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[304px] left-[58px] w-[338px] h-[67px]">
                    <div 
                    className="absolute h-[89.55%] w-[84.91%] top-[0%] right-[15.09%] bottom-[10.45%] left-[0%] bg-white" />
                    <div 
                    className="absolute h-[85.07%] w-[71.69%] top-[14.93%] left-[28.31%] text-13xl font-semibold font-poppins text-black text-left inline-block [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff]">
                        Add Item
                    </div>
                    <img 
                    className="absolute top-[0px] left-[15px] w-[59px] h-[62px] object-cover" alt="" src="/plus-math@2x.png" />
                </button>
                <div 
                className="absolute h-[5.62%] w-[46.97%] top-[57.3%] left-[4.03%] font-semibold inline-block [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff]">
                    Message (optional):
                </div>
                <div 
                className="absolute top-[645px] left-[58px] rounded-3xs bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] w-[1287px] h-[245px]" />
                <input 
                className="[border:none] [outline:none] bg-white absolute top-[297px] left-[425px] rounded-3xs shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] w-[920px] h-[312px]" type="text" />
                <button 
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[929px] left-[742px] w-[316px] h-14">
                    <div 
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
                    <div 
                    className="absolute top-[4.82%] left-[30.7%] text-13xl font-semibold font-poppins text-white text-center">
                        Submit
                    </div>
                </button>
                <button 
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[932px] left-[327px] w-[316px] h-14">
                    <div 
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-silver-200" />
                    <div 
                    className="absolute top-[4.82%] left-[31.01%] text-13xl font-semibold font-poppins text-black text-center">
                        Cancel
                    </div>
                </button>
            </div>
            <div 
            className="absolute top-[0px] left-[1537px] w-[359px] h-[1026px] overflow-hidden">
                <img 
                className="absolute h-[84.41%] w-[86.35%] top-[15.59%] right-[10.03%] bottom-[0%] left-[3.62%] max-w-full overflow-hidden max-h-full" alt="" src="/shape.svg" />
                <img 
                className="absolute top-[0px] left-[0px] w-[359px] h-[147px] object-cover" alt="" src="/sticker-3-2@2x.png" />
            </div>
        </div>
    );
};

export default JobOrderForm;
