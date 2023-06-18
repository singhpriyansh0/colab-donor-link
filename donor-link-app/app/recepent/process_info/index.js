import { Link, Stack, useNavigation, useRouter } from 'expo-router';
import {View, Text, SafeAreaView, Image, Button, TouchableOpacity} from 'react-native';
import User_Check from '../../../components/User_Check';
import Resp_info from '../../../components/Resp_info'


const Process_info = () => {

    
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
                <Resp_info/>
            </View>
        </SafeAreaView>
    )
}

export default Process_info