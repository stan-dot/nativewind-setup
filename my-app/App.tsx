import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { supabase } from './lib/initSupabase';
import useCachedResources from './hooks/useCachedResources';
import { UserContextProvider, useUser } from './components/UserContext';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Auth from './components/Auth';
import "./styles.css";

const Container = () => {
  const { user } = useUser()
  const colorScheme = useColorScheme();
  console.log('in the container');

  // return <Navigation colorScheme={colorScheme} />
  return user ?
    <Navigation colorScheme={colorScheme} />
    : <Auth />
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
supabase.auth.onAuthStateChange((event, session) => {
  if (event == 'SIGNED_IN') console.log('SIGNED_IN', session)
})


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <UserContextProvider>


      <SafeAreaProvider>
      <Container/>
        <StatusBar />
      </SafeAreaProvider>
      </UserContextProvider>
    );
  }
}
