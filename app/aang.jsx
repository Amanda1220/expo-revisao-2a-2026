import { Text, View, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function Aang() {
  const router = useRouter();

  return (
    <Box className="flex-1 bg-[#E8D8B0] justify-center items-center px-6">

      <Text className="text-[#493426] text-4xl font-extrabold mb-2">
        Aang
      </Text>

      <Text className="text-[#D99B3D] text-lg font-bold mb-6">
        Avatar • Nômade do Ar
      </Text>

      <View className="w-full bg-[#F4E7C5] rounded-3xl p-5 border-2 border-[#D99B3D]">

        <Image
          source={require('../assets/aang.jpg')}
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