import React from "react";
import { Button } from "../../components/Button";
import { Shape } from "../../components/Shape";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">Job Order Form</div>
          <div className="overlap">
            <div className="overlap-2">
              <div className="text-wrapper-2">Site of Service:</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <img
                    className="expand-arrow"
                    alt="Expand arrow"
                    src="https://cdn.animaapp.com/projects/65ce1e3c74aacf50d2f5fa4d/releases/65cf9aafb6ea4ed7b4f29dcd/img/expand-arrow@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="overlap-3">
              <div className="overlap-wrapper">
                <div className="overlap-4">
                  <div className="rectangle-2" />
                  <div className="text-wrapper-3">Add Item</div>
                  <img
                    className="plus-math"
                    alt="Plus math"
                    src="https://cdn.animaapp.com/projects/65ce1e3c74aacf50d2f5fa4d/releases/65cf9aafb6ea4ed7b4f29dcd/img/plus-math@2x.png"
                  />
                </div>
              </div>
              <div className="overlap-5">
                <div className="text-wrapper-4">Message (optional):</div>
                <div className="rectangle-3" />
              </div>
            </div>
            <div className="rectangle-4" />
            <Button className="button-instance" divClassName="design-component-instance-node" text="Submit" />
            <Button className="button-2" divClassName="button-3" text="Cancel" />
          </div>
        </div>
        <div className="frame-2">
          <Shape
            className="shape-instance"
            divWrapperEllipseClassName="shape-5"
            ellipse4EllipseClassName="shape-6"
            ellipseEllipseClassName="shape-3"
            ellipseWrapperEllipseClassName="shape-4"
            overlapGroupClassName="shape-2"
          />
          <img
            className="sticker"
            alt="Sticker"
            src="https://cdn.animaapp.com/projects/65ce1e3c74aacf50d2f5fa4d/releases/65ce1e781125a51a39199053/img/sticker-3-1.png"
          />
        </div>
      </div>
    </div>
  );
};
