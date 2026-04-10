import { motion } from "motion/react";

type LoaderAnimationProps = {
  size?: number;
  stroke?: number;
  color?: string;
};

const LoaderAnimation: React.FC<LoaderAnimationProps> = ({
  size = 40,
  stroke = 6,
  color = "white",
}) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  const segment = circumference / 3;

  return (
    <div style={{ width: size, height: size }}>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.2,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ originX: "50%", originY: "50%" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={`${segment * 0.6} ${segment * 0.4}`}
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
};

export default LoaderAnimation;