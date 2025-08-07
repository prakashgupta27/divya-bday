import React, { useEffect, useState } from "react";
import BdayImage from "../../public/image/image1.png";

const hearts = Array.from({ length: 20 });

const BirthdayImage = () => {
  const [showHearts, setShowHearts] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHearts(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-[#caf0f8] overflow-hidden">
      {/* Heart Rain */}
      {showHearts &&
        hearts.map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-500 text-2xl animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 2}s`,
              animationDelay: `${Math.random()}s`,
              top: "-2rem",
            }}
          >
            ❤️
          </span>
        ))}

      {/* Birthday Image */}
      <div className="p-4 rounded-2xl bg-white/40 backdrop-blur-md shadow-lg max-w-md">
        <img
          src={BdayImage}
          alt="Birthday"
          className="rounded-xl w-full object-cover"
        />
      </div>
    </div>
  );
};

export default BirthdayImage;
