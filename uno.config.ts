import { defineConfig } from "unocss";

export default defineConfig({
  // presets: [
  // 	presetWind4({
  // 		preflights: {
  // 			reset: true,
  // 		},
  // 	}),
  // ],
  shortcuts: {
    // main: "flex flex-1 flex-col items-center m0 p0 color-txt",
    body: "bg-mantle color-text",
    link: "underline underline-dashed color-blue hover:color-sapphire",
  },
  theme: {
    colors: {
      rosewater: "#f5e0dc",
      flamingo: "#f2cdcd",
      pink: "#f5c2e7",
      mauve: "#cba6f7",
      red: "#f38ba8",
      maroon: "#eba0ac",
      peach: "#fab387",
      yellow: "#f9e2af",
      green: "#a6e3a1",
      teal: "#94e2d5",
      sky: "#89dceb",
      sapphire: "#74c7ec",
      blue: "#89b4fa",
      lavendar: "#b4befe",
      text: "#cdd6f4",
      subtext1: "#bac2de",
      subtext0: "#a6adc8",
      overlay2: "#9399b2",
      overlay1: "#7f849c",
      overlay0: "#7f849c",
      surface2: "#585b70",
      surface1: "#45475a",
      surface0: "#313244",
      base: "#1e1e2e",
      mantle: "#181825",
      crust: "#11111b",
    },
  },
});
