import React, { ChangeEvent, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState('');

  const handleChange = (e: ChangeEvent) => {
    e.preventDefault();
    onAddTask(title);
    setTitle('');
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task..."
        id="title"
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <TouchableOpacity style={styles.button} onPress={handleChange}>
        <Text style={styles.text}>Add to list</Text>
        <Ionicons
          style={styles.vectorIconsContainer}
          name="ios-create-outline"
          size={20}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: 8,
  },
  input: {
    marginBottom: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#9d9d9d',
    color: '#5f5f5f',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 6,

    placeholderTextColor: '#9d9d9d',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    // marginBottom: 8,
    backgroundColor: '#3a3acb',
    borderRadius: 6,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  vectorIconsContainer: {
    marginLeft: 8,
    padding: 4,
  },
});

export default TaskForm;
