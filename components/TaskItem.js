import {
  View,
  Text,
  StyleSheet,
  Pressable
} from "react-native";

function TaskItem(props) {
  // * Deconstruct props
  let { text, id, onDeleteItem } = props;

  return (
      <View
        style={ styles.taskView }
      >
        <Pressable
          onPress={ onDeleteItem.bind(this, id) }
          // * '{ pressed }' is deconstructed from argumentName.pressed
          // * This will also work: (pressData) => pressData.pressed && styles.pressedItem 
          style={ ({ pressed }) => pressed && styles.pressedItem }
        >
          <Text style={ styles.taskText }>{ text }</Text>
        </Pressable>
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
  },
  pressedItem: {
    opacity: 0.5
  }
});