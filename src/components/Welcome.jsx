import React from 'react'
import logo from "../../src/assets/movitaLogo.png"
import { motion, AnimatePresence } from "framer-motion";

const Welcome = () => {
  return (
    <div className="bg-black h-screen w-100 flex justify-center items-center overflow-hidden flex-col">
    <AnimatePresence >
        <motion.div
          key={logo}
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} className="w-[600px]" alt=""/>
        </motion.div>
      </AnimatePresence>
      <motion.h2  
          className=' text-3xl font-extrabold'
          initial={{ y: 10, opacity: 0 ,color: '#FFFFFF'}}
          animate={{ y: [0, -20, 0], opacity: 1,color: '#FFA555' }}
          transition={{ duration: 1, delay: 0.5}}
          >
            Movita Mobil Vasıta İzleme Takip sistemi
      </motion.h2>
  </div>
  )
}

export default Welcome
