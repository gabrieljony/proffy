import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: "Ubuntu_700Bold",
    color: "#32264d",
    fontSize: 20,
  },
  subject: {
    fontFamily: "Ubuntu_400Regular",
    color: "#6a6180",
    fontSize: 12,
    marginTop: 4,
  },
  bio: {
    marginHorizontal: 24,
    fontFamily: "Ubuntu_400Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#646180",
  },
  footer: {
    backgroundColor: "#FAFAFC",
    padding: 24,
    alignItems: "center",
    marginTop: 24,
  },

  price: {
    fontFamily: "Ubuntu_400Regular",
    color: "#646180",
    fontSize: 14,
  },

  priceValue: {
    fontFamily: "Ubuntu_700Bold",
    color: "#8257e5",
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: "#8257e5",
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  favorited: {
    backgroundColor: "#e33e3d",
  },

  contactButton: {
    backgroundColor: "#04d361",
    flex: 1,
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  contactButtonText: {
    color: "#FFF",
    fontFamily: "Ubuntu_700Bold",
    fontSize: 16,
    marginLeft: 16,
  },
});

export default styles;
