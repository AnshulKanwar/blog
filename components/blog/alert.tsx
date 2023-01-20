import { useTheme } from "next-themes";
import { ReactElement, useEffect, useState } from "react";
import { TbAlertTriangle, TbAlertCircle } from "react-icons/tb";
import { capitalize } from "../../lib/utils";

enum AlertType {
  Important = "important",
  Note = "note",
  Warning = "warning",
}

type TColorScheme = {
  bg: string;
  border: string;
  accent: string;
  icon: ReactElement;
};

type TColorSchemes = {
  [key in AlertType]: {
    light: TColorScheme;
    dark: TColorScheme;
  };
};

const colorSchemes: TColorSchemes = {
  important: {
    light: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      accent: "bg-rose-200",
      icon: <TbAlertTriangle className="w-5 h-5" />,
    },
    dark: {
      bg: "bg-rose-500",
      border: "border-rose-600",
      accent: "bg-rose-600",
      icon: <TbAlertTriangle className="w-5 h-5" />,
    },
  },
  note: {
    light: {
      bg: "bg-teal-100",
      border: "border-teal-200",
      accent: "bg-teal-200",
      icon: <TbAlertCircle className="w-5 h-5" />,
    },
    dark: {
      bg: "bg-teal-500",
      border: "border-teal-600",
      accent: "bg-teal-600",
      icon: <TbAlertCircle className="w-5 h-5" />,
    }
  },
  warning: {
    light: {
      bg: "bg-amber-100",
      border: "border-amber-200",
      accent: "bg-amber-200",
      icon: <TbAlertCircle className="w-5 h-5" />,
    },
    dark: {
      bg: "bg-amber-500",
      border: "border-amber-600",
      accent: "bg-amber-600",
      icon: <TbAlertCircle className="w-5 h-5" />,
    }
  },
};

interface Props {
  type: AlertType;
  children: string;
}

const Alert = ({ type, children }: Props) => {
  const [mounted, setMounted] = useState(false)
  let {theme} = useTheme()

  if (!(theme === 'light' || theme === 'dark')) {
    theme = 'light'
  }

  let colorSchemeType = colorSchemes[type]

  let colorScheme = theme === 'light' ? colorSchemeType.light : colorSchemeType.dark

  const { bg, border, accent, icon } = colorScheme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={`${bg} ${border} border-2 rounded-md mb-5`}>
      <div
        className={`flex ${accent} items-center gap-2 px-5 py-1 TbAlertCircle font-bold dark:text-white`}
      >
        <span>{icon}</span>
        <span className={`w-full`}>{capitalize(type)}</span>
      </div>
      <div className={`px-5 dark:text-white`}>{children}</div>
    </div>
  );
};

export default Alert;
