import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ContatoInput from './components/ContatoInput';
import Contato from './components/Contato';

export default function App() {
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);

  const adicionarContato = (nome, telefone) => {
    setContatos(() => {
      console.log('Inserindo contato: {Nome: ' + nome, ' Telefone: ' + telefone + '}');

      let contato = {
        'nome': nome,
        'telefone': telefone
      }
      
      setContadorContatos(contadorContatos + 1);
      return [...contatos, {key: contadorContatos.toString(), value: contato}];
    });
  }

  const verContato = (nomeContato, telefoneContato) => {
    alert("Nome: " + nomeContato + "\nTelefone: " + telefoneContato);
  }

  const removerContato = (contatoKey) => {
    setContatos(contatos => {
      console.log('Removendo contatoKey: ' + contatoKey);

      return contatos.filter((contato) => {
        return contato.key !== contatoKey;
      });
    });
  }

  return(
    <View style={styles.container}>
      <ContatoInput onAdicionarContato={adicionarContato} />
      <View style={styles.contatosFlatList}>
        <FlatList
          data={contatos}
          renderItem={
            contato => (
              <Contato
                nome={contato.item.value.nome}
                telefone={contato.item.value.telefone}
                chave={contato.item.key}
                onSelect={verContato}
                onDelete={removerContato}
              />
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1
  },
  contatoNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center'
  },
  contatosFlatList: {
    width: '80%',
    alignSelf: 'center'
  }
});
