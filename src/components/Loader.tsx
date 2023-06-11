import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns=""
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="J" transform="translate(36.000000, 36.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill="currentColor"
                  d="M12.7585 0.818181H18.2301V19.0739C18.2301 20.7614 17.8509 22.2273 17.0923 23.4716C16.3423 24.7159 15.2983 25.6747 13.9602 26.348C12.6222 27.0213 11.0668 27.358 9.29403 27.358C7.71733 27.358 6.28551 27.081 4.99858 26.527C3.72017 25.9645 2.70597 25.1122 1.95597 23.9702C1.20597 22.8196 0.835227 21.375 0.84375 19.6364H6.35369C6.37074 20.3267 6.51136 20.919 6.77557 21.4134C7.0483 21.8991 7.41903 22.2741 7.88778 22.5384C8.36506 22.794 8.92756 22.9219 9.57528 22.9219C10.2571 22.9219 10.8324 22.777 11.3011 22.4872C11.7784 22.1889 12.1406 21.7543 12.3878 21.1832C12.6349 20.6122 12.7585 19.9091 12.7585 19.0739V0.818181Z"
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
