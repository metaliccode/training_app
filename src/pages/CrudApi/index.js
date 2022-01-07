import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Item = ({nama, email, divisi, onPress, onDelete}) => {
  return (
    <View style={styles.containerItem}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.itemText}>{nama}</Text>
        <Text>{email}</Text>
        <Text>{divisi}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const CrudApi = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [divisi, setDivisi] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  // did mount
  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      // nama : nama,
      nama,
      email,
      divisi,
    };

    // logika jika methode post/put
    if (button === 'Simpan') {
      axios.post('http://10.0.2.2:3000/users', data).then(res => {
        console.log('res POST :', res);
        setNama('');
        setEmail('');
        setDivisi('');
        getData();
      });
    } else if (button === 'Update') {
      console.log('tes up');
      // update
      axios
        .put(`http://10.0.2.2:3000/users/${selectedUser.id}`, data)
        .then(res => {
          console.log('updated: ', res);
          setNama('');
          setEmail('');
          setDivisi('');
          getData();
          setButton('Simpan');
        });
    }
  };

  // selected data
  const selectItem = item => {
    console.log('select: ', item);
    // ini untuk form
    setNama(item.nama);
    setEmail(item.email);
    setDivisi(item.divisi);
    // ini state baru untuk item
    setSelectedUser(item);
    setButton('Update');
  };

  // getData dari API
  const getData = () => {
    axios.get('http://10.0.2.2:3000/users').then(res => {
      console.log('res get: ', res.data);
      setUsers(res.data);
    });
  };

  // delete API
  const deleteItem = item => {
    console.log('selected item for delete:', item);
    axios.delete(`http://10.0.2.2:3000/users/${item.id}`).then(res => {
      console.log('berhasil:', res);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.container}>CRUD API</Text>
      <Text>Data Pegawai</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={nama}
        onChangeText={value => setNama(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Divisi"
        style={styles.input}
        value={divisi}
        onChangeText={value => setDivisi(value)}
      />
      <Button title={button} onPress={submit} />
      {users.map(user => {
        return (
          <Item
            key={user.id}
            nama={user.nama}
            email={user.email}
            divisi={user.divisi}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert(
                'Peringatan !',
                'Anda Yakin akan menghapus data ini ?',
                [
                  {
                    text: 'Tidak',
                    onPress: () => {
                      console.log('btn tidak');
                    },
                  },
                  {
                    text: 'Ya',
                    onPress: () => deleteItem(user),
                  },
                ],
              )
            }
          />
        );
      })}
    </View>
  );
};

export default CrudApi;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    textAlign: 'center',
  },
  input: {
    marginVertical: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#ffeaa7',
  },
  delete: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
