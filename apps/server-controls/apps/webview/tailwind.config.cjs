const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        "activityBar-background": "#282c34",
        "activityBar-foreground": "#d7dae0",

        "editor-background": "#282c34",

        "button-background": "#404754",
        "button-secondaryBackground": "#30333d",
        "button-secondaryForeground": "#c0bdbd",
      }
    },
  },

  plugins: [],
};

module.exports = config;
