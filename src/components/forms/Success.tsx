import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import success from "../../../public/images/success-contact.png";

type Props = {};

function Success({}: Props) {
  return (
    <motion.div
      className="min-h-screen/2 gap-6 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Image
        src={success}
        width={400}
        className=""
        alt="Envelope with thank you message sticking out."
      />
    </motion.div>
  );
}

export default Success;
