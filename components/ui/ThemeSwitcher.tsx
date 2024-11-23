// ThemeSwitcher.js
import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { Button } from './button';
import { IconMoon, IconSun } from '@tabler/icons-react';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      aria-label="Theme Switcher"
      title="Switch Theme"
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="p-2"
    >
      {theme === 'light' ? <IconMoon size={18} /> : <IconSun size={18} />}
    </Button>
  );
}

export default ThemeSwitcher;
