import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ContatoInput = (props) => {
    const [nome, setNome] = useState('');
    const capturarNome = (nome) => {setNome(nome)};
    const [telefone, setTelefone] = useState('');
    const capturarTelefone = (telefone) => {setTelefone(telefone)};

    return(
        <View style={styles.contatoInputView}>
            <TextInput
                placeholder="Digite o nome..."
                style={styles.contatoTextInput}
                onChangeText={capturarNome}
                value={nome}
            />
            <TextInput
                placeholder="Digite o telefone..."
                style={styles.contatoTextInput}
                onChangeText={capturarTelefone}
                value={telefone}
            />
            <Button
                style={styles.contatoInputButton}
                title="Inserir Contato"
                onPress={() => {
                    props.onAdicionarContato(nome, telefone);
                    setNome('');
                    setTelefone('');
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contatoInputView: {
        alignItems: 'center',
        marginBottom: 12
    },
    contatoTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 4,
        padding: 2,
        textAlign: 'center'
    },
    contatoInputButton: {
        width: '80%'
    }
});

export default ContatoInput;
