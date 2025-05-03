
import React from 'react';
import { useTheme } from '@/utils/themeContext';
import { Button } from '@/components/ui/button';
import { Monitor, Moon, Palette } from 'lucide-react';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className={`flex gap-2 ${className}`}>
      <Button
        size="sm"
        variant={theme === 'light' ? 'default' : 'outline'}
        className={`rounded-full ${theme === 'light' ? 'bg-portfolio-teal text-portfolio-navy' : ''}`}
        onClick={() => setTheme('light')}
        title="Light Theme"
      >
        <Monitor size={16} />
      </Button>
      
      <Button
        size="sm"
        variant={theme === 'dark' ? 'default' : 'outline'}
        className={`rounded-full ${theme === 'dark' ? 'bg-purple-600 text-white' : ''}`}
        onClick={() => setTheme('dark')}
        title="Dark Theme"
      >
        <Moon size={16} />
      </Button>
      
      <Button
        size="sm"
        variant={theme === 'creative' ? 'default' : 'outline'}
        className={`rounded-full ${theme === 'creative' ? 'bg-fuchsia-500 text-white' : ''}`}
        onClick={() => setTheme('creative')}
        title="Creative Theme"
      >
        <Palette size={16} />
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
