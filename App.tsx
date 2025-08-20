import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  Alert,
} from "react-native";
export default function App() {
  const [formOn, setFormOn] = useState(false);
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      {!formOn ? (
        <View>
          <Image
            source={require("./assets/morcegos.png")}
            style={styles.imgFront}
          ></Image>
          <Pressable onPress={() => setFormOn(true)} style={styles.btnFront}>
            <Text style={styles.btnText}>ACTIVATE SIGNAL</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.form}>
          <Pressable onPress={() => setFormOn(false)} style={styles.btnBack}>
            <Text style={styles.backText}>⬅ Back Home 🦇</Text>
          </Pressable>
          <Text style={styles.title}> About you</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={"grey"}
            value={name}
            onChangeText={setName}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
            placeholderTextColor={"grey"}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            placeholderTextColor={"grey"}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor={"grey"}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="More Info"
            placeholderTextColor={"grey"}
          ></TextInput>
          <Pressable
            style={styles.btnForm}
            onPress={() => {
              Alert.alert(
                `${name}, your form was submitted!`,
                "Batman is on his way. Hold on tight!!"
              );
              setName("");
              setFormOn(false);
            }}
          >
            <Text style={styles.btnText}>SEND</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  imgFront: {
    width: 350,
    height: 350,
  },
  btnFront: {
    width: "50%",
    height: 45,
    backgroundColor: "#f7b230",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  btnForm: {
    width: "50%",
    height: 45,
    backgroundColor: "#f7b230",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "center",
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  form: {
    backgroundColor: "black",
    width: "100%",
  },
  btnBack: {
    marginTop: 20,
    marginLeft: 10,
    alignSelf: "flex-start",
    paddingVertical: 10,
  },
  backText: {
    color: "#f7b230",
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#f7b230",
    borderRadius: 3,
    color: "white",
  },
});
