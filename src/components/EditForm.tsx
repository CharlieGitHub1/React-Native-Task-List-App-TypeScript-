import React, { useState, ChangeEvent } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

interface IEdit {
  id: string;
  title: string;
  handleEdit: (id: string, title: string) => void;
}

const EditForm = ({ id, title, handleEdit }: IEdit) => {
  const [editTitle, setEditTitle] = useState(title);

  const handleUpdate = (e: ChangeEvent) => {
    e.preventDefault();
    handleEdit(id, editTitle);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          id="title"
          value={editTitle}
          onChangeText={(editTitle) => setEditTitle(editTitle)}
        />
        <TouchableOpacity style={styles.taskButton} onPress={handleUpdate}>
          <Text style={styles.taskText}>Update</Text>
          {/* <Entypo
            style={styles.vectorIconsContainer}
            name="add-to-list"
            size={24}
            color="#fff"
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 0,
  },
  input: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderColor: '#9d9d9d',
    color: '#5f5f5f',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 6,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  text: {
    color: '#9d9d9d',
    fontSize: 14,
    fontWeight: '600',
  },
  taskButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16.2,
    borderWidth: 1,
    borderColor: '#3a3acb',
    backgroundColor: '#3a3acb',
    borderRadius: 6,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  taskText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  vectorIconsContainer: {
    marginLeft: 8,
  },
});

export default EditForm;
