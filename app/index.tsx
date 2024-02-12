import React from "react";
import { SubmitHandler, useController, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logga in</Text>
      <Input key="email" name="email" placeholder="E-postadress" control={control} />
      <Input
        key="password"
        type="password"
        name="password"
        placeholder="Lösenord"
        control={control}
      />
      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Logga in</Text>
      </Pressable>
      <Text style={styles.createAccountText}>Eller skapa ett konto</Text>
    </View>
  );
};

const Input = ({ name, control, placeholder, type }: any) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <TextInput
      style={styles.input}
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      secureTextEntry={type === "password"}
    />
  );
};

const styles = StyleSheet.create<any>({
  container: {
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    padding: 17,
    backgroundColor: "#E6E6EF",
    marginBottom: 25,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderRadius: 8,
    width: "70%",
  },
  button: {
    backgroundColor: "#03045E",
    color: "#fff",
    borderRadius: 8,
    paddingVertical: 13,
    paddingHorizontal: 17,
  },
  buttonText: {
    color: "#fff",
  },
  createAccountText: {
    color: "#000",
    marginTop: 20,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});

export default Login;
