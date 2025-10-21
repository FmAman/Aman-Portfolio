import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext.jsx';

const label = {
  light: 'Switch to dark mode',
  dark: 'Switch to light mode',
};

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={label[theme]}
      title={label[theme]}
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
}

export default ThemeToggle;
