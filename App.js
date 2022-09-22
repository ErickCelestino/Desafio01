import { StyleSheet,StatusBar, View, Text } from "react-native";
import Menu from "./components/Menu";
import { useState } from "react";


const styles = StyleSheet.create({
  header:{
    backgroundColor: '#42CDCA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 40
  },
  textColor: {
    color: 'white'
  }
});

const coffeIcon = require('./assets/coffee-cup.png');
const sweetIcon = require('./assets/croissant.png');
const knifeIcon = require('./assets/talheres.png');
const wineIcon = require('./assets/wine-glass.png');

const App = () => {
  const [count, setCount] = useState(0);

  const menuInformations = [
    {
      title: 'coffe',
      subTitle: 'Choose between differente types of coffe',
      icon: coffeIcon,
      color: '#4EA3D2',
      value: 2
    },
    {
      title: 'Sweent',
      subTitle: 'Choose de best sweet as you can',
      color: '#4B81BC',
      icon: sweetIcon,
      value: 4
    },
    {
      title: 'Food',
      subTitle: 'Hmm, here you can choose a good food',
      icon: knifeIcon,
      color: '#63539F',
      value: 6
    },
    {
      title: 'Drink',
      subTitle: 'Lets drink, just choose what you want',
      icon: wineIcon,
      color: '#604272',
      value: 10
    },   
  ]

  const soma = (value) => {
    setCount(count + value);
  };

  return(
    
    <View>
      <StatusBar/>
        <View style={styles.header}>
          <Text style={styles.textColor}>MENU</Text>
          <Text style={styles.textColor}>CLIQUES: {count}</Text>
        </View>
        {menuInformations.map((element) =>{
          return(
            <Menu
              title={element.title}
              subTitle={element.subTitle}
              icon={element.icon}
              bgColor={element.color}
              somar={soma}
              value={element.value}
            />
          );
        })}
    </View>
  );
}
export default App;