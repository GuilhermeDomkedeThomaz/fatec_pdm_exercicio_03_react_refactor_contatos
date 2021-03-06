import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const Contato = (props) => {
    return (
        <TouchableNativeFeedback
            onPress={props.onSelect.bind(this, props.nome, props.telefone)}
            onLongPress={props.onDelete.bind(this, props.chave)}>
            <View style={styles.contatoNaLista}>
                <Text>{props.nome}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    contatoNaLista: {
        padding: 12,
        backgroundColor: '#CCC',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8,
        alignItems: 'center'
    }
});

export default Contato;
