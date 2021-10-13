import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView
} from 'react-native';

export default function App() {
  return (
    <>
    <ScrollView>
        <View style={{flexDirection: "row"}}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Qué hacer en Paris</Text>
          <ScrollView
            horizontal
          >
            <View>
              <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image
              style={styles.ciudad}
              source={require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Los mejores alojamientos</Text>
          <View>
            <View>
                <Image
                style={styles.mejores}
                source={require('./assets/img/mejores1.jpg')}
                />
            </View>
            <View>
                <Image
                style={styles.mejores}
                source={require('./assets/img/mejores2.jpg')}
                />
            </View>
            <View>
                <Image
                style={styles.mejores}
                source={require('./assets/img/mejores3.jpg')}
                />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
//FLEX: se usa como comlumna, toma todo la fila
// toma toda el espacio del padre
// si lo asignas a varios view con flex 1, se particiona 
const styles = StyleSheet.create({
  banner:{
    height:250,
    flex:1
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contenedor: {
    marginHorizontal:10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores:{
    width: '100%',
    height:200,
    flex: 1,
    marginVertical: 5
  }
});
