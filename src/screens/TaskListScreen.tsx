import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

const TaskListScreen = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: 'task-list',
      title: 'Task List',
      isCompleted: true,
    },
  ]);

  const generateUniqueId = (): string => {
    const timestamp = Date.now().toString();
    const random = Math.random().toString().substring(2);
    return `${timestamp}-${random}`;
  };

  const handleAddTask = (title: string) => {
    const newTask: TaskProps = {
      id: generateUniqueId(),
      title,
      isCompleted: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleEdit = (id: string, title: string) => {
    let data = [...tasks];
    data = data.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          title,
        };
      } else {
        return task;
      }
    });
    // console.log(id, title);
    setTasks(data);
  };

  const handleDeleteTask = (id: string) => {
    setTasks(
      tasks.filter((task) => {
        if (task.id !== id) {
          return task;
        } else {
          return null;
        }
      })
    );
  };

  const handleToggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.taskListContainer}
      >
        <FlatList
          data={tasks}
          style={styles.taskList}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              toggleCheckCompleted={handleToggleComplete}
              handleDeleteTask={handleDeleteTask}
              handleEdit={handleEdit}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <TaskForm onAddTask={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: '#fdfffc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  taskList: {
    flex: 1,
    height: '100%',
  },
  taskListContainer: {
    flex: 1,
    height: '100%',
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginBottom: 16,
  },
});

export default TaskListScreen;
