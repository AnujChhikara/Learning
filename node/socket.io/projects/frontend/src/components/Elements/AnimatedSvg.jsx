import { useState } from "react";
import { motion } from "framer-motion";

export default function MainSvg() {
  const [isHovered, setIsHovered] = useState(false);

  const bubbleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
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
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <div className='overflow-hidden'>
      <div className='relative'>
        <motion.div
          className='w-full h-96 rounded-lg overflow-hidden'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <svg
            viewBox='0 0 400 400'
            className='w-full h-full'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs>
              <linearGradient id='gradient1' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#374151' />
                <stop offset='100%' stopColor='#1F2937' />
              </linearGradient>
              <linearGradient id='gradient2' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#4B5563' />
                <stop offset='100%' stopColor='#9CA3AF' />
              </linearGradient>
            </defs>

            {/* Chat bubbles */}
            <motion.circle
              cx='100'
              cy='200'
              r='40'
              fill='url(#gradient1)'
              variants={bubbleVariants}
              initial='hidden'
              animate='visible'
              custom={0}
            />
            <motion.circle
              cx='200'
              cy='150'
              r='30'
              fill='url(#gradient2)'
              variants={bubbleVariants}
              initial='hidden'
              animate='visible'
              custom={1}
            />
            <motion.circle
              cx='300'
              cy='220'
              r='50'
              fill='url(#gradient1)'
              variants={bubbleVariants}
              initial='hidden'
              animate='visible'
              custom={2}
            />

            {/* Connecting lines */}
            <motion.path
              d='M100,200 Q150,100 200,150'
              stroke='#4B5563'
              strokeWidth='4'
              fill='none'
              variants={lineVariants}
              initial='hidden'
              animate='visible'
            />
            <motion.path
              d='M200,150 Q250,200 300,220'
              stroke='#9CA3AF'
              strokeWidth='4'
              fill='none'
              variants={lineVariants}
              initial='hidden'
              animate='visible'
            />

            {/* Animated dots */}
            <motion.circle
              cx='150'
              cy='175'
              r='5'
              fill='#374151'
              animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            />
            <motion.circle
              cx='250'
              cy='185'
              r='5'
              fill='#9CA3AF'
              animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: 0.5,
              }}
            />
          </svg>
        </motion.div>
        <motion.div
          className='absolute inset-0 bg-zinc-700 mix-blend-color'
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
