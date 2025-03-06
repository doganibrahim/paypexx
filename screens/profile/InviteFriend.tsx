import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ToastAndroid, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import * as Clipboard from 'expo-clipboard';
import Toast from '../../components/Toast';

const InviteFriend = () => {
  const [toastVisible, setToastVisible] = React.useState(false);

  const steps = [
    {
      id: 1,
      title: '3 Arkadaşınıza Pay-Pexx\'i Tavsiye Edin',
      text: 'Her bir arkadaşınızın £150 veya daha fazla tutarında transfer yapması gerekmektedir.',
    },
    {
      id: 2,
      title: 'Arkadaşlarınızın üç farklı kişiye £150 göndermesi gerekiyor.',
      text: 'Arkadaşınızın, sunduğumuz para birimlerinden biriyle en az £150 tutarında transfer gerçekleştirmesini bekleyin.',
    },
    {
      id: 3,
      title: 'Ödülünüzü kazanın!',
      text: 'Ödülü kazanmak için arkadaşlarınıza altta bulunan linki gönderin. Üye olduktan sonra her adımda kazanmaya başlayın.',
      showIcon: true,
    },
  ];

  const handleCopyLink = async () => {
    const inviteLink = 'https://pay-pexx.com/register?12376';
    await Clipboard.setStringAsync(inviteLink);
    setToastVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <LinearGradient
              colors={['#1A83B9', '#57B03C']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.gradientBackground}
            >
              <Image 
                source={require('../../assets/images/icons/profile/gift.png')}
                style={styles.giftIcon}
              />
              
              <Text style={styles.title}>3 arkadaşını davet et</Text>
              <Text style={styles.subtitle}>£70 kazanın</Text>
            </LinearGradient>
          </View>

          <View style={styles.stepsContainer}>
            {steps.map((step, index) => (
              <StepItem
                key={step.id}
                step={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </View>

          <View style={styles.linkContainer}>
            <Text style={styles.linkTitle}>Bağlantını Kopyala</Text>
            <Text style={styles.linkSubtext}>3 arkadaşını davet et ve £70 kazanın</Text>
            <TouchableOpacity 
              style={styles.linkBox} 
              onPress={handleCopyLink}
              activeOpacity={0.7}
            >
              <Text style={styles.linkText}>https://pay-pexx.com/register?12376</Text>
              <Image 
                source={require('../../assets/images/icons/transaction/copy.png')}
                style={styles.copyIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Toast
        visible={toastVisible}
        message="Bağlantı kopyalandı!"
        onHide={() => setToastVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    marginBottom: 32,
  },
  gradientBackground: {
    padding: 24,
    alignItems: 'center',
  },
  giftIcon: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 24,
    textAlign: 'center',
  },
  stepsContainer: {
    paddingHorizontal: 24,
    width: '100%',
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    position: 'relative',
    paddingBottom: 8,
  },
  stepNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00AD0C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginTop: 2,
    zIndex: 2,
  },
  stepNumberText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  stepText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  stepTrophyIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  stepTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  connectingLine: {
    position: 'absolute',
    left: 11,
    top: 24,
    width: 2,
    backgroundColor: '#00AD0C',
    bottom: -30,
    zIndex: 1,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  linkContainer: {
    width: '90%',
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: 24,
    backgroundColor: '#1B93D0',
    borderRadius: 10
  },
  linkTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  linkBox: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 12,
  },
  linkText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    flex: 1,
  },
  copyIcon: {
    width: 15,
    height: 15,
    marginLeft: 4,
  },
  linkSubtext: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});

const StepItem = ({ step, isLast }) => (
  <View style={styles.stepItem}>
    <View style={styles.stepNumber}>
      <Text style={styles.stepNumberText}>{step.id}</Text>
    </View>
    <View style={{flex: 1}}>
      <View style={styles.stepTitleContainer}>
        <Text style={styles.stepTitle}>{step.title}</Text>
        {step.showIcon && (
          <Image 
            source={require('../../assets/images/icons/transaction/trophy.png')}
            style={styles.stepTrophyIcon}
          />
        )}
      </View>
      <Text style={styles.stepText}>{step.text}</Text>
    </View>
    {!isLast && <View style={styles.connectingLine} />}
  </View>
);

export default InviteFriend;
