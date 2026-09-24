import { Text, View, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';

export default function Elementos() {
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
            OS QUATRO ELEMENTOS
          </Text>

          <Text className="text-[#8A5A35] text-lg font-bold mt-2">
            Avatar: A Lenda de Aang
          </Text>

          <View className="w-20 h-1 bg-[#8A5A35] rounded-full mt-4" />

          <Text className="text-[#665142] text-center mt-4 leading-6">
            Cada elemento possui sua própria filosofia,
            estilo de luta e técnicas especiais.
          </Text>

        </View>


        {/* INTRODUÇÃO */}
        <View className="bg-[#F4E7C5] rounded-3xl p-6 border-2 border-[#A77B4D] mb-8">

          <Text className="text-[#8A5A35] text-sm uppercase font-bold">
            Dobra elemental
          </Text>

          <Text className="text-[#35291F] text-2xl font-extrabold mt-2">
            O equilíbrio dos elementos
          </Text>

          <Text className="text-[#665142] leading-6 mt-3">
            No mundo de Avatar, algumas pessoas possuem a capacidade
            de controlar um dos quatro elementos: Água, Terra, Fogo
            ou Ar.
          </Text>

          <Text className="text-[#665142] leading-6 mt-3">
            Cada estilo de dobra está relacionado à cultura,
            filosofia e modo de vida de sua respectiva nação.
          </Text>

        </View>


        {/* ===================== ÁGUA ===================== */}

        <View className="bg-[#3979A8] rounded-3xl p-6 mb-5">

          <View className="flex-row justify-between items-center">

            <View>
              <Text className="text-[#D6EEFF] font-bold">
                TRIBOS DA ÁGUA
              </Text>

              <Text className="text-white text-3xl font-extrabold mt-1">
                Água
              </Text>
            </View>

            <Text className="text-5xl">
              💧
            </Text>

          </View>

          <View className="h-[1px] bg-[#6CA4CA] my-5" />

          <Text className="text-white text-lg font-extrabold">
            💧 Dobra de Água
          </Text>

          <Text className="text-[#E5F5FF] leading-6 mt-2">
            Os dobradores de água utilizam movimentos fluidos
            para controlar e redirecionar a água ao seu redor.
            O estilo valoriza adaptação, equilíbrio e movimento.
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            ❄️ Subdobras e técnicas
          </Text>

          <Text className="text-[#E5F5FF] leading-7 mt-2">
            • Dobra de gelo{'\n'}
            • Cura com água{'\n'}
            • Dobra de plantas{'\n'}
            • Dobra de sangue
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            📍 Onde é mais presente?
          </Text>

          <Text className="text-[#E5F5FF] leading-6 mt-2">
            É principalmente encontrada na Tribo da Água do Norte
            e na Tribo da Água do Sul. Também existem dobradores
            de água no Pântano Nebuloso.
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            👤 Personagens
          </Text>

          <Text className="text-[#E5F5FF] mt-2">
            Katara • Pakku • Hama
          </Text>


          <View className="bg-[#2C668E] rounded-2xl p-4 mt-5">

            <Text className="text-[#D6EEFF] font-extrabold">
              Curiosidade
            </Text>

            <Text className="text-white leading-5 mt-2">
              A Lua possui uma ligação especial com a dobra de água,
              influenciando a força dos dobradores.
            </Text>

          </View>

        </View>


        {/* ===================== TERRA ===================== */}

        <View className="bg-[#607A3C] rounded-3xl p-6 mb-5">

          <View className="flex-row justify-between items-center">

            <View>
              <Text className="text-[#E5EDCF] font-bold">
                REINO DA TERRA
              </Text>

              <Text className="text-white text-3xl font-extrabold mt-1">
                Terra
              </Text>
            </View>

            <Text className="text-5xl">
              🪨
            </Text>

          </View>

          <View className="h-[1px] bg-[#829957] my-5" />


          <Text className="text-white text-lg font-extrabold">
            🪨 Dobra de Terra
          </Text>

          <Text className="text-[#EDF2DF] leading-6 mt-2">
            A dobra de terra utiliza movimentos firmes e fortes.
            Seus praticantes aprendem a permanecer resistentes
            e esperar o momento certo para agir.
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            ⚙️ Subdobras e técnicas
          </Text>

          <Text className="text-[#EDF2DF] leading-7 mt-2">
            • Dobra de metal{'\n'}
            • Dobra de areia{'\n'}
            • Dobra de lava{'\n'}
            • Sentido sísmico
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            📍 Onde é mais presente?
          </Text>

          <Text className="text-[#EDF2DF] leading-6 mt-2">
            É encontrada principalmente no Reino da Terra,
            uma enorme nação que possui cidades importantes
            como Ba Sing Se e Omashu.
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            👤 Personagens
          </Text>

          <Text className="text-[#EDF2DF] mt-2">
            Toph • Bumi
          </Text>


          <View className="bg-[#4B612E] rounded-2xl p-4 mt-5">

            <Text className="text-[#E5EDCF] font-extrabold">
              Curiosidade
            </Text>

            <Text className="text-white leading-5 mt-2">
              Toph desenvolveu a dobra de metal ao perceber
              pequenas partículas de terra existentes dentro dele.
            </Text>

          </View>

        </View>


        {/* ===================== FOGO ===================== */}

        <View className="bg-[#A93B2D] rounded-3xl p-6 mb-5">

          <View className="flex-row justify-between items-center">

            <View>
              <Text className="text-[#FFD8C7] font-bold">
                NAÇÃO DO FOGO
              </Text>

              <Text className="text-white text-3xl font-extrabold mt-1">
                Fogo
              </Text>
            </View>

            <Text className="text-5xl">
              🔥
            </Text>

          </View>

          <View className="h-[1px] bg-[#CC6652] my-5" />


          <Text className="text-white text-lg font-extrabold">
            🔥 Dobra de Fogo
          </Text>

          <Text className="text-[#FFE5DA] leading-6 mt-2">
            Diferentemente de outros elementos, o fogo pode ser
            produzido pelo próprio dobrador. A técnica depende
            bastante da respiração, energia e controle.
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            ⚡ Subdobras e técnicas
          </Text>

          <Text className="text-[#FFE5DA] leading-7 mt-2">
            • Geração de relâmpagos{'\n'}
            • Redirecionamento de relâmpagos{'\n'}
            • Fogo azul
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            📍 Onde é mais presente?
          </Text>

          <Text className="text-[#FFE5DA] leading-6 mt-2">
            É principalmente associada à Nação do Fogo,
            formada por diversas ilhas e territórios.
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            👤 Personagens
          </Text>

          <Text className="text-[#FFE5DA] mt-2">
            Zuko • Iroh • Azula • Ozai
          </Text>


          <View className="bg-[#842A20] rounded-2xl p-4 mt-5">

            <Text className="text-[#FFD8C7] font-extrabold">
              Curiosidade
            </Text>

            <Text className="text-white leading-5 mt-2">
              O Sol é uma importante fonte de energia para os
              dobradores de fogo.
            </Text>

          </View>

        </View>


        {/* ===================== AR ===================== */}

        <View className="bg-[#D69B3C] rounded-3xl p-6 mb-8">

          <View className="flex-row justify-between items-center">

            <View>
              <Text className="text-[#FFF1C7] font-bold">
                NÔMADES DO AR
              </Text>

              <Text className="text-white text-3xl font-extrabold mt-1">
                Ar
              </Text>
            </View>

            <Text className="text-5xl">
              🌪️
            </Text>

          </View>

          <View className="h-[1px] bg-[#EAB85F] my-5" />


          <Text className="text-white text-lg font-extrabold">
            🌪️ Dobra de Ar
          </Text>

          <Text className="text-[#FFF6DB] leading-6 mt-2">
            A dobra de ar utiliza movimentos rápidos, circulares
            e leves. Seus praticantes procuram mobilidade e
            normalmente preferem evitar ataques diretos.
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            ☁️ Técnicas
          </Text>

          <Text className="text-[#FFF6DB] leading-7 mt-2">
            • Rajadas de ar{'\n'}
            • Tornados{'\n'}
            • Esfera de ar{'\n'}
            • Planador dos Nômades do Ar
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            📍 Onde era mais presente?
          </Text>

          <Text className="text-[#FFF6DB] leading-6 mt-2">
            Os Nômades do Ar viviam nos Templos do Ar,
            construídos em regiões altas e isoladas.
          </Text>


          <Text className="text-white text-lg font-extrabold mt-5">
            👤 Personagens
          </Text>

          <Text className="text-[#FFF6DB] mt-2">
            Aang • Gyatso
          </Text>


          <View className="bg-[#B77B27] rounded-2xl p-4 mt-5">

            <Text className="text-[#FFF1C7] font-extrabold">
              Curiosidade
            </Text>

            <Text className="text-white leading-5 mt-2">
              Os Nômades do Ar possuíam uma forte tradição
              espiritual e buscavam viver em harmonia com o mundo.
            </Text>

          </View>

        </View>


        {/* AVATAR */}
        <View className="bg-[#493426] rounded-3xl p-6 mb-8">

          <Text className="text-[#D5C09E] text-sm font-bold">
            O CICLO AVATAR
          </Text>

          <Text className="text-[#F4E7C5] text-2xl font-extrabold mt-2">
            Dominando os quatro elementos
          </Text>

          <Text className="text-[#E8D8B0] leading-6 mt-3">
            Enquanto a maioria dos dobradores controla apenas
            um elemento, o Avatar possui a capacidade de aprender
            e dominar os quatro.
          </Text>

          <Text className="text-[#E8D8B0] font-bold mt-4">
            Água 💧 • Terra 🪨 • Fogo 🔥 • Ar 🌪️
          </Text>

        </View>


        {/* BOTÃO VOLTAR */}
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
            Água • Terra • Fogo • Ar
          </Text>

          <Text className="text-[#A08C78] text-xs text-center mt-2">
            Quatro elementos. Um Avatar.
          </Text>

        </View>

      </ScrollView>

    </Box>
  );
}