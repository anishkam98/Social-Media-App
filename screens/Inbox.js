import { StatusBar } from 'expo-status-bar';
import { Animated, View, Dimensions, Button, Image, Easing, Text, Keyboard, Platform, Alert, Pressable } from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';
import { styles } from '../assets/styles/Main';
import { inboxStyles } from '../assets/styles/InboxStyles';
import React, { useState, useEffect, setState } from 'react';

export default function Inbox() {
    //renderQuickActions={({ index, item }) => QuickActions(index, item)}

    const extractItemKey = item => {
        return item.id.toString();
    };

    const Item = ({ item, backgroundColor, textColor, deleteItem }) => {
        return (
            <>
                <View style={inboxStyles.item}>
                    <View style={inboxStyles.avatar} />
                    <View style={inboxStyles.messageContainer}>
                        <Text style={inboxStyles.name} numberOfLines={1}>
                            {item.name}
                        </Text>
                        <Text style={inboxStyles.text} numberOfLines={2}>
                            {item.text}
                        </Text>
                    </View>
                </View>
                <View />
            </>
        );
    };

    const data = [
        {
            name: 'Zach',
            date: 'Sun, 17th, 2019',
            text: 'fr fr i need a nap this is hogwash!!!',
            id: 1,
        },
        {
            name: 'Daniel',
            date: 'Thu, 11th, 2019',
            text: 'hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs hot dogs ',
            id: 11,
        },
        {
            name: 'Geraldine',
            date: 'Tue, 24th, 2019',
            text: 'pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum',
            id: 21,
        },
        {
            name: 'Jane',
            date: 'Tue, 24th, 2019',
            text: 'pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum',
            id: 22,
        },
        {
            name: 'John',
            date: 'Tue, 24th, 2019',
            text: 'pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum',
            id: 23,
        },
        {
            name: 'Sally',
            date: 'Tue, 24th, 2019',
            text: 'pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum',
            id: 24,
        },
    ];

    function renderItemSeparator() {
        return <View style={inboxStyles.itemSeparator} />;
    }

    const deleteItem = itemId => {
        Alert.alert(
            'Delete this?',
            "This item will be permanently removed.",
            [
              {
                text: 'Delete it',
                onPress: () => deleteItem(itemId),
                style: 'destructive',
              },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
            ],
          );
      };
    
      const reportItem = itemId => {
        Alert.alert(
          'Report this?',
          "This conversation will be flagged for review.",
          [
            {
              text: 'Report it',
              onPress: () => deleteItem(itemId),
              style: 'destructive',
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ],
        );
      };
    
      const muteItem = itemId => {
        Alert.alert(
          'Mute this?',
          "This will silence notifications.",
          [
            {
              text: 'Mute it',
              onPress: () => deleteItem(itemId),
              style: 'destructive',
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ],
        );
      };
    
      const QuickActions = (index, qaItem) => {
        return (
          <View style={inboxStyles.qaContainer}>
            <View style={[inboxStyles.button, inboxStyles.button1]}>
              <Pressable onPress={() => reportItem(qaItem.id)}>
                <Text style={[inboxStyles.buttonText, inboxStyles.button1Text]}>Report</Text>
              </Pressable>
            </View>
            <View style={[inboxStyles.button, inboxStyles.button2]}>
              <Pressable onPress={() => muteItem(qaItem.id)}>
                <Text style={[inboxStyles.buttonText, inboxStyles.button2Text]}>Mute</Text>
              </Pressable>
            </View>
            <View style={[inboxStyles.button, inboxStyles.button3]}>
              <Pressable onPress={() => deleteItem(qaItem.id)}>
                <Text style={[inboxStyles.buttonText, inboxStyles.button3Text]}>Delete</Text>
              </Pressable>
            </View>
          </View>
        );
      };

    return (
        <View style={styles.container}>
            <SwipeableFlatList
                keyExtractor={extractItemKey}
                data={data}
                renderItem={({ item }) => (
                    <Item item={item} deleteItem={() => deleteItem} />
                )}
                maxSwipeDistance={240}
                renderQuickActions={({index, item}) => QuickActions(index, item)}
                contentContainerStyle={inboxStyles.contentContainerStyle}
                shouldBounceOnMount={true}
                ItemSeparatorComponent={renderItemSeparator}
            />
        </View>
    );
      
}
