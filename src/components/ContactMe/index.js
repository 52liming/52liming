import React, { useState } from "react";

const Base64Decoder = ({ text }) => {
  const [decodedText, setDecodedText] = useState("");

  const handleClick = () => {
    const decoded = atob(text);
    setDecodedText(decoded);
  };

  return (
    <span>
      <span onClick={handleClick}>{decodedText || text}</span>
    </span>
  );
};

const ContactMe = () => {
  return (
    <p>
      <span>联系我(点击查看)</span>
      <div><b>Wechat：</b><Base64Decoder text={"Z290bzEyMzIx"} /> </div>
      <div><b>Email：</b><Base64Decoder text={"YWRtaW5ANTJsaW1pbmcuY29t"} /> </div>
    </p>
  );
};

export default ContactMe;
