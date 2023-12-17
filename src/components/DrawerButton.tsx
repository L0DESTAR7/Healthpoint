import { TouchableOpacity } from "react-native";
import SandwichMenuIcon from "../icons/SandwichMenuIcon";


export default function DrawerButton() {

  return (
    <TouchableOpacity onPress={() => { console.log("TODO: Open Drawer.") }}>
      <SandwichMenuIcon isActive={false}>
      </SandwichMenuIcon>
    </TouchableOpacity>
  );
}
