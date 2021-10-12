import { extendTheme } from "@chakra-ui/react";
import { Theme } from "@emotion/react";

const theme: Theme = extendTheme({
  colors: {
    primary: {
      50: "#dcfdff",
      100: "#b8f1f4",
      200: "#91e6ea",
      300: "#68dbe0",
      400: "#41d0d7",
      500: "#28b7be",
      600: "#188e94",
      700: "#08666a",
      800: "#003e41",
      900: "#001618",
    },
    orange: {
      50: "#fff6da",
      100: "#ffe3ad",
      200: "#ffd17d",
      300: "#ffbf4b",
      400: "#ffac1a",
      500: "#e69300",
      600: "#b37200",
      700: "#815200",
      800: "#4e3000",
      900: "#1f0f00",
    },
  },
});

export default theme;
