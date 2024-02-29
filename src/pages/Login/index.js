import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ILlogo} from '../../assets';
import {Input, Link, Button, Gap, Password} from '../../components';

const Login = ({navigation}) => {
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View className="p-8 flex-1 justify-between">
      <View>
        <View className="items-center">
          <ILlogo />
          <Text className="text-3xl text-black font-bold mt-12">Masuk</Text>
        </View>
        <Gap height={24} />
        <Input label="Masukkan Email" placeholder="Email" />
        <Gap height={16} />
        <Password
          label="Masukkan Password"
          placeholder="Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <View className="flex flex-row justify-between mt-2">
          <Text className="text-black font-semibold">Belum punya akun?</Text>
          <Link title="Lupa password?" />
        </View>
        <Gap height={8} />
        <Link title="Daftar" />
      </View>
      <View className="mb-10">
        <Button title="Sign In" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

// (-) syarat ketentuan password, format email, empaty gabisa next

export default Login;

const styles = StyleSheet.create({});
