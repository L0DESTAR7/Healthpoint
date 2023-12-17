import { TouchableOpacity } from "react-native";
import NotificationIcon from "../icons/NotificationIcon";


export default function NotificationButton() {

  return (
    <TouchableOpacity onPress={() => { console.log("TODO: Open Notifications.") }}>
      <NotificationIcon isActive={false}>
      </NotificationIcon>
    </TouchableOpacity>
  );
}
