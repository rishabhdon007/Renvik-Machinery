import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export const TypewriterText = ({ 
  text, 
  speed = 50, 
  delay = 0, 
  loop = false 
}: { 
  text: string, 
  speed?: number, 
  delay?: number, 
  loop?: boolean 
}) => {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !loop, margin: "0px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let isMounted = true;
    let timer: ReturnType<typeof setInterval>;
    
    const startTyping = () => {
      if (!isMounted) return;
      let i = 0;
      setDisplayText("");
      
      timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          if (loop) {
            setTimeout(() => {
              if (isMounted) startTyping();
            }, 3000); // Wait 3 seconds before repeating
          }
        }
      }, speed);
    };

    const startTimeout = setTimeout(startTyping, delay);
    
    return () => {
      isMounted = false;
      clearTimeout(startTimeout);
      if (timer) clearInterval(timer);
    };
  }, [text, isInView, speed, delay, loop]);

  return <span ref={ref}>{displayText}</span>;
};

export const AnimatedCounter = ({ target, duration = 2 }: { target: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};
