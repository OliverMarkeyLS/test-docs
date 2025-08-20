import { colorsTuple, createTheme } from "@mantine/core";

const colors = {
  primary: "#007294",
  lightBg: "#F6FDFF",
  secondary: "#1289ac",
  primaryLight: "#005A7514",
  primaryDark: "#005A75",
  primaryDarker: "#005C78",
  secondaryLight: "#1289ac0f",
};

export const theme = createTheme({
  primaryColor: "blue",
  colors: {
    lightGray: colorsTuple("light-dark(#F9FBFD, #29282B)"),
    borderColor: colorsTuple(
      "light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4))"
    ),
    lightBg: colorsTuple("var(--mantine-color-blue-0)"),
    primary: [
      "#E6F5F8", // 0 - Lightest shade (for light backgrounds)
      "#CAECF6", // 1
      "#80D0E8", // 2
      "#46B9DC", // 3
      "#249EC3", // 4
      "#026C84", // 5 - Primary color
      "#005C78", // 6
      "#004E66", // 7
      "#003C4D", // 8
      "#012B37", // 9 - Darkest shade
    ],
    secondary: [
      "#F7FDEA", // 0
      "#EFFCD5", // 1
      "#E7FAC0", // 2
      "#DCF7A8", // 3
      "#CEF388", // 4
      "#A3D64B", // 5
      "#8FBE35", // 6
      "#7BA624", // 7
      "#678D17", // 8
      "#52740B", // 9
    ],
    tertiary: [
      "#E6FAFF", // 0
      "#CCF5FF", // 1
      "#B3F0FF", // 2
      "#99EBFF", // 3
      "#66E0FF", // 4
      "#00C5F1", // 5
      "#00B3DD", // 6
      "#00A1C9", // 7
      "#008FB5", // 8
      "#007DA1", // 9
    ],
    primaryLight: [

      "#005A7514", // 0

      "#F0FBFF", // 1
      "#E8F9FF", // 2
      "#E0F7FF", // 3
      "#D8F5FF", // 4
      "#D0F3FF", // 5
      "#C8F1FF", // 6
      "#C0EFFF", // 7
      "#B8EDFF", // 8
      "#B0EBFF", // 9
    ],
    primaryDark: [
      "#E6F0F3", // 0
      "#CCDFE6", // 1
      "#99BDC9", // 2
      "#669BAD", // 3
      "#337990", // 4
      "#005A75", // 5
      "#004F68", // 6
      "#00445A", // 7
      "#00384D", // 8
      "#002D3F", // 9
    ],
    primaryDarker: [
      "#E6F0F2", // 0
      "#CCDFE3", // 1
      "#99BDC7", // 2
      "#669BAB", // 3
      "#33798F", // 4
      "#005C78", // 5
      "#00506A", // 6
      "#00455C", // 7
      "#00394E", // 8
      "#002D40", // 9
    ],
    secondaryLight: [
      "#F8FDFF", // 0
      "#F0FBFF", // 1
      "#E8F9FF", // 2
      "#E0F7FF", // 3
      "#D8F5FF", // 4
      "#D0F3FF", // 5
      "#C8F1FF", // 6
      "#C0EFFF", // 7
      "#B8EDFF", // 8
      "#B0EBFF", // 9
    ],
    red: [
      "light-dark(#FCECEC, #4C0404)", // 0 - Lightest shade
      "#F6C1C1", // 1
      "#F68C8C", // 2
      "#FA6868", // 3
      "#FD3636", // 4
      "#FF0000", // 5 - Primary shade
      "#D70505", // 6
      "#B50707", // 7
      "#890404", // 8
      "#4C0404", // 9 - Darkest shade
    ],
    yellow: [
      "light-dark(#FAF8EA, #403803)", // 0
      "#F4EEC4", // 1
      "#F8EA91", // 2
      "#E3C607", // 3
      "#F8DC28", // 4
      "#FFDD00", // 5
      "#F8E258", // 6
      "#B19B06", // 7
      "#7C6C03", // 8
      "#403803", // 9
    ],
    pink: [
      "light-dark(#FAEAF5, #42002D)", // 0
      "#F8D6ED", // 1
      "#F59DD9", // 2
      "#C20085", // 3
      "#E9009F", // 4
      "#F01DAD", // 5
      "#F555C2", // 6
      "#9B016A", // 7
      "#7F0157", // 8
      "#42002D", // 9
    ],
    limegreen: [
      "light-dark(#F3FBEF, #1B5101)", // 0
      "#E2F8D7", // 1
      "#C8F6B0", // 2
      "#3EBC00", // 3
      "#57F10B", // 4
      "#86F64E", // 5
      "#ACF985", // 6
      "#339701", // 7
      "#287304", // 8
      "#1B5101", // 9
    ],
    blue: [
      "light-dark(#F6FDFF, #0072941f)", // 0 - 50
      "#CAECF6", // 1 - 100
      "#80D0E8", // 2 - 200
      "#46B9DC", // 3 - 300
      "#249EC3", // 4 - 400
      "#1289AC", // 5 - 500
      "#007294", // 6 - 600
      "#005C78", // 7 - 700
      "#003C4D", // 8 - 800
      "#012B37", // 9 - 900
    ],
    darkblue: [
      "light-dark(#F6F8FF, #011354)", // 0 - 50
      "#DBE2FB", // 1 - 100
      "#B8C6F5", // 2 - 200
      "#6E8AF0", // 3 - 300
      "#1F49E4", // 4 - 400
      "#4467E7", // 5 - 500
      "#0B32C2", // 6 - 600
      "#0426A0", // 7 - 700
      "#031B75", // 8 - 800
      "#011354", // 9 - 900
    ],
    green: [
      "light-dark(#EEFCF7, #004027)", // 0 - 50
      "#DBFAEE", // 1 - 100
      "#BBF6DF", // 2 - 200
      "#8DEEC7", // 3 - 300
      "#5AD9A6", // 4 - 400
      "#2EC186", // 5 - 500
      "#13A96D", // 6 - 600
      "#068A56", // 7 - 700
      "#01643D", // 8 - 800
      "#004027", // 9 - 900
    ],
    grape: [
      "light-dark(#FFFBF6, #462603)", // 0 - 50
      "#FEE6CB", // 1 - 100
      "#FAC689", // 2 - 200
      "#F5AA53", // 3 - 300
      "#F98E13", // 4 - 400
      "#E27900", // 5 - 500
      "#BE6600", // 6 - 600
      "#975305", // 7 - 700
      "#6A3B06", // 8 - 800
      "#462603", // 9 - 900
    ],
    violet: [
      "light-dark(#F8F2FF, #250343)", // 0 - 50
      "#ECD8FF", // 1 - 100
      "#D3A7FD", // 2 - 200
      "#B56CF9", // 3 - 300
      "#9B3CF4", // 4 - 400
      "#8400FF", // 5 - 500
      "#6901C6", // 6 - 600
      "#510893", // 7 - 700
      "#3B036D", // 8 - 800
      "#250343", // 9 - 900
    ],
  },
  defaultRadius: "md",
  components: {
    Button: {
      defaultProps: {
        color: "#007294",
      },
    },
    Card: {
      defaultProps: {
        h: "100%",
        radius: "md",
      },
    },
    CardSection: {
      defaultProps: {
        bg: "var(--mantine-color-body)",
      },
    },
    LineChart: {
      defaultProps: {
        h: "300px",
        p: "md",
      },
    },
    BarChart: {
      defaultProps: {
        h: "300px",
        p: "md",
      },
    },
    DonutChart: {
      defaultProps: {
        h: "300px",
        w: "100%",
        p: "md",
      },
    },
    AppShell: {
      defaultProps: {
        p: "0",
        header: {
          height: 60,
        },
        layout: "alt",
        navbar: {
          breakpoint: "sm",
        },
      },
    },
    TextInput: {
      defaultProps: {
        labelProps: {
          mb: "xs",
        },
      },
    },
    Select: {
      defaultProps: {
        labelProps: {
          mb: "xs",
        },
      },
    },
    Textarea: {
      defaultProps: {
        labelProps: {
          mb: "xs",
        },
      },
    },
    NumberInput: {
      defaultProps: {
        labelProps: {
          mb: "xs",
        },
      },
    },
    Checkbox: {
      defaultProps: {
        labelProps: {
          mb: "xs",
        },
      },
    },
    Radio: {
      defaultProps: {
        labelProps: {
          mb: "xs",
        },
      },
    },
    MultiSelect: {
      defaultProps: {
        labelProps: {
          mb: "xs",
        },
      },
    },
  },
});
