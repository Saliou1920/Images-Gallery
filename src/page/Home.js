import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex h-screen">
      <motion.h1
        animate={{ scale: 2 }}
        transition={{ duration: 0.5 }}
        className="m-auto text-4xl font-bold text-center"
      >
        Welcome to the Home Page
      </motion.h1>
    </div>
  );
}
