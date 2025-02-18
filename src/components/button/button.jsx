import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";

function Button(props) {
    return (
        <TouchableOpacity style={styles.btn}>
            <Text style={styles.texto}>{props.tituloBtn}</Text>
        </TouchableOpacity>
    )
}

export default Button;