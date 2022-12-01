import NewGame from '../page/NewGame';
import { createStackNavigator } from '@react-navigation/stack';

const stackRoutes = createStackNavigator();


const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown:false,
            cardStyle: {
                backgroundColor: 'rgb(243,243,243)'
            }
        }}


    >

        <stackRoutes.Screen
            name="NewGame"
            component={NewGame}
        />


    </stackRoutes.Navigator>

)

export default AppRoutes;