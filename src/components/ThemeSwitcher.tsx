import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { FaSun } from 'react-icons/fa6';
import { FaMoon } from "react-icons/fa6";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Switch
      defaultSelected={false}
      size="lg"
      color="success"
      startContent={<FaSun />}
      endContent={<FaMoon />}
      onChange={(e: any) => setTheme(e.target.checked ? 'light' : 'dark')}
    >
    </Switch>
    </div>
  )
};