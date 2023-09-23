import React, { useState } from "react";

const Base64Decoder: React.FC<{text: string}> = ({ text }) => {
  const [decodedText, setDecodedText] = useState<string>("");

  const handleClick = (): void => {
    const decoded: string = window.atob(text);
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
    <div>
      <span>联系我(点击查看)</span>
      <div><b>Wechat：</b><Base64Decoder text={"Z290bzEyMzIx"} /> </div>
      <div><b>Email：</b><Base64Decoder text={"YWRtaW5ANTJsaW1pbmcuY29t"} /> </div>
    </div>
  );
};

export default ContactMe;
