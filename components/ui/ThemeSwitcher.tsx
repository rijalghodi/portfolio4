// ThemeSwitcher.js
import { useTheme } from "@/contexts/theme-context";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Button } from "./button";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button aria-label="Theme Switcher" title="Switch Theme" variant="outline" onClick={toggleTheme} className="p-2">
      {theme === "light" ? <IconMoon size={18} /> : <IconSun size={18} />}
    </Button>
  );
}

export default ThemeSwitcher;
