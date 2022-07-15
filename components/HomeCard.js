import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function HomeCard({place}) {
 

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {place.name}
      </Text>
      <Image
        style={styles.logo}
        source={{
          uri:place.imageUrl!==undefined?place.imageUrl:"https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    height: 128,
    width: 128,
  },
});
