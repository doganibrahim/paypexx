import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const PaymentApproved = ({navigation}: {navigation: any}) => {
  const goHome = () => {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.outerCircle}>
          <View style={styles.middleCircle}>
            <View style={styles.checkCircle}>
              <Image 
                source={require("../../assets/images/icons/checkMark.png")} 
                style={styles.checkIcon} 
              />
            </View>
          </View>
        </View>
        <Text style={styles.title}>Ödeme Onaylandı!</Text>
        <Text style={styles.subtitle}>
          Ödemeniz başarıyla tamamlandı. Siparişinizin onaylandığını bildirmekten memnuniyet duyarız.
        </Text>
      </View>
      
      <CustomButton
        title="Anasayfa"
        onPress={goHome}
        width="90%"
        height={56}
        icon={require("../../assets/images/icons/transaction/home.png")}
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
  checkCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(87, 176, 60, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
  },
  middleCircle: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(125, 193, 104, 0.6)',
    alignItems: "center",
    justifyContent: "center",
  },
  outerCircle: {
    position: 'relative',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(182, 217, 182, 0.6)',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  checkIcon: {
    width: 40,
    height: 40,
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

export default PaymentApproved;

