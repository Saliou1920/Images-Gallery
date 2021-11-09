import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex h-screen">
      <motion.h1
        initial={{ y: -450 }}
        animate={{ scale: 1.5, y: 0 }}
        transition={{ duration: 0.5 }}
        className="m-auto text-4xl font-bold text-center"
      >
        Welcome Home
      </motion.h1>
    </div>
  );
}
