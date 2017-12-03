import variable from "./../variables/platform";

export default (variables = variable) => {
  const cardTheme = {
    ".transparent": {
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      elevation: null
    },
    marginVertical: 0,
    marginHorizontal: 0,
    flex: 1,
    borderWidth: 0,
    borderBottomWidth: 0.5,
    borderRadius: 0,
    borderColor: variables.cardBorderColor,
    flexWrap: "wrap",
    backgroundColor: variables.cardDefaultBg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 15,
    marginRight: 15
  };

  return cardTheme;
};
