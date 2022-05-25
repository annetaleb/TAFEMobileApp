import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './screens/Index';
import Create from './screens/Create';
import Details from './screens/Details';
import Edit from './screens/Edit';
import Delete from './screens/Delete';
// Anne Taleb Mobile app ROI contact List

export default function App() {

  const Stack = createNativeStackNavigator(); 
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: '#cb6d4f' } }}
        >
        
          <Stack.Screen name="Index" component={Index}   options={{...ho,title: 'ROI Contact List'}}/>
          <Stack.Screen name="Create" component={Create} options={{...ho, title: 'Add Contact' }}/>
          <Stack.Screen name="Details" component={Details} options={{...ho, title: 'Contact Details' }}/>
          <Stack.Screen name="Edit" component={Edit} options={{...ho,title: 'Update Contact' }}/>
          <Stack.Screen name="Delete" component={Delete} options={{...ho, title: 'Delete Contact' }}/>
        </Stack.Navigator>
    </NavigationContainer>
  ); 
}

let ho ={
  
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    
  },
  imageBackground:{ 
     source: {uri: 'https://i.ibb.co/wdDP7PD/ROI-COLOR.png'},
  
  alignItems: 'right',
  },
  headerStyle: {
    backgroundColor: '#cb6d4f',
  }
  
}; 