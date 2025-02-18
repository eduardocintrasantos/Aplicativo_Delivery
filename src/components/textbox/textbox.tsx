import { Text, TextInput, View } from "react-native";
import { styles } from "./textbox.style";


function TextBox(props) {
    return (
        <View>
            <Text style={styles.label}>{props.titulo}</Text>
            <TextInput style={styles.input}/>
        </View>
    )
}

export default TextBox;