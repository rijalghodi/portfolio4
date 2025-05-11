// ThemeSwitcher.js
import { useTheme } from "@/contexts/theme-context";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { Button } from "./button";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button aria-label="Theme Switcher" title="Switch Theme" variant="ghost" size="icon-lg" onClick={toggleTheme}>
      {theme === "light" ? <IconMoon /> : <IconSun />}
    </Button>
  );
}

export default ThemeSwitcher;
