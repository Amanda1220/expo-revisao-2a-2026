import { Text, View, ScrollView, Pressable, Image,} from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';


export default function Perfil() {

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

        <View className="flex-row justify-between items-center mb-8">

          <Pressable
            className="bg-[#493426] rounded-xl px-4 py-3"
            onPress={() => router.back()}
          >

            <Text className="text-[#F4E7C5] font-extrabold">
              ←
            </Text>

          </Pressable>


          <Text className="text-[#493426] text-xl font-extrabold">
            Meu Perfil
          </Text>


          <Text className="text-2xl">
            ☯️
          </Text>

        </View>



        {/* ================================= */}
        {/* FOTO DE PERFIL */}
        {/* ================================= */}

        <View className="items-center mb-8">

          <View
            className="
              w-32
              h-32
              rounded-full
              border-4
              border-[#493426]
              overflow-hidden
              bg-[#F4E7C5]
            "
          >

            <Image

              source={require('../assets/perfil.jpg')}

              className="w-full h-full"

              resizeMode="cover"

            />

          </View>


          {/* NOME */}

          <Text
            className="
              text-[#35291F]
              text-3xl
              font-extrabold
              mt-5
            "
          >
            Fã de Avatar
          </Text>


          <Text
            className="
              text-[#8A5A35]
              font-bold
              mt-1
            "
          >
            @mestre_dos_elementos
          </Text>


          <Text
            className="
              text-[#665142]
              text-center
              mt-4
            "
          >
            Água 💧 • Terra 🪨 • Fogo 🔥 • Ar 🌪️
          </Text>

        </View>



        {/* ================================= */}
        {/* SOBRE MIM */}
        {/* ================================= */}

        <Text
          className="
            text-[#35291F]
            text-2xl
            font-extrabold
            mb-4
          "
        >
          Sobre mim
        </Text>


        <View
          className="
            bg-[#F4E7C5]
            rounded-3xl
            border-2
            border-[#A77B4D]
            p-6
            mb-8
          "
        >

          <Text
            className="
              text-[#493426]
              text-xl
              font-extrabold
            "
          >
            🌏 Minha jornada
          </Text>


          <Text
            className="
              text-[#665142]
              leading-6
              mt-4
            "
          >
            Sou fã de Avatar: A Lenda de Aang e adoro conhecer
            cada vez mais sobre esse universo.
          </Text>


          <Text
            className="
              text-[#665142]
              leading-6
              mt-3
            "
          >
            Gosto dos personagens, das quatro nações, dos animais,
            das diferentes formas de dobra e principalmente das
            histórias e ensinamentos apresentados durante a série.
          </Text>


          <Text
            className="
              text-[#665142]
              leading-6
              mt-3
            "
          >
            Este perfil é o meu espaço para reunir algumas das
            coisas que mais gosto no mundo de Avatar.
          </Text>

        </View>



        {/* ================================= */}
        {/* MEUS FAVORITOS */}
        {/* ================================= */}

        <Text
          className="
            text-[#35291F]
            text-2xl
            font-extrabold
            mb-2
          "
        >
          Meus favoritos
        </Text>


        <Text
          className="
            text-[#766050]
            mb-5
          "
        >
          Algumas das minhas escolhas favoritas no mundo de Avatar.
        </Text>



        {/* ================================= */}
        {/* ZUKO */}
        {/* ================================= */}

        <View
          className="
            bg-[#A93B2D]
            rounded-3xl
            p-6
            mb-5
          "
        >

          <View className="flex-row justify-between items-center">

            <View className="flex-1">

              <Text className="text-[#FFD8C7] font-bold">
                PERSONAGEM FAVORITO
              </Text>

              <Text className="text-white text-3xl font-extrabold mt-1">
                Zuko
              </Text>

            </View>


            <Text className="text-5xl">
              🔥
            </Text>

          </View>


          <View className="h-[1px] bg-[#CC6652] my-5" />


          <Text className="text-[#FFE5DA] leading-6">

            Zuko é meu personagem favorito por sua trajetória
            durante a série. Sua história envolve honra, família,
            identidade e a descoberta do caminho que realmente
            deseja seguir.

          </Text>


          <View
            className="
              bg-[#842A20]
              rounded-2xl
              p-4
              mt-5
            "
          >

            <Text className="text-[#FFD8C7] font-extrabold">
              🔥 Nação do Fogo
            </Text>

            <Text className="text-white mt-2">
              Dobrador de Fogo
            </Text>

          </View>

        </View>



        {/* ================================= */}
        {/* TRIBO DA ÁGUA */}
        {/* ================================= */}

        <View
          className="
            bg-[#3979A8]
            rounded-3xl
            p-6
            mb-5
          "
        >

          <View className="flex-row justify-between items-center">

            <View className="flex-1">

              <Text className="text-[#D6EEFF] font-bold">
                NAÇÃO FAVORITA
              </Text>

              <Text className="text-white text-3xl font-extrabold mt-1">
                Tribos da Água
              </Text>

            </View>


            <Text className="text-5xl">
              💧
            </Text>

          </View>


          <View className="h-[1px] bg-[#6CA4CA] my-5" />


          <Text className="text-[#E5F5FF] leading-6">

            As Tribos da Água são minhas favoritas por sua cultura
            e pela forte importância da comunidade e da família.

          </Text>


          <Text className="text-[#E5F5FF] leading-6 mt-3">

            A dobra de água também possui um estilo baseado em
            movimento, adaptação e no uso da força do adversário
            a favor do próprio dobrador.

          </Text>


          <View
            className="
              bg-[#2C668E]
              rounded-2xl
              p-4
              mt-5
            "
          >

            <Text className="text-[#D6EEFF] font-extrabold">
              💧 Destaques
            </Text>

            <Text className="text-white mt-2">
              Katara • Sokka • Tribo do Norte • Tribo do Sul
            </Text>

          </View>

        </View>



        {/* ================================= */}
        {/* METAL */}
        {/* ================================= */}

        <View
          className="
            bg-[#607A3C]
            rounded-3xl
            p-6
            mb-8
          "
        >

          <View className="flex-row justify-between items-center">

            <View className="flex-1">

              <Text className="text-[#E5EDCF] font-bold">
                SUBDOBRA FAVORITA
              </Text>

              <Text className="text-white text-3xl font-extrabold mt-1">
                Metal
              </Text>

            </View>


            <Text className="text-5xl">
              ⚙️
            </Text>

          </View>


          <View className="h-[1px] bg-[#829957] my-5" />


          <Text className="text-[#EDF2DF] leading-6">

            A dobra de metal é uma técnica avançada derivada
            da dobra de terra.

          </Text>


          <Text className="text-[#EDF2DF] leading-6 mt-3">

            Toph descobriu que poderia dobrar as pequenas
            partículas de terra presentes no metal, criando
            uma técnica que antes era considerada impossível.

          </Text>


          <View
            className="
              bg-[#4B612E]
              rounded-2xl
              p-4
              mt-5
            "
          >

            <Text className="text-[#E5EDCF] font-extrabold">
              🪨 Primeira dobradora
            </Text>

            <Text className="text-white text-lg font-bold mt-2">
              Toph Beifong
            </Text>

          </View>

        </View>



        {/* ================================= */}
        {/* MINHA IDENTIDADE AVATAR */}
        {/* ================================= */}

        <Text
          className="
            text-[#35291F]
            text-2xl
            font-extrabold
            mb-4
          "
        >
          Meu perfil Avatar
        </Text>


        <View className="flex-row flex-wrap justify-between mb-8">


          {/* PERSONAGEM */}

          <View
            className="
              bg-[#A93B2D]
              rounded-2xl
              p-4
              w-[48%]
              mb-4
            "
          >

            <Text className="text-3xl">
              🔥
            </Text>

            <Text className="text-white font-extrabold mt-2">
              Personagem
            </Text>

            <Text className="text-[#FFD8C7] mt-1">
              Zuko
            </Text>

          </View>



          {/* NAÇÃO */}

          <View
            className="
              bg-[#3979A8]
              rounded-2xl
              p-4
              w-[48%]
              mb-4
            "
          >

            <Text className="text-3xl">
              💧
            </Text>

            <Text className="text-white font-extrabold mt-2">
              Nação
            </Text>

            <Text className="text-[#D6EEFF] mt-1">
              Água
            </Text>

          </View>



          {/* SUBDOBRA */}

          <View
            className="
              bg-[#607A3C]
              rounded-2xl
              p-4
              w-[48%]
            "
          >

            <Text className="text-3xl">
              ⚙️
            </Text>

            <Text className="text-white font-extrabold mt-2">
              Subdobra
            </Text>

            <Text className="text-[#E5EDCF] mt-1">
              Metal
            </Text>

          </View>



          {/* UNIVERSO */}

          <View
            className="
              bg-[#D69B3C]
              rounded-2xl
              p-4
              w-[48%]
            "
          >

            <Text className="text-3xl">
              ☯️
            </Text>

            <Text className="text-white font-extrabold mt-2">
              Universo
            </Text>

            <Text className="text-[#FFF1C7] mt-1">
              Avatar
            </Text>

          </View>

        </View>



        {/* ================================= */}
        {/* FRASE */}
        {/* ================================= */}

        <View
          className="
            bg-[#493426]
            rounded-3xl
            p-6
            mb-8
          "
        >

          <Text className="text-[#D5C09E] text-sm font-bold">
            MEU CANTINHO
          </Text>


          <Text
            className="
              text-[#F4E7C5]
              text-xl
              font-extrabold
              leading-7
              mt-3
            "
          >

            Um perfil dedicado às histórias, personagens
            e ao incrível mundo de Avatar.

          </Text>


          <Text className="text-[#D5C09E] mt-4">

            Água 💧 • Terra 🪨 • Fogo 🔥 • Ar 🌪️

          </Text>

        </View>



        {/* ================================= */}
        {/* VOLTAR */}
        {/* ================================= */}

        <Pressable
          className="bg-[#493426] rounded-2xl p-4 items-center"
          onPress={() => router.back()}
        >

          <Text className="text-[#F4E7C5] text-lg font-extrabold">
            ← Voltar
          </Text>

        </Pressable>



        {/* RODAPÉ */}

        <View className="items-center mt-10">

          <View className="w-16 h-[1px] bg-[#A77B4D] mb-4" />


          <Text className="text-[#806B59] text-xs text-center">
            AVATAR • A LENDA DE AANG
          </Text>


          <Text className="text-[#A08C78] text-xs text-center mt-2">
            Meu perfil no mundo dos quatro elementos
          </Text>

        </View>


      </ScrollView>

    </Box>

  );

}