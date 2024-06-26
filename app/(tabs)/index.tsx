import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TaskItem from '../../components/TaskItem';
import TaskInput from '../../components/TaskInput';

export default function App() {
  // * STATES
  const [taskList, setTaskList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // * HANDLERS
  function startAddTaskHandler() {
    setModalIsVisible(true);
  } //: startAddTaskHandler

  function endAddTaskHandler() {
    setModalIsVisible(false);
  } //: endAddTaskHandler

  function addTaskHandler(task) {
    // * The arrow function inside 'setTaskList' function generates a new array
    // * by taking the current contents of 'taskList', add 'task' to it, then returns the new array. 
    setTaskList((currentTasks) => [
      ...currentTasks,
      // * When using 'Flatlist' instead of 'ScrollView', replace the the original string value which is 'task' 
      // * with an object and then set a 'key' property for the 'Flatlist' prop's use. For now it is set as a random number.
      { text: task, id: task }
    ]);
  } //: addTaskHandler

  function deleteTaskHandler(id) {
    setTaskList((currentTasks) => {
      return currentTasks.filter((task) => {
        return task.id !== id;
      });
    });
  } //: deleteTaskHandler

  return (
    <>
      {/* Phone system color scheme will autmatically adjust to either light or dark mode depending of the 'StatusBar' value */}
      <StatusBar style="light" />

      <View style={ styles.appContainer }>
        {/* Modal for adding tasks */}
        <Button
          title="Add New Task"
          color="#2c7481"
          onPress={startAddTaskHandler}
        />

        {
          modalIsVisible
          && <TaskInput
            modalIsVisible={ modalIsVisible }
            onAddTask={ addTaskHandler }
            endAddTaskHandler={ endAddTaskHandler }
          />
        }

        <View style={ styles.taskContainer }>
          <FlatList
            data={ taskList }
            renderItem={(itemData) => {
              // * The property 'renderItem' inside 'Flatlist', uses an argument, in this case 'itemData', 
              // * consists of 'item', 'index' and 'separators' respectively. 'itemData.item' contains the actual
              // * string value of the task entered by the user on the screen.
              return <TaskItem
                text={ itemData.item.text }
                id={ itemData.item.id }
                onDeleteItem={ deleteTaskHandler }
              />
            }}
            // * keyExtractor is used to set a unique to each item of the target array
            keyExtractor={(item, index) => {
              return index.toString();
            }}
          />

          {/* THIS IS AN EXAMPLR OF USING SCROLLVIEW PROP */}
          {/* <ScrollView>
            {
              taskList.map((task) => 
                // 'style' property is placed on the view prop because on iOS, borderRadius is not supported for the Text prop
                <View 
                  key={ task }
                  style={ styles.taskView }
                >
                  <Text style={ styles.taskText }>{ task }</Text>
                </View>
              )
            }
          </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: '#141414'
  },
  taskContainer: {
    flex: 9,
    marginTop: 30,
  },
});
