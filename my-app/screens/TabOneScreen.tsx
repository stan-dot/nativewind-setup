
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from 'react-native';
import { RootTabScreenProps } from '../navigation/types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View className='flex items-center justify-center'>
      <Text className='text-xl font-bold'>Tab One</Text>
      <View className='my-6 h-1 w-4/5'  />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}
