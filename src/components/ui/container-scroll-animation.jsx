import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

/**
 * ContainerScroll — 21st.dev / Aceternity "container scroll animation"
 * Ported from TSX to JSX. A 3D card that un-tilts (rotateX 20° → 0),
 * scales down and slides up as the section scrolls through the viewport.
 */
export const ContainerScroll = ({ titleComponent, children }) => {  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#143b2a] p-2 md:p-6 bg-[#143b2a] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-paper md:rounded-2xl md:p-4 p-2">
        {children}
      </div>
    </motion.div>
  );
};

/**
 * PageScroll — same container-scroll 3D behaviour, but full-bleed:
 * no card chrome, no border, no rounded corners, no fixed heights.
 * The wrapped page section itself starts tilted (rotateX) and slides up
 * flat into place as it enters the viewport.
 */
export const PageScroll = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.85, 1] : [0.9, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [90, 0]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="w-full will-change-transform"
        style={{
          rotateX: rotate,
          scale,
          y: translateY,
          transformOrigin: "center center",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ContainerScroll;
