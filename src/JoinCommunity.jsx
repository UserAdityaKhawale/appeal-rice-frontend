import React from "react";
import gymImage from "./src/assets/GymPhoto.png";
import './JoinCommunity.css';

const JoinCommunity = () => {
  return (
    <section className="flex flex-col bg-white overflow-x-hidden w-screen" style={{ minHeight: "auto" }}>

      {/* join part */}
      <div className="w-full text-left py-6 flex-shrink-0 animate-fade-in font-sans"
           style={{ fontSize: "37px", fontFamily: "Anek Tamil,sans-serif", padding: "3px" }}>
        <h1 className="m-0 font-black text-[90px] tracking-wider uppercase text-left mb-2"
            style={{ WebkitTextStroke: "4px black", margin: "4px" }}>
          Join the <span style={{ color: "#808DFD", WebkitTextStroke: "4px #808DFD" }}>Community</span>
        </h1>
      </div>

      {/* main div */}
      <div className="flex flex-row flex-grow border border-black pl-12
                      lg:flex-row md:flex-col sm:flex-col md:pl-4 sm:pl-4 responsive-flex">

        {/* left side */}
                <div
            className="left-content bg-[#E5E8FF] text-black pl-16 py-12 flex flex-col animate-fade-in-slow font-sans text-[20px]"
            style={{
              fontFamily: "Anek Tamil,sans-serif",
              gap: "200px",
              display: "flex",
              flexDirection: "column",
              minWidth: "300px",
              flexShrink: 0,
              width: "35%", 
            }}
          >

          <div>
            <h2 className="text-4xl font-black tracking-[0.235px] leading-tight transition-transform duration-300 hover:scale-105
                           lg:text-[40px] md:text-3xl sm:text-2xl"
                style={{ fontWeight: 650, WebkitTextStroke: "1px black" ,paddingLeft:"12px",paddingTop: "40px", paddingBottom: "20px"}}>
              DISCOVER YOUR <br /> POTENTIAL
            </h2>

            <div className="mt-10 space-y-10">
              {/* box 1 */}
              <hr className="border-black mb-2" />
              <div className="transition-transform duration-300 hover:scale-105" style={{ paddingTop: "40px", paddingBottom: "20px", paddingLeft:"12px"}}>
                <h3 className="text-lg font-bold tracking-[0.5px] md:text-base sm:text-base"
                    style={{ fontWeight: 700, WebkitTextStroke: "1px black" }}>EXPERT COACHING</h3>
                <p className="text-sm">Trainers who are passionate about your progress.</p>
              </div>

              {/* 2 */}
              <hr className="border-black mb-2" />
              <div className="transition-transform duration-300 hover:scale-105" style={{ paddingTop: "40px", paddingBottom: "20px",paddingLeft:"12px" }}>
                <h3 className="text-lg font-bold tracking-[0.5px] md:text-base sm:text-base"
                    style={{ fontWeight: 700, WebkitTextStroke: "1px black" }}>RESULTS-DRIVEN PROGRAMS</h3>
                <p className="text-sm">Workouts that deliver tangible, measurable results.</p>
              </div>

              {/*   3 */}
              <hr className="border-black mb-2" />
              <div className="transition-transform duration-300 hover:scale-105" style={{ paddingTop: "40px", paddingBottom: "40px",paddingLeft:"12px" }}>
                <h3 className="text-lg font-bold tracking-[0.5px] md:text-base sm:text-base"
                    style={{ fontWeight: 700, WebkitTextStroke: "1px black" }}>A SUPPORTIVE TRIBE</h3>
                <p className="text-sm pl-18 md:pl-0 sm:pl-0">A community that pushes you to be your best.</p>
              </div>
            </div>

            {/* Button */}
            <hr className="border-black mb-2" />
            <div style={{ pointerEvents: 'auto', height: "130px" }}>
              <button
                style={{
                  display: "block",
                  lineHeight: "1",
                  padding: "12px 24px",
                  fontSize: "16px",
                  marginTop: "50px",
                  marginLeft: "50px",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  borderRadius: "0.375rem",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = "black"; e.target.style.color = "white"; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "black"; }}
              >
                VIEW CLASSES
              </button>
            </div>
          </div>
        </div>

        {/*  Image */}
        <div
          className="right-image"
          style={{
            flex: 1,
            minWidth: "300px",
            width: "65%", 
          }}
        >
          <img
            src={gymImage}
            alt="Gym"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "flex" }}
          />
        </div>
       
      </div>
    </section>
  );
};

export default JoinCommunity;