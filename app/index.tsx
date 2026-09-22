import { StyleSheet, View } from 'react-native';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { Button, ButtonText } from './components/ui/button';

export default function App() {
  return (
    
    <GluestackUIProvider mode="dark">
      <View style={styles.container}>
        <Button classNamw="bg-fuchsia-500">
          <ButtonText>Primeiro Botão</ButtonText>
        </Button>
    </View>
    </GluestackUIProvider>
  
  );
}

