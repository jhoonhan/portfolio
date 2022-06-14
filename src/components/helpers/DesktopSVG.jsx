import React from "react";

const DesktopSVG = ({ data, type, customClass }) => {
  const st0 = {
    fill: "#CCCCCC",
  };
  const st1 = {
    fill: "#B3B3B3",
  };
  const st2 = {
    fill: "url(#SVGID_1_)",
  };

  const renderVisual = () => {
    if (type === "image") {
      return <img src={data} alt="overview" />;
    }
    if (type === "video") {
      return (
        <video
          src={data}
          autoPlay={true}
          // onCanPlay={() => console.log(`aaang canplay!`)}
          playsInline={true}
          muted
          loop
        />
      );
    }
  };
  return (
    <div className={`slide-img--desktop ${customClass}`}>
      {/* <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1400 1200"
        style={{ enableBackground: "new 0 0 1400 1200" }}
        // xml:space="preserve"
      >
        <rect
          x="525.92"
          y="791.33"
          style={st0}
          width="348.27"
          height="408.67"
        />
        <g>
          <path
            style={st1}
            d="M868.17,1200H531.93c-3.32,0-6.01-2.69-6.01-6.01v-14.4h348.27v14.4C874.18,1197.31,871.49,1200,868.17,1200z"
          />
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="700.052"
            y1="1159.1688"
            x2="700.052"
            y2="1179.5844"
          >
            <stop offset="0.299" style={{ stopColor: "#cccccc" }} />
            <stop offset="0.4224" style={{ stopColor: "#c8c8c8" }} />
            <stop offset="0.5471" style={{ stopColor: "#bcbcbc" }} />
            <stop offset="0.6726" style={{ stopColor: "#a8a8a8" }} />
            <stop offset="0.7985" style={{ stopColor: "#8b8b8b" }} />
            <stop offset="0.9236" style={{ stopColor: "#676767" }} />
            <stop offset="1" style={{ stopColor: "#4d4d4d" }} />
          </linearGradient>
          <rect
            x="525.92"
            y="1159.17"
            style={st2}
            width="348.27"
            height="20.42"
          />
        </g>
        <g>
          <path
            d="M1375.67,20c2.39,0,4.33,1.94,4.33,4.33v751.33c0,2.39-1.94,4.33-4.33,4.33H24.33c-2.39,0-4.33-1.94-4.33-4.33V24.33
		c0-2.39,1.94-4.33,4.33-4.33H1375.67 M1375.67,0H24.33C10.89,0,0,10.89,0,24.33v751.33C0,789.11,10.89,800,24.33,800h1351.33
		c13.44,0,24.33-10.89,24.33-24.33V24.33C1400,10.89,1389.11,0,1375.67,0L1375.67,0z"
          />
        </g>
      </svg> */}
      <div className="masking">{renderVisual()}</div>
      <svg
        id="computer"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 350 350"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="175"
            y1="312.22"
            x2="175"
            y2="331.11"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.3" stopColor="#ccc" />
            <stop offset="0.42" stopColor="#c8c8c8" />
            <stop offset="0.55" stopColor="#bcbcbc" />
            <stop offset="0.67" stopColor="#a8a8a8" />
            <stop offset="0.8" stopColor="#8b8b8b" />
            <stop offset="0.92" stopColor="#676767" />
            <stop offset="1" stopColor="#4d4d4d" />
          </linearGradient>
        </defs>
        <rect width="350" height="340.55" style={{ fill: "#ccc" }} />
        <path
          d="M0,331.11H350a0,0,0,0,1,0,0V344a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V331.11A0,0,0,0,1,0,331.11Z"
          style={{ fill: "#b3b3b3" }}
        />
        <rect
          y="312.22"
          width="350"
          height="18.89"
          style={{ fill: "url(#linear-gradient)" }}
        />
      </svg>
    </div>
  );
};

export default DesktopSVG;
