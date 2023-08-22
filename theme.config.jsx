export default {
  logo: <span>Worlddata API</span>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Worlddata API",
    };
  },
  footer: { component: null },
  feedback: { content: null },
  editLink: { component: null },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  primaryHue: { dark: 198, light: 243 },
};
