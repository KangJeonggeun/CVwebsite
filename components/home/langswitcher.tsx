import { useLanguage } from "../common/langcontext";
import React from "react";
// import { useLanguage } from  // Adjust the import path as necessary

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      style={{
        // position: "fixed",
        // top: "0px", // Or use 'bottom' for bottom-left position
        left: "5px",
        // padding: "1px",
        // backgroundColor: "rgba(255, 255, 255, 0.9)",
        // border: "1px solid #ddd",
        // borderRadius: "5px",
        // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 50,
      }}
    >
      <button
        className="link"
        onClick={() => setLanguage("en")}
        style={{
          // margin: "5px 0",
          // padding: "5px 10px",
          // backgroundColor: "#007bff",
          // color: "white",
          border: "none",
          // borderRadius: "3px",
          // cursor: "pointer",
        }}
      >
        <img
          src="amerika.png" // Replace with your image path
          alt="English"
          style={{ width: "40px", height: "35px" }}
        />
      </button>
      <button
        className="link"
        onClick={() => setLanguage("de")}
        style={{
          // margin: "5px 0",
          // padding: "5px 10px",
          // backgroundColor: "#007bff",
          // color: "white",
          border: "none",
          // borderRadius: "3px",
          // cursor: "pointer",
        }}
      >
        <img
          src="german.png" // Replace with your image path
          alt="English"
          style={{ width: "35px", height: "35px" }}
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
