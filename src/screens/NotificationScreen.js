import React, { useEffect, useState, useCallback } from 'react';
import {
    StyleSheet, Text, View, FlatList, ActivityIndicator, RefreshControl
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // ✅ Ionicons import
import axios from 'axios';

const NotificationScreen = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchNotifications = async () => {
        try {
            const response = await axios.get('https://fake-json-api.mock.beeceptor.com/notifications');
            setNotifications(response.data);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchNotifications();
    }, []);

    const getIconName = (type) => {
        // ✅ Ionicons names
        switch (type) {
            case 'announcement':
                return 'megaphone-outline';
            case 'promotion':
                return 'pricetag-outline';
            case 'order':
                return 'cube-outline';
            case 'review':
                return 'star-outline';
            case 'service':
                return 'headset-outline';
            default:
                return 'notifications-outline';
        }
    };

    const renderItem = ({ item }) => (
        <View style={[styles.card, !item.read ? styles.unreadCard : null]}>
            <View style={styles.iconContainer}>
                <Ionicons
                    name={getIconName(item.type)}
                    size={28}
                    color={!item.read ? '#4e8cff' : '#999'}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.message}>{item.message}</Text>
                <Text style={styles.time}>{item.timestamp}</Text>
            </View>
            {!item.read && <View style={styles.unreadDot} />}
        </View>
    );

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#4e8cff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ paddingTop: 0, paddingBottom: 10 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#4e8cff']} />
                }
            />
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f7',
        paddingHorizontal: 17,
        marginTop: 15
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 6,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
        alignItems: 'center',
    },
    unreadCard: {
        backgroundColor: '#e6f0ff',
    },
    iconContainer: {
        marginRight: 12,
    },
    unreadDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#4e8cff',
        marginLeft: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
    },
    message: {
        fontSize: 14,
        color: '#555',
        marginTop: 2,
    },
    time: {
        fontSize: 12,
        color: '#999',
        marginTop: 4,
        textAlign: 'right',
    },
});