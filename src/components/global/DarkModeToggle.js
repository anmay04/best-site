import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="fixed top-5 right-5 z-[100] glass rounded-full w-11 h-11 flex items-center justify-center hover:scale-110 transition-transform"
    >
      <motion.span
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-lg"
      >
        {isDark ? '☾' : '☀'}
      </motion.span>
    </button>
  );
}
