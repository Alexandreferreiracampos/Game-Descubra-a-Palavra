import NewGame from '../page/NewGame';
import Game from '../page/Game';
import UpLevel from '../page/UpLevel';
import { createStackNavigator } from '@react-navigation/stack';

const stackRoutes = createStackNavigator();


const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown:false,
            headerTintColor: 'red',
            cardStyle: {
                backgroundColor: 'rgb(142,120,217)'
            },
            
        }}


    >

        <stackRoutes.Screen
            name="NewGame"
            component={NewGame}
        />
        <stackRoutes.Screen
            name="Game"
            component={Game}
        />
        <stackRoutes.Screen
            name="UpLevel"
            component={UpLevel}
        />


    </stackRoutes.Navigator>

)

export default AppRoutes;