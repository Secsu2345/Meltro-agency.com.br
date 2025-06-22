"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-slate-600 font-medium"
        >
          Carregando...
        </motion.p>
      </div>
    </div>
  )
}
