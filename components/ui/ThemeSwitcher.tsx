// ThemeSwitcher.js
import { useTheme } from '@/contexts/theme-context';
import React from 'react';
import { Button } from './button';
import { Moon, Sun } from 'lucide-react';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="secondary" size="sm" onClick={toggleTheme} className="p-2">
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </Button>
  );
}

export default ThemeSwitcher;
