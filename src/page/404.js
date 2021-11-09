import React from "react";
import { motion } from "framer-motion";
export default function NotFound() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex justify-center items-center">
        <motion.p
          animate={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
          className="m-auto text-1xl font-bold text-center"
        >
          Sorry, the page you are looking for does not exist.
        </motion.p>
        <motion.img
          initial={{ x: 400 }}
          animate={{ scale: 1, x: -300 }}
          transition={{ duration: 1 }}
          src="https://oc-images.imgix.net/error/error_404.svg?v=2&auto=compress,format&q=80&dpr=1"
          alt="404"
        />
      </div>
    </div>
  );
}
