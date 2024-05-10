import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image
} from "react-native";

function TaskInput(props) {
  // * Deconstruct props
  let { modalIsVisible, onAddTask, endAddTaskHandler } = props;

  // * STATES
  const [task, setTask] = useState('');

  // * HANDLERS
  function taskInputHandler(enteredText) {
    setTask(enteredText.target.value);
  }

  function onAddTaskHandler() {
    onAddTask(task, setTask)

    // * Sets the 'task 'text input field to an empty field after pressing the 'Add Task' button.
    setTask('');

    // * close the modal upon creating a task.
    endAddTaskHandler()
  }

  return (
    <Modal visible={ modalIsVisible } animationType="fade">
      <View style={ styles.inputContainer }>
        <Image style={ styles.image } source={ require('../assets/images/goal.png') } />

        <TextInput
          style={ styles.textInput }
          placeholder='Please enter a task'
          onChange={ taskInputHandler }
          value={ task }
        />

        <View style={ styles.buttonContainer }>
          <View style={ styles.button }>
            <Button
              title='Add Task'
              onPress={ onAddTaskHandler }
              color='#2c7481'
            />
          </View>
          <View style={ styles.button }>
            <Button
              title='Cancel'
              onPress={ endAddTaskHandler }
              color='#2c7481'
            />
          </View>
        </View>
      </View>

      
    </Modal>
  )
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#141414',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#2c7481',
    backgroundColor: '#333',
    borderRadius: 6,
    color: 'white',
    height: '7%',
    width: '90%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  }
});