import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('');

  const cadastrar = () => {
 
    console.log('Nome:', nome);
    console.log('Gênero:', genero);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    console.log('Email:', email);
    console.log('Confirmar Email:', confirmarEmail);
    console.log('CPF:', cpf);
    console.log('Idioma do Currículo:', idioma);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro com hook:</Text>

      <View style={styles.form}>
        <TextInput style={styles.inputs} placeholder="Nome" onChangeText={setNome} value={nome} />
        <TextInput style={styles.inputs} placeholder="Gênero" onChangeText={setGenero} value={genero}/>
        <TextInput style={styles.inputs} placeholder="Data de Nascimento" onChangeText={setDataNascimento} value={dataNascimento}/>
        <TextInput style={styles.inputs}  placeholder="Usuário" onChangeText={setUsuario} value={usuario}/>
        <TextInput style={styles.inputs} placeholder="Senha"secureTextEntry={true} onChangeText={setSenha} value={senha}/>
        <TextInput style={styles.inputs} placeholder="Email" onChangeText={setEmail} value={email}/>
        <TextInput style={styles.inputs} placeholder="Confirme seu email" onChangeText={setConfirmarEmail} value={confirmarEmail}/>
        <TextInput style={styles.inputs} placeholder="CPF" onChangeText={setCpf} value={cpf}/>
        <TextInput style={styles.inputs} placeholder="Idioma do Currículo" onChangeText={setIdioma} value={idioma}/>
      </View>

      <TouchableOpacity style={styles.button} onPress={cadastrar}>
        Cadastrar
      </TouchableOpacity>

      <View style={styles.valores}>
        <Text>Valores informados:</Text>
        <Text>Nome: {nome}</Text>
        <Text>Gênero: {genero}</Text>
        <Text>Data de Nascimento: {dataNascimento}</Text>
        <Text>Usuário: {usuario}</Text>
        <Text>Email: {email}</Text>
        <Text>CPF: {cpf}</Text>
        <Text>Idioma do Currículo: {idioma}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  inputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    width: '50%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  valores: {
    marginTop: 20,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 14
  },
});
