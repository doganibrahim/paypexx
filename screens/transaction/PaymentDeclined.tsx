import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const PaymentDeclined = ({navigation}: {navigation: any}) => {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.outerCircle}>
          <View style={styles.middleCircle}>
            <View style={styles.innerCircle}>
              <Image 
                source={require("../../assets/images/icons/transaction/declined.png")} 
                style={styles.icon} 
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <Text style={styles.title}>Ödeme Reddedildi!</Text>
        <Text style={styles.subtitle}>
          Ödemeniz reddedilmiştir. Lütfen ödeme bilgilerinizi kontrol ederek tekrar deneyiniz.
        </Text>
      </View>
      
      <CustomButton
        title="Tekrar Dene"
        onPress={() => {}}
        width="90%"
        height={56}
        icon={undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  innerCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E30A17",
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
  },
  middleCircle: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E7424C',
    alignItems: "center",
    justifyContent: "center",
  },
  outerCircle: {
    position: 'relative',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#EE979C',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  icon: {
    height: 35,
    tintColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    paddingHorizontal: 40,
    textAlign: "center",
  },
});

export default PaymentDeclined;