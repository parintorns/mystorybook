import variable from "./../variables/platform";

export default (variables = variable) => {
  const contentTheme = {
    ".padder": {
      padding: variables.contentPadding
    },
    flex: 1,
    backgroundColor: variables.contentBackgroundColor,
    "NativeBase.Segment": {
      borderWidth: 0,
      backgroundColor: "transparent"
    }
  };

  return contentTheme;
};
