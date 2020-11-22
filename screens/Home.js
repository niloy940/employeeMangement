import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = ()=> {
    const data = [
        {id:1, name:"FB Nayem", position: "Facebook Specialist"},
        {id:2, name:"John Doe", position: "Facebook Marketing"},
        {id:3, name:"FB Nayem", position: "FB Specialist"},
        {id:4, name:"FB", position: "Facebook Specialist"},
        {id:5, name:"Nayem", position: "Specialist"},
        {id:6, name:"Nayem", position: "Specialist"},
        {id:7, name:"Nayem", position: "Specialist"},
        {id:8, name:"Nayem", position: "Specialist"},
        {id:9, name:"Nayem", position: "Specialist"},
        {id:10, name:"Nayem", position: "Specialist"},
        {id:11, name:"Nayem", position: "Specialist"},
        {id:12, name:"Nayem", position: "Specialist"},
        {id:13, name:"Nayem", position: "Specialist"},
    ]

    const renderList = ((item) => {
        return (
            <Card style={styles.mycard}>
                <View style={styles.cardView}>
                    <Image 
                        style={{ width:60, height:60, borderRadius:30 }}
                        source={{ uri: 'https://sonar.fmaa1-3.fna.fbcdn.net/v/t1.0-1/p160x160/75282390_2466125567044370_7049588075013341184_o.jpg?_nc_cat=101&ccb=2&_nc_sid=dbb9e7&_nc_ohc=M39vz180ofUAX9vgNAW&_nc_ad=z-m&_nc_cid=0&_nc_ht=sonar.fmaa1-3.fna&tp=6&oh=0f57bd1a62366dc704a69edacc0b144a&oe=5FDE0591'}}
                    />

                    <View style={{ marginLeft:10 }}>
                        <Text style={ styles.text }>{item.name}</Text>
                        <Text style={{ fontSize:13, marginLeft:10 }}>{ item.position }</Text>
                    </View>
                </View>
            </Card>
        )
    })

    return (
        <View>
            <FlatList 
                data={data}

                renderItem={({item}) => {
                    return renderList(item)
                }}

                keyExtractor={item => `${item.id}`}
            />

            <FAB
                style={styles.fab}
                icon="plus"
                theme={{colors:{accent: 'blue' }}}
                onPress={() => Alert.alert('ok')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5
    },

    cardView: {
        flexDirection: "row",
        padding: 6
    },
    
    text: {
        fontSize: 20,
        marginLeft: 10
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
  },
})

export default Home;