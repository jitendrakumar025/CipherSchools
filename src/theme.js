import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
export const tokens = (mode) => ({

    // #15181e #262c36  #202b47  #f3912e
  ...(mode === "dark"
    ? {
        black: {
          100: "#d4d5d7",
          200: "#a8abaf",
          300: "#7d8086",
          400: "#51565e",
          500: "#262c36", ///
          600: "#1e232b",
          700: "#171a20",
          800: "#0f1216",
          900: "#08090b",
        },
        blackAccent: {
          100: "#d0d1d2",
          200: "#a1a3a5",
          300: "#737478",
          400: "#44464b",
          500: "#15181e", ////
          600: "#202b47",
          700: "#0d0e12",
          800: "#080a0c",
          900: "#040506",
        },
        gray: {
          100: "#f2f2f2",
          200: "#e5e5e5",
          300: "#d7d7d7",
          400: "#cacaca",
          500: "#bdbdbd",
          600: "#979797",
          700: "#717171",
          800: "#4c4c4c",
          900: "#262626",
        },
        grayAccent: {
          100: "#f2f2f2",
          200: "#e5e5e5",
          300: "#d7d7d7",
          400: "#cacaca",
          500: "#bdbdbd",
          600: "#979797",
          700: "#717171",
          800: "#4c4c4c",
          900: "#262626",
        },
        white: {
          100: "#fcfdfe",
          200: "#fafbfd",
          300: "#f7f9fc",
          400: "#f5f7fb",
          500: "#f2f5fa",
          600: "#c2c4c8",
          700: "#919396",
          800: "#616264",
          900: "#303132",
        },
      }
    : {
        black: {
          100: "#08090b",
          200: "#0f1216",
          300: "#171a20",
          400: "#1e232b",
          500: "#fff",
          600: "#51565e",
          700: "#7d8086",
          800: "#a8abaf",
          900: "#d4d5d7",
        },
        blackAccent: {
          100: "#040506",
          200: "#080a0c",
          300: "#0d0e12",
          400: "#111318",
          500: "rgb(242 245 250)", //rgb(242 245 250)
          600: "#fff", ///
          700: "#737478",
          800: "#a1a3a5",
          900: "#d0d1d2",
        },
        gray: {
          100: "#262626",
          200: "#4c4c4c",
          300: "#717171",
          400: "#979797",
          500: "#bdbdbd",
          600: "#cacaca",
          700: "#d7d7d7",
          800: "#e5e5e5",
          900: "#f2f2f2",
        },
        grayAccent: {
          100: "#262626",
          200: "#4c4c4c",
          300: "#717171",
          400: "#979797",
          500: "#bdbdbd",
          600: "#cacaca",
          700: "#d7d7d7",
          800: "#e5e5e5",
          900: "#f2f2f2",
        },
        //#fff
        white: {
          100: "#303132",
          200: "#616264",
          300: "#919396",
          400: "#c2c4c8",
          500: "#f2f5fa",
          600: "#f5f7fb",
          700: "#f7f9fc",
          800: "#fafbfd",
          900: "#fcfdfe",
        },
      }),
});

///mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.black[500],
            },
            secondary: {
              main: colors.gray[500],
            },
            neutral: {
              main: colors.gray[500],
              dark: colors.gray[700],
              light: colors.gray[100],
            },
            background: {
              default: colors.blackAccent[500],
            },
          }
        : {
            primary: {
              main: colors.white[200],
            },
            secondary: {
              main: colors.grayAccent[500],
            },
            neutral: {
              main: colors.white[500],
              dark: colors.white[700],
              light: colors.white[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
        fontSize: 20,
        fontweight: 600,
      },
      h5: {
        fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
        fontSize: 14,
      },
      h7: {
        fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
        fontSize: 10,
      },
      h8: {
        fontFamily: ["Open Sans", "Roboto", "sans-serif"].join(","),
        fontSize: 8,
      },
    },
  };
};

////context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark"); //default is dark here
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
