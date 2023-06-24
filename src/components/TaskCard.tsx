import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { TaskProps } from '../screens/TaskListScreen';
import EditForm from './EditForm';

interface TaskCardProps {
  task: TaskProps;
  toggleCheckCompleted: (id: string) => void;
  handleDeleteTask: (id: string) => void;
  handleEdit: (id: string, title: string) => void;
}

const TaskCard = ({
  task,
  toggleCheckCompleted,
  handleDeleteTask,
  handleEdit,
}: TaskCardProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleToggleCheckCompleted = () => {
    toggleCheckCompleted(task.id);
  };

  const handleDelete = (id: string) => {
    handleDeleteTask(id);
  };

  return (
    <>
      <View style={styles.taskContainer}>
        <Checkbox
          style={styles.checkBox}
          value={task.isCompleted}
          onValueChange={handleToggleCheckCompleted}
          color="#3a3acb"
        />
        <View style={styles.labelContainer}>
          <Text style={styles.textContent}>{task.title}</Text>
        </View>
        <View style={styles.vectorIconsContainer}>
          <Feather
            style={styles.editIcon}
            onPress={() => toggleEdit()}
            name="edit"
            size={20}
            color="#fff"
          />
          <Feather
            style={styles.deleteIcon}
            onPress={() => handleDelete(task.id)}
            name="delete"
            size={20}
            color="#fff"
          />
        </View>
      </View>
      <View>
        {isEdit ? (
          <EditForm
            handleEdit={(id, title) => {
              handleEdit(id, title);
              setIsEdit(false);
            }}
            id={task.id}
            title={task.title}
          />
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    marginBottom: 4,
    backgroundColor: '#3a3acb',
    borderRadius: 6,
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 14,
    width: '100%',
  },
  textContent: {
    flex: 1,
    flexDirection: 'row',
    padding: 14,
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // width: '100%',
  },
  checkBox: {
    width: 20,
    height: 20,
    marginRight: 10,
    color: '#3a3acb',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 2,
  },
  vectorIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  editIcon: {
    marginRight: 10,
  },
  deleteIcon: {
    marginLeft: 10,
  },
});

export default TaskCard;
