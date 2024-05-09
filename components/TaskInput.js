import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from "react-native";

function TaskInput(props) {
  // * STATES
  const [task, setTask] = useState('');

  // * HANDLERS
  function taskInputHandler(enteredText) {
    setTask(enteredText.target.value);
  }

  function onAddTaskHandler() {
    props.onAddTask(task, setTask)
    
    // * Sets the 'task 'text input field to an empty field after pressing the 'Add Task' button.
    setTask('');
  }

  return (
    <View style={ styles.inputContainer }>
      <TextInput
        style={ styles.textInput }
        placeholder='Please enter a task'
        onChange={ taskInputHandler }
        value={ task }
      />
      <Button
        title='Add Task'
        onPress={ onAddTaskHandler }
        color='#2c7481'
      />
    </View>
  )
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#2c7481',
    color: 'white',
    width: '100%',
    marginRight: 10,
    padding: 10,
  },
});