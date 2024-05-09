import {
  View,
  Text,
  StyleSheet
} from "react-native";

function TaskItem(props) {
  return (
    <View 
      style={ styles.taskView }
    >
      <Text style={ styles.taskText }>{ props.text }</Text>
    </View>
  )
};

export default TaskItem;

const styles = StyleSheet.create({
  taskView: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#2c7481',
  },
  taskText: {
    color: 'white'
  }
});