import { Text, View, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function Pagina1() {
  const router = useRouter();

  return (
    <Box className="flex-1 bg-[#E8D8B0]">

      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 50,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >

        {/* CABEÇALHO */}
        <View className="items-center mb-8">

          <Text className="text-[#493426] text-4xl font-extrabold text-center">
            AVATAR
          </Text>

          <Text className="text-[#8A5A35] text-lg font-bold mt-1">
            A Lenda de Aang
          </Text>

          <View className="w-20 h-1 bg-[#8A5A35] rounded-full mt-4" />

          <Text className="text-[#665142] text-center mt-4">
            Água • Terra • Fogo • Ar
          </Text>

        </View>


        {/* BANNER DO AVATAR */}
        <View className="bg-[#F4E7C5] rounded-3xl p-6 border-2 border-[#A77B4D] mb-8">

          <Text className="text-[#8A5A35] text-sm uppercase font-bold">
            O mundo de Avatar
          </Text>

          <Text className="text-[#35291F] text-3xl font-extrabold mt-2">
            As quatro nações
          </Text>

          <Text className="text-[#665142] text-base leading-6 mt-3">
            O mundo é dividido entre as Tribos da Água,
            o Reino da Terra, a Nação do Fogo e os Nômades do Ar.
          </Text>

          <Text className="text-[#665142] text-base leading-6 mt-3">
            O Avatar é responsável por dominar os quatro elementos
            e manter o equilíbrio entre as nações.
          </Text>

        </View>


        {/* QUATRO ELEMENTOS */}
        <Text className="text-[#35291F] text-2xl font-extrabold mb-4">
          Os Quatro Elementos
        </Text>

        <View className="flex-row flex-wrap justify-between mb-8">

          {/* ÁGUA */}
          <View className="bg-[#3979A8] rounded-2xl p-4 w-[48%] mb-4">
            <Text className="text-white text-2xl">
              💧
            </Text>

            <Text className="text-white text-xl font-extrabold mt-2">
              Água
            </Text>

            <Text className="text-[#D6EEFF] mt-1">
              Tribos da Água
            </Text>
          </View>


          {/* TERRA */}
          <View className="bg-[#617A3D] rounded-2xl p-4 w-[48%] mb-4">
            <Text className="text-white text-2xl">
              🪨
            </Text>

            <Text className="text-white text-xl font-extrabold mt-2">
              Terra
            </Text>

            <Text className="text-[#E3EBCF] mt-1">
              Reino da Terra
            </Text>
          </View>


          {/* FOGO */}
          <View className="bg-[#A93B2D] rounded-2xl p-4 w-[48%]">
            <Text className="text-white text-2xl">
              🔥
            </Text>

            <Text className="text-white text-xl font-extrabold mt-2">
              Fogo
            </Text>

            <Text className="text-[#FFD8C7] mt-1">
              Nação do Fogo
            </Text>
          </View>


          {/* AR */}
          <View className="bg-[#D69B3C] rounded-2xl p-4 w-[48%]">
            <Text className="text-white text-2xl">
              🌪️
            </Text>

            <Text className="text-white text-xl font-extrabold mt-2">
              Ar
            </Text>

            <Text className="text-[#FFF1C7] mt-1">
              Nômades do Ar
            </Text>
          </View>

        </View>


        {/* PERSONAGENS */}
        <Text className="text-[#35291F] text-2xl font-extrabold mb-2">
          Personagens
        </Text>

        <Text className="text-[#766050] mb-5">
          Conheça alguns dos principais dobradores da série.
        </Text>


        {/* AANG */}
        <View className="bg-[#D99B3D] rounded-3xl p-5 mb-4">
          <View className="flex-row justify-between items-center">

            <View>
              <Text className="text-white text-2xl font-extrabold">
                Aang
              </Text>

              <Text className="text-[#FFF0C5] font-bold mt-1">
                Avatar • Nômade do Ar
              </Text>
            </View>

            <Text className="text-4xl">
              🌪️
            </Text>

          </View>

          <View className="h-[1px] bg-[#F5C76D] my-4" />

          <Text className="text-white leading-5">
            O último dobrador de ar de sua época e o Avatar.
            Sua missão é aprender Água, Terra e Fogo para dominar
            os quatro elementos e restaurar o equilíbrio do mundo.
          </Text>

          <Text className="text-[#FFF0C5] font-bold mt-3">
            Dobras: Ar • Água • Terra • Fogo
          </Text>

          <Pressable
  className="bg-[#FFF0C5] rounded-xl p-3 mt-4 items-center"
  onPress={() => router.push('/aang')}
>
  <Text className="text-[#493426] font-extrabold">
    Ver imagem
  </Text>
</Pressable>
        </View>


        {/* KATARA */}
        <View className="bg-[#479bd8] rounded-3xl p-5 mb-4">
          <View className="flex-row justify-between items-center">

            <View>
              <Text className="text-white text-2xl font-extrabold">
                Katara
              </Text>

              <Text className="text-[#D6EEFF] font-bold mt-1">
                Tribo da Água do Sul
              </Text>
            </View>

            <Text className="text-4xl">
              💧
            </Text>

          </View>

          <View className="h-[1px] bg-[#6CA4CA] my-4" />

          <Text className="text-white leading-5">
            Katara é uma habilidosa dobradora de água e uma das
            principais companheiras de Aang durante sua jornada.
          </Text>

          <Text className="text-[#D6EEFF] font-bold mt-3">
            Dobra: Água
          </Text>
          <Pressable
  className="bg-[#D6EEFF] rounded-xl p-3 mt-4 items-center"
  onPress={() => router.push('/katara')}
>
  <Text className="text-[#245675] font-extrabold">
    Ver imagem
  </Text>
</Pressable>

        </View>


        {/* TOPH */}
        <View className="bg-[#3a6332] rounded-3xl p-5 mb-4">
          <View className="flex-row justify-between items-center">

            <View>
              <Text className="text-white text-2xl font-extrabold">
                Toph Beifong
              </Text>

              <Text className="text-[#E5EDCF] font-bold mt-1">
                Reino da Terra
              </Text>
            </View>

            <Text className="text-4xl">
              🪨
            </Text>

          </View>

          <View className="h-[1px] bg-[#829957] my-4" />

          <Text className="text-white leading-5">
            Uma das maiores dobradoras de terra da série.
            Toph utiliza sua conexão com o solo para perceber
            vibrações ao seu redor.
          </Text>

          <Text className="text-[#E5EDCF] font-bold mt-3">
            Dobras: Terra • Metal
          </Text>

          <Pressable
  className="bg-[#E5EDCF] rounded-xl p-3 mt-4 items-center"
  onPress={() => router.push('/toph')}
>
  <Text className="text-[#405526] font-extrabold">
    Ver imagem
  </Text>
</Pressable>

        </View>


        {/* ZUKO */}
        <View className="bg-[#ff2c2c] rounded-3xl p-5 mb-4">
          <View className="flex-row justify-between items-center">

            <View>
              <Text className="text-white text-2xl font-extrabold">
                Zuko
              </Text>

              <Text className="text-[#FFD8C7] font-bold mt-1">
                Nação do Fogo
              </Text>
            </View>

            <Text className="text-4xl">
              🔥
            </Text>

          </View>

          <View className="h-[1px] bg-[#CC6652] my-4" />

          <Text className="text-white leading-5">
            Príncipe da Nação do Fogo e um poderoso dobrador.
            Sua jornada é marcada por conflitos sobre honra,
            família e sobre qual caminho deseja seguir.
          </Text>

          <Text className="text-[#FFD8C7] font-bold mt-3">
            Dobra: Fogo
          </Text>

          <Pressable
  className="bg-[#FFD8C7] rounded-xl p-3 mt-4 items-center"
  onPress={() => router.push('/zuko')}
>
  <Text className="text-[#7A271E] font-extrabold">
    Ver imagem
  </Text>
</Pressable>

        </View>


        {/* OUTROS PERSONAGENS */}
        <Text className="text-[#35291F] text-2xl font-extrabold mb-4">
          Explorar o mundo
        </Text>

        <View className="bg-[#F4E7C5] border border-[#B99667] rounded-3xl p-5 mb-5">

          <Text className="text-[#493426] text-xl font-extrabold">
            Outros personagens
          </Text>

          <Text className="text-[#766050] leading-6 mt-3">
            Sokka • Suki • Iroh • Azula • Appa • Momo
          </Text>

          <Text className="text-[#766050] leading-6 mt-2">
            Além deles, o universo possui personagens históricos
            importantes, como Avatar Roku e Avatar Kyoshi.
          </Text>

        </View>


        {/* MENU */}
        <View className="flex-row justify-between">

          <Pressable
            className="bg-[#493426] rounded-2xl p-5 w-[48%]"
            onPress={() => router.push('/Pagina2')}
          >
            <Text className="text-[#F4E7C5] text-lg font-extrabold">
              Nações
            </Text>

            <Text className="text-[#D5C09E] mt-2">
              Conhecer o mundo
            </Text>
          </Pressable>


          <Pressable
            className="bg-[#493426] rounded-2xl p-5 w-[48%]"
            onPress={() => router.push('/Pagina3')}
          >
            <Text className="text-[#F4E7C5] text-lg font-extrabold">
              Avatares
            </Text>

            <Text className="text-[#D5C09E] mt-2">
              Ciclo Avatar
            </Text>
          </Pressable>

        </View>


        {/* RODAPÉ */}
        <View className="items-center mt-10">

          <View className="w-16 h-[1px] bg-[#A77B4D] mb-4" />

          <Text className="text-[#806B59] text-xs text-center">
            Água • Terra • Fogo • Ar
          </Text>

          <Text className="text-[#A08C78] text-xs text-center mt-2">
            O equilíbrio entre as quatro nações
          </Text>

        </View>

      </ScrollView>

    </Box>
  );
}