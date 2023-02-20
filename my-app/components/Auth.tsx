import React, { useState } from 'react';
import { Alert, View, Button, TextInput } from 'react-native';
import { getAuthResponse, LoginTypes } from './LoginTypes';
export default function Auth() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<LoginTypes>('none')

  const handleLogin = async (type: LoginTypes, email: string, password: string) => {
    setLoading(type)
    const { data, error:authError } = await getAuthResponse(type, email, password);
    console.log(console.error(authError));
    if (!authError) Alert.alert('Check your email for the login link!')
    if (authError) Alert.alert(authError.message)
    console.log(data);
    // todo possibly the user context will auto-update
    // const firstUser: User = data.user;

    setLoading('none');
  }
  console.log('rendering auth');


// const containerStyle = "mt-40 p-2";

const buttonStyles = "py-4 self-stretch";

  return (
    <View>
      {/* <View style={[styles.verticallySpaced, { marginTop: 20 }]}> */}
      <View className={`py-4 self-stretch mt-20`}>
        <TextInput
          // label="Email"
          // leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text:string) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      {/* <View style={styles.verticallySpaced}> */}
      <View className={`py-4 self-stretch`}>
        <TextInput
          // label="Password"
          // leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text:string) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      {/* <View style={[styles.verticallySpaced, { marginTop: 20 }]}> */}
      <View className={`py-4 self-stretch mt-20`}>
        <Button
          title="Sign in"
          // disabled={!!loading.length}
          onPress={() => handleLogin('email', email, password)}
        />
      </View>
      {/* <View style={styles.verticallySpaced}> */}

      <View className={`py-4 self-stretch`}>
        <Button
          title="Sign up"
          // disabled={!!loading.length}
          onPress={() => handleLogin('signup', email, password)}
        />
      </View>

      {/* <View style={styles.verticallySpaced}> */}
      <View className={`py-4 self-stretch`}>
        <Button
          title="Sign in with github coming soon"
          disabled={true}
          onPress={() => handleLogin('github', email, password)}
        />
      </View>

      {/* <View style={styles.verticallySpaced}> */}
      <View className={`py-4 self-stretch`}>
        <Button
          title="Sign in with twitter coming soon"
          disabled={true}
          onPress={() => handleLogin('twitter', email, password)}
        />
      </View>
    </View>
  )
}