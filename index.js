const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      m: (value) => ({ margin: value.replace("rem", "em") }),
      mt: (value) => ({ marginTop: value.replace("rem", "em") }),
      mb: (value) => ({ marginBottom: value.replace("rem", "em") }),
      ml: (value) => ({ marginLeft: value.replace("rem", "em") }),
      mr: (value) => ({ marginRight: value.replace("rem", "em") }),
      mx: (value) => ({
        marginLeft: value.replace("rem", "em"),
        marginRight: value.replace("rem", "em"),
      }),
      my: (value) => ({
        marginTop: value.replace("rem", "em"),
        marginBottom: value.replace("rem", "em"),
      }),
      p: (value) => ({ padding: value.replace("rem", "em") }),
      pt: (value) => ({ paddingTop: value.replace("rem", "em") }),
      pb: (value) => ({ paddingBottom: value.replace("rem", "em") }),
      pl: (value) => ({ paddingLeft: value.replace("rem", "em") }),
      pr: (value) => ({ paddingRight: value.replace("rem", "em") }),
      px: (value) => ({
        paddingLeft: value.replace("rem", "em"),
        paddingRight: value.replace("rem", "em"),
      }),
      py: (value) => ({
        paddingTop: value.replace("rem", "em"),
        paddingBottom: value.replace("rem", "em"),
      }),
    },
    { values: theme("spacing"), supportsNegativeValues: true }
  );
});
