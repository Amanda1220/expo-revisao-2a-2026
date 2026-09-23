import { Text, View, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function Katara() {
  const router = useRouter();

  return (
    <Box className="flex-1 bg-[#E8D8B0] justify-center items-center px-6">

      <Text className="text-[#493426] text-4xl font-extrabold mb-2">
        Katara
      </Text>

      <Text className="text-[#3979A8] text-lg font-bold mb-6">
        Tribo da Água do Sul
      </Text>

      <View className="w-full bg-[#F4E7C5] rounded-3xl p-5 border-2 border-[#3979A8]">

        <Image
          source={require('../assets/katara.jpg')}
          className="w-full h-96"
          resizeMode="contain"
        />

      </View>

      <Pressable
        className="bg-[#493426] rounded-2xl px-10 py-4 mt-8"
        onPress={() => router.back()}
      >
        <Text className="text-white text-lg font-bold">
          ← Voltar
        </Text>
      </Pressable>

    </Box>
  );
}