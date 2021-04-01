import React from 'react';
import { motion } from 'framer-motion';

// const PoseAnimatedContainer = posed.div({
//   enter: {
//     y: 0,
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
//   exit: {
//     y: '-100%',
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
// });

interface AnimatedContainerProps {
  children: React.ReactNode;
}

export default function AnimatedContainer({
  children,
}: AnimatedContainerProps) {
  return (
    <motion.div transition={{ ease: 'easeInOut' }} exit={{ y: '-100%' }}>
      {children}
    </motion.div>
  );
}
