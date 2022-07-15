import React,{useState} from "react";
import { Stack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text,StyleSheet, Touchable, TouchableOpacity } from "react-native";
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
} from "@react-native-material/core";

const ProfileScreen = (props) => {
    const [revealed, setRevealed] = useState(false);


    const handleNavigate=(NavigateScreenName)=>{
        props.navigation.replace(NavigateScreenName)
    }

    return (
        <Backdrop
        revealed={revealed}
        header={
          <AppBar
            title="My Profile"
            transparent
            leading={props => (
              <IconButton
                icon={props => (
                  <Icon name={revealed ? "close" : "menu"} {...props} />
                )}
                onPress={() => setRevealed(prevState => !prevState)}
                {...props}
              />
            )}
          />
        }
        backLayer={<View >
            <TouchableOpacity onPress={()=>handleNavigate("Home")}>
                <BackdropSubheader style={styles.navigateButton} title="Home" color="white"/>
            </TouchableOpacity>
            
            <BackdropSubheader title="Subheader" />
        </View>}
      >
        
        <Stack fill spacing={5}>
            <Avatar label="Fikret Cansel" autoColor />
            <Text>Fikret Cansel</Text>
        </Stack>
    
      </Backdrop>
    );    
}

    const styles = StyleSheet.create({
    
  });




export default ProfileScreen;