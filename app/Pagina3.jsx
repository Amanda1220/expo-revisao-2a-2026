import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import {useRouter} from 'expo-router'

export default function Pagina3() {
  const router = useRouter();
  return (
      <View className='flex-1 justify-center items-center'>
        <Text className='uppercase font-extrabold'>Página Três</Text>
      </View>

  );
}