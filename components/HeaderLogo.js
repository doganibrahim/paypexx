import {Image} from 'react-native';

const HeaderLogo = () => {
    return (
        <Image
        source={require('../assets/images/logo.png')}
        style={{width: 115,
            height: 80,
            resizeMode: 'contain',
        }}
    />
    );
};

export default HeaderLogo;