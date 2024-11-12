import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    parent:{
        flex: 1,
        marginTop:50,
        backgroundColor:'teal',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth:3,
        borderColor:'black',
        borderRadius:10,
        padding:10
    },
    desc:{
        fontSize:16,
        fontWeight:'bold',
        fontStyle:'italic',
        borderWidth:1,
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:5,
        height:'auto',
        width:400,
        backgroundColor:'lightgrey',
        padding:5,
    },
    name:{
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'skyblue',
        borderRadius:5,
        textAlignVertical:'center',
        height:'auto',
        width:300,
        justifyContent:'center',
        padding:5,
    },
});

const Boat = ({ icon_name, name, description, poster})=> {
    return (
        <View style={[styles.parent, {marginTop: 50}]}>
            <View style={[styles.name,{flexDirection: "row", alignItems: "center"}]}>
                <Icon name={icon_name} size={30} color="darkblue"/>
                <Text style={{fontSize: 18, fontWeight: "bold"}}>   {name}</Text>
            </View>
            <Text style={styles.desc}>
                {description}
            </Text>
            <Image source={poster} style={{width:400, height:500}}/>
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView>
            <Text>
                <Text style={{fontSize: 30, fontWeight: "bold", marginTop:50, }}>         GetABoat - For Sale</Text>
            </Text>

            <Boat icon_name="sailboat"
                   name="Sea Ray 500 Sundancer"
                   description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                   poster ={require('../img/sea_ray.jpg')} />

            <Boat icon_name="sailboat"
                   name="Four Winns Horizon 180"
                   description="A sporty look and refined details truly set the Horizon 180 above all others."
                   poster ={require('../img/four_winns.jpg')} />

            <Boat icon_name="sailboat"
                  name="Flipper 640 ST"
                  description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                  poster ={require('../img/flipper.jpg')} />

            <Boat icon_name="sailboat"
                  name="Princess V48"
                  description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                  poster ={require('../img/princess.jpg')} />

            <Boat icon_name="sailboat"
                  name="Bayliner 175 Bowrider"
                  description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                  poster ={require('../img/bayliner.jpg')} />

            <Boat icon_name="sailboat"
                  name="Fairline Targa 47"
                  description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                  poster ={require('../img/fairline.jpg')} />
        </ScrollView>
    );
};

export default AllBoats;
