import { motion } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

type RevealInViewProps = {
  children: React.ReactNode;
  threshold?: number;
  once?: boolean;
  className?: string;
};

export function RevealInView({ children, threshold = 0.1, once = false, className = ""}: RevealInViewProps) {
  const ref = useRef(null);
  const isMobile = useIsMobile();

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={isMobile
        ? { once, amount: "some", margin: "0px 0px 0px 0px" }
        : { once, amount: threshold }
      }
      className={className}>
      {children}
    </motion.div>
  );
}
