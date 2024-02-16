import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function JobOrderForm(props) {
  return (
    <div className={`job-order-form flex flex-col bg-[rgb(193,193,193)] overflow-hidden ${props.className || ''}`}>
      <div className="flex flex-col w-[1836px] h-[1026px] relative min-h-[1026px] mr-6 mb-[54px] ml-[60px]">
        <h1 className="font-bold text-[96px] leading-normal font-Poppins text-black w-[761px] h-36 absolute left-[17px] right-[1058px] top-3 bottom-[870px]">
          Job Order Form
        </h1>
        <div className="bg-[rgb(230,230,230)] w-[1440px] h-[866px] absolute left-0 right-[396px] top-40 bottom-0" />
        <h1 className="font-semibold text-[32px] leading-normal font-Poppins text-black w-[235px] h-12 absolute left-[46px] right-[1555px] top-[216px] bottom-[762px]">
          Site of Service:
        </h1>
        <img
          className="w-[379px] h-[62px] absolute left-[316px] right-[1141px] top-[213px] bottom-[751px]"
          src={'/assets/abstract_black_checkmark.png'}
          alt="alt text"
        />
        <div className="bg-white w-[270px] h-[60px] absolute left-[58px] right-[1508px] top-[316px] bottom-[650px]" />
        <h1 className="font-semibold text-[32px] leading-normal font-Poppins text-black w-[149px] h-12 absolute left-[148px] right-[1539px] top-[326px] bottom-[652px]">
          Add Item
        </h1>
        <img
          className="w-[59px] h-[62px] absolute left-[73px] right-[1704px] top-[316px] bottom-[648px]"
          src={'/assets/bef05bc34a2562ee6260af0d288ffc72.png'}
          alt="alt text"
        />
        <h1 className="font-semibold text-[32px] leading-normal font-Poppins text-black w-[330px] h-12 absolute left-[58px] right-[1448px] top-[593px] bottom-[385px]">
          Message (optional):
        </h1>
        <div className="bg-white rounded-[10px] w-[1287px] h-[245px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.247)] absolute left-[58px] right-[491px] top-[657px] bottom-[124px]" />
        <div className="bg-white rounded-[10px] w-[920px] h-[312px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.247)] absolute left-[425px] right-[491px] top-[309px] bottom-[405px]" />
        <div className="bg-black w-[316px] h-16 absolute left-[742px] right-[778px] top-[941px] bottom-[29px]" />
        <h1 className="flex justify-center font-semibold text-[32px] leading-normal font-Poppins text-white text-center w-[118px] h-12 absolute left-[839px] right-[879px] top-[944px] bottom-[34px]">
          Submit
        </h1>
        <div className="bg-[rgb(191,191,191)] w-[316px] h-16 absolute left-[327px] right-[1193px] top-[944px] bottom-[26px]" />
        <h1 className="flex justify-center font-semibold text-[32px] leading-normal font-Poppins text-black text-center w-[116px] h-12 absolute left-[425px] bottom-[31px]">
          Cancel
        </h1>
        <img
          className="w-[359px] h-[1026px] absolute right-0 top-0"
          src={'/assets/stylized_red_abstract_shapes.png'}
          alt="alt text"
        />
      </div>
    </div>
  );
}

JobOrderForm.propTypes = {
  className: PropTypes.string
};

export default JobOrderForm;
