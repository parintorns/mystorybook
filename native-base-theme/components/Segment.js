import variable from "./../variables/platform";

export default (variables = variable) => {
  const platform = variables.platform;

  const segmentTheme = {
    height: 45,
    borderColor: variables.segmentBorderColorMain,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: variables.segmentBackgroundColor,
    "NativeBase.Button": {
      alignSelf: "center",
      borderRadius: 0,
      paddingHorizontal: 10,
      marginHorizontal: 10,
      height: 30,
      backgroundColor: "transparent",
      borderBottomWidth: 0.5,
      borderColor: variables.segmentBorderColor,
      elevation: 0,
      ".active": {
        "NativeBase.Text": {
          color: variables.segmentActiveTextColor
        },
        borderColor: variables.segmentActiveBorderColor,
      },
      ".first": {
        borderTopLeftRadius: platform === "ios" ? 5 : undefined,
        borderBottomLeftRadius: platform === "ios" ? 5 : undefined,
        borderRightWidth: 0
      },
      ".last": {
        borderTopRightRadius: platform === "ios" ? 5 : undefined,
        borderBottomRightRadius: platform === "ios" ? 5 : undefined,
        borderLeftWidth: 0
      },
      "NativeBase.Text": {
        color: variables.segmentTextColor,
        fontSize: 14
      }
    }
  };

  return segmentTheme;
};
