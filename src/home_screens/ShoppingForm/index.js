import React, { useState } from "react";
import { ImageBackground, TouchableOpacity, Text, View, Image, TextInput, ScrollView } from "react-native";
// import DropDownPicker from 'react-native-dropdown-picker';
import styles from './style'
import { Colors } from "../../utils/Styles";
// import { SimpleHeader } from "../../Components";
import Btn1 from "../../reuseables/Btn1";
import TransparentHeader from "../../reuseables/TransparentHeader/TransparentHeader";
// import TransparentHeader from "../../Components/NavigationHeader/TransparentHeader/TransparentHeader";
import PlusIcon from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
// import { ButtonComponent } from "../../Components";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { Fonts, Colors } from "../../Theme";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputField from "../../reuseables/InputField";
// import ImagePicker from 'react-native-image-crop-picker';
const ShoppingForm = () => {
    // const Picking = () => {
    //     ImagePicker.openPicker({
    //         multiple: true
    //     }).then(images => {
    //         console.log(images);
    //         setImage(images[0].path)
    //     });
    // }
    const [image, setImage] = useState('')
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Fashion and Beauty', value: 'apple' },
        { label: 'Any Other Thing', value: 'banana' }
    ]);
    const [opens, setOpen1] = useState(false);
    const [values, setValue1] = useState(null);
    const [itemss, setItems1] = useState([
        { label: 'USD', value: 'apple' },
        { label: 'AED', value: 'banana' }
    ]);

    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: Colors.white,flex:1 }}>
            <TransparentHeader title={'Fill The Form'} />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.Maincontainer}>

                    <View style={styles.Container3}>
                       
                        {image !== '' ?
                            <TouchableOpacity  style={{
                                borderWidth: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderStyle: "dashed", marginBottom: 10, width: "90%", margin: '5%', aspectRatio: 2, borderRadius: 1,
                            }}>
                                <Image source={{ uri: image }} style={styles.ImageStyling} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity >
                                <View style={{
                                    borderWidth: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderStyle: "dashed", marginBottom: 10, width: "90%", margin: '5%', aspectRatio: 2, borderRadius: 1,
                                }}>
                                    <Ionicons name="images" size={20} color="#3da5e0"></Ionicons>
                                    <Text style={{ fontSize: 20, color: '#3da5e0' }}>
                                        Add upto 5 images
                                    </Text>
                                    <Text style={{ width: 200, textAlign: 'center'}}>
                                        In publishing and graphic design, Lorem ipsum is a placeholder.
                                    </Text>
                                    


                                </View>
                            </TouchableOpacity>
                        }
                       <InputField label="Your Name"
                        placeholder="SomeOne"
                        // keyboardType="email-address"
                        />
                        <InputField label="Your Email"
                        placeholder="example@domain.com"
                        keyboardType="email-address"
                        />
                        
                        <View style={styles.InputStyle}>
                            <View style={styles.sku}>
                                <Text style={styles.HeadingText}>Product Discription</Text>
                                <TouchableOpacity><Text style={styles.MaxWords}>500 Words</Text></TouchableOpacity>
                            </View>
                            <View style={styles.DiscriptionContainerStyle}><TextInput style={styles.Inputs}></TextInput></View>
                        </View>
                        
                        
                        
                    </View>
                   
                </View>

            </ScrollView>
            <Btn1 lable={"Submit"} lableStyle={{color:Colors.white,fontSize: 14,fontWeight: '700'}}/>
        </View>
    )
}
export default ShoppingForm