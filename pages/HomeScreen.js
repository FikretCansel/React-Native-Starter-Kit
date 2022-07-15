import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet ,ScrollView,Button } from "react-native";
import HomeCard from "../components/HomeCard.js";
import { useSelector, useDispatch } from 'react-redux';
import { auth } from "../firebase";
import { setUser } from "../redux-toolkit/userReducer.js";

const HomeScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  const places = [
    {
      id: "1",
      name: "Yere batan sarnıcı",
      imageUrl:
        "https://www.klasiksanatlar.com/img/sayfalar/b/1_1598452306_resim.png",
      city: "İstanbul",
    },
    {
      id: "2",
      name: "Anıt Kabir",
      imageUrl:
        "https://i.yerebatan.com/2/1280/595/storage/files/images/2018/11/21/01-TjtJ.jpg",
      city: "Ankara",
    },
    {
      id: "3",
      name: "Anıt Kabir",
      imageUrl:
        "https://i.yerebatan.com/2/1280/595/storage/files/images/2018/11/21/01-TjtJ.jpg",
      city: "Ankara",
    },
    {
      id: "4",
      name: "Anıt Kabir",
      imageUrl:
        "https://i.yerebatan.com/2/1280/595/storage/files/images/2018/11/21/01-TjtJ.jpg",
      city: "Ankara",
    },
  ];

  // useEffect(() => {
  //   console.log(user.email)
  // }, [])
  

  const handleLogOut = () => {

    auth.signOut()
      .then((result) => {
        alert("Çıkış Başarılı");

      })
      .catch((err) => console.log(err));

  };

  return (
    <ScrollView
      style={{
        height: 100,
        padding: 20,
      }}
    >

      <Text>Email : {user?.email}</Text>
      <Button title="Çıkış Yap" onPress={() => handleLogOut()}></Button>

        {places.map((place) => (
          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Details",place={place})} key={place.id}>
            <HomeCard place={place}/>
            </TouchableOpacity>
        ))}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    

    backgroundColor: "#F5FCFF",
    borderWidth: 1,
    marginTop: 44,
  },
  element: {
    margin: 5,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    width: 66,
    height: 58,
  },
});

export default HomeScreen;
