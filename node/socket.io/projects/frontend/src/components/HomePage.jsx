"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SocketIoSVG from "./Elements/AnimatedSvg";

export default function Component() {
  const [isHovered, setIsHovered] = useState(false);

  const bubbleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2,
      },
    }),
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 overflow-hidden">
      <nav className=" bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-zinc-800">FutureChat</span>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                className="px-4 py-2 rounded-md bg-zinc-100 text-zinc-800 font-medium hover:bg-zinc-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
              <motion.button
                className="px-4 py-2 rounded-md bg-zinc-800 text-white font-medium hover:bg-zinc-900 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <main className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-4xl sm:text-5xl font-extrabold text-zinc-800 leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Experience the Future of Communication
              </motion.h1>
              <motion.p
                className="text-xl text-zinc-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Connect, collaborate, and chat with AI-powered intelligence. Welcome to FutureChat, where conversations evolve.
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.4 }}
              >
                <motion.button
                  className="px-6 py-3 rounded-md bg-zinc-800 text-white font-medium duration-500 hover:bg-zinc-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
                <motion.button
                  className="px-6 py-3 rounded-md bg-zinc-100 text-zinc-800 font-medium hover:bg-zinc-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
            <div className="relative">
              <SocketIoSVG/>
          </div>
        </div>
        </div>
      </main>

     
    </div>
  );
}
