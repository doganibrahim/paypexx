import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

const AccountVerify = () => {
    const [showDocumentList, setShowDocumentList] = useState(false);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [showUploadOptions, setShowUploadOptions] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState('');
    
    const documents = [
        { id: 1, title: 'Kimlik Kartı' },
        { id: 2, title: 'Pasaport' },
        { id: 3, title: 'Sürücü Belgesi' },
        { id: 4, title: 'Banka Ekstresi' },
        { id: 5, title: 'Fatura' },
        { id: 6, title: 'Diğer' },
    ];

    const handleDocumentSelect = (doc) => {
        setSelectedDocument(doc);
        setShowDocumentList(false);
    };

    const closeAllLists = () => {
        setShowDocumentList(false);
        setShowUploadOptions(false);
    };

    const handleImageFromGallery = async () => {
        try {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            
            if (permissionResult.granted === false) {
                alert('Galeri izni gerekli!');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                quality: 1,
            });

            if (!result.canceled) {
                setSelectedFile(result.assets[0]);
                const fileName = result.assets[0].uri.split('/').pop();
                setSelectedFileName(fileName || '');
                setShowUploadOptions(false);
            }
        } catch (error) {
            alert('Fotoğraf seçilirken bir hata oluştu');
        }
    };

    const handleTakePhoto = async () => {
        try {
            const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
            
            if (permissionResult.granted === false) {
                alert('Kamera izni gerekli!');
                return;
            }

            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: false,
                quality: 1,
            });

            if (!result.canceled) {
                setSelectedFile(result.assets[0]);
                const fileName = `IMG_${new Date().getTime()}.jpg`;
                setSelectedFileName(fileName);
                setShowUploadOptions(false);
            }
        } catch (error) {
            alert('Fotoğraf çekilirken bir hata oluştu');
        }
    };

    const handleSelectFile = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: ['image/*', 'application/pdf'],
            });

            if (!result.canceled) {
                setSelectedFile(result.assets[0]);
                setSelectedFileName(result.assets[0].name);
                setShowUploadOptions(false);
            }
        } catch (error) {
            alert('Dosya seçilirken bir hata oluştu');
        }
    };

    return (
        <View style={styles.container}>
            {(showDocumentList || showUploadOptions) && (
                <TouchableWithoutFeedback onPress={closeAllLists}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}

            <View>
                <Text style={styles.label}>Belge Türü</Text>
                <TouchableOpacity 
                    style={styles.selectorButton}
                    onPress={() => {
                        setShowUploadOptions(false);
                        setShowDocumentList(!showDocumentList);
                    }}
                >
                    <Ionicons name="document-outline" size={24} color="#000" />
                    <Text style={styles.selectorText}>
                        {selectedDocument ? selectedDocument.title : 'Belge Türünüzü Seçin'}
                    </Text>
                </TouchableOpacity>

                {showDocumentList && (
                    <View style={styles.documentList}>
                        {documents.map((doc) => (
                            <TouchableOpacity 
                                key={doc.id} 
                                style={styles.documentItem}
                                onPress={() => handleDocumentSelect(doc)}
                            >
                                <Text style={styles.documentText}>{doc.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
            
            <View style={styles.uploadSection}>
                <Text style={styles.label}>Fotoğraf Yükle</Text>
                <TouchableOpacity 
                    style={styles.selectorButton}
                    onPress={() => {
                        setShowDocumentList(false);
                        setShowUploadOptions(!showUploadOptions);
                    }}
                >
                    <Ionicons name="cloud-upload-outline" size={24} color="#000" />
                    <View style={styles.fileInfoContainer}>
                        <View style={styles.fileTextContainer}>
                            <Text style={styles.selectorText}>
                                {selectedFile ? 'Dosya Seçildi: ' : 'Dosyayı Seç'}
                            </Text>
                            {selectedFileName && (
                                <Text style={styles.fileName} numberOfLines={1}>
                                    {selectedFileName}
                                </Text>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>

                {showUploadOptions && (
                    <View style={styles.uploadOptionsList}>
                        <TouchableOpacity 
                            style={styles.uploadOptionItem}
                            onPress={handleImageFromGallery}
                        >
                            <View style={styles.optionContent}>
                                <Text style={styles.documentText}>Fotoğraf Arşivi</Text>
                                <Ionicons name="images-outline" size={24} color="#000" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.uploadOptionItem}
                            onPress={handleTakePhoto}
                        >
                            <View style={styles.optionContent}>
                                <Text style={styles.documentText}>Fotoğraf Çek</Text>
                                <Ionicons name="camera-outline" size={24} color="#000" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.uploadOptionItem}
                            onPress={handleSelectFile}
                        >
                            <View style={styles.optionContent}>
                                <Text style={styles.documentText}>Dosyayı Seç</Text>
                                <Ionicons name="folder-outline" size={24} color="#000" />
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    label: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',
        marginBottom: 5,
        marginLeft: 5,
    },
    selectorButton: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#F2F2F2',
        padding: 16,
        borderRadius: 12,
        marginBottom: 2,
        borderWidth: 1,
        borderColor: '#D1D1D1',
    },
    selectorText: {
        marginLeft: 12,
        fontSize: 18,
        color: '#000',
    },
    documentList: {
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        width: '70%',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        zIndex: 1000,
    },
    documentItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    documentText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#333',
    },
    uploadSection: {
        marginTop: 20,
    },
    uploadOptionsList: {
        position: 'absolute',
        top: '100%',
        left: 0,
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        width: '70%',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        zIndex: 1000,
    },
    uploadOptionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        zIndex: 100,
    },
    optionContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    fileInfoContainer: {
        flex: 1,
        marginLeft: 12,
    },
    fileTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    fileName: {
        flex: 1,
        fontSize: 18,
        color: '#666',
        marginLeft: 4,
    },
});

export default AccountVerify;
