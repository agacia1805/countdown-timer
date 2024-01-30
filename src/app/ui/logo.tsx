'use client';

import { LiaHourglassEndSolid } from 'react-icons/lia';
import { motion, AnimatePresence } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      className='w-12 cursor-pointer md:w-16'
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.6 }}
    >
      <LiaHourglassEndSolid size={50} />
    </motion.div>
  );
}
