import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f2',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  topheader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },

  headerText:{
    flexDirection: "column",
    marginLeft: 8,
    width: 234,
  },

  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },

  topText: {
    fontSize: 21,
    fontWeight: "400",
    lineHeight: 25,
    letterSpacing: 0.15,
  },

  topTextBold:{
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 25,
    letterSpacing: 0.15,
  },

  input: {
    alignItems: 'flex-start',
    width: 343,
    height: 247,    
    paddingHorizontal: 19,
    paddingTop: 23,

    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.22,
    elevation: 3,
  },

  questionBtn: {
    flexDirection: "row",
    backgroundColor: "#454958",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,

    padding: [6, 6, 6, 8],
    height: 47,
    width: 343,

    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  btnQuestionMark:{
    width: 16,
    height: 16,
    marginRight: 6,
  },

  btnText:{
    color: "white",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 1.25,
    textTransform: "uppercase",
  }

});
  