import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { supabase } from '../../lib/supabase';
import TextInput from '../../components/TextInput';
import Text from '../../components/Text';
import Button from '../../components/Button';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signInWithOTP() {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
    });

    setLoading(false);

    if (!error) {
      setShowOTP(true);
    }
  }

  async function verifyOTP() {
    setLoading(true);

    const params = {
      email,
      token,
      type: 'magiclink',
    } as const;

    const { error: signInError } = await supabase.auth.verifyOtp(params);

    if (signInError?.message === 'Token has expired or is invalid') {
      const { error: signUpError } = await supabase.auth.verifyOtp({
        ...params,
        type: 'signup',
      });

      if (signUpError) {
        //TODO: Handle error
        console.log('signUpError', signUpError);
      }
    }

    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.labelWrapper}>
        <Text>
          {showOTP ? 'Autenticação de dois fatores' : 'Entrar com email'}
        </Text>
      </View>

      <View style={styles.textInputWrapper}>
        {showOTP ? (
          <TextInput
            onChangeText={setToken}
            value={token}
            placeholder="123456"
            keyboardType="number-pad"
            accessibilityLabel="Verificação de dois fatores"
            accessibilityHint="Verificação de dois fatores"
          />
        ) : (
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="email@desterro.club"
            autoCapitalize="none"
            accessibilityLabel="Email"
            accessibilityHint="Email"
          />
        )}
      </View>

      {showOTP && (
        <View style={styles.descriptionWrapper}>
          <Text variant="description">
            Insira o código enviado para {email}
          </Text>
        </View>
      )}

      <View style={styles.buttonWrapper}>
        {showOTP ? (
          <Button
            title="Verificar"
            loading={loading}
            disabled={!token}
            onPress={verifyOTP}
          />
        ) : (
          <Button
            title="Entrar"
            loading={loading}
            disabled={!email}
            onPress={signInWithOTP}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 20,
  },
  labelWrapper: {
    marginTop: 50,
    alignSelf: 'flex-start',
  },
  textInputWrapper: {
    width: '100%',
    marginTop: 8,
  },
  descriptionWrapper: {
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 20,
  },
});
