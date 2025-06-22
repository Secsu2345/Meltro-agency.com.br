"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
    >
      
    </motion.div>
  )
}
