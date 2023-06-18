import { Link, Stack, useNavigation, useRouter } from 'expo-router';
import {View, Text, SafeAreaView, Image, Button, TouchableOpacity} from 'react-native';
import OnboardingLogo from '../../components/OnboardingLogo';
import Email_Auth from '../../components/Email_Auth';


const Email_auth = () => {

    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
            <Stack.Screen
            
                options={{
                    headerStyle: { backgroundColor: '#EEEEEE', height: 0 },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}
            />
            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'flex-start', height: '100%' }}>
               
                {/* Everything related to signIn/signUp will go here please refer to https://www.figma.com/proto/Q3LZBBY86wXCzwUVvQvpfz/Colab-19---Team-11?type=design&node-id=236-9997&scaling=scale-down&page-id=0%3A1&starting-point-node-id=141%3A6438&show-proto-sidebar=1  */}
                <Email_Auth/>
            </View>
        </SafeAreaView>
    )
}

export default Email_auth