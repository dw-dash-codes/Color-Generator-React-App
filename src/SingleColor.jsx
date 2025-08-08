import React, { use, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import toast from "react-hot-toast";

const SingleColor = ({ rgb, hex, index }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    toast.success("Color Copied Successfully");
    setCopy(true);
    navigator.clipboard.writeText(`#${hex}`);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };
  return (
    <>
      <div className="col-lg-3 col-md-4">
        <div
          style={{ background: `rgb(${rgb})` }}
          className="card border-0 shadow p-5 my-3 position-relative"
        >
          {copy ? (
            <>
              <FaCheck
                size={25}
                cursor={"pointer"}
                className="position-absolute"
                style={{ top: "10px", left: "10px" }}
              />
            </>
          ) : (
            <>
              <MdOutlineContentCopy
                onClick={handleCopy}
                size={25}
                cursor={"pointer"}
                className="position-absolute"
                style={{ top: "10px", left: "10px" }}
              />
            </>
          )}
          <h5 className={`${index >= 10 ? "text-white" : ""}`}># {hex}</h5>
        </div>
      </div>
    </>
  );
};

export default SingleColor;
