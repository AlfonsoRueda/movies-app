import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {DetailsScreen} from '../screens/Details/DetailsScreen';

export type RootStackParms = {
  Home: undefined;
  Details: {movieId: number};
};

const Stack = createStackNavigator<RootStackParms>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
