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

export default function AnimatedContainer() {
  return (
    <motion.div transition={{ ease: 'easeInOut' }} exit={{ y: '-100%' }} />
  );
}
