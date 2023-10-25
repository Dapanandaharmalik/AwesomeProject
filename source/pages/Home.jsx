import { View, Text, Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
  <View style={{}}>
      {/* header */}
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        height: 60,
        alignItems:'center',
        backgroundColor:'red',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        borderRadius: 40,
      }} >
        <Image resizeMode='contain' style={{ height:40, width: 150}} source={require('../assets/images/MHS.png')}/>
        <View style={{height: 40, width: 40, borderRadius:20,backgroundColor:'yellow'}}>
        </View>
      </View>
      {/* kantin */}
      <View style={{margin: 16}}>
        <Text>Selamat Datang di</Text>
        <Text style={{fontSize: 32, color: 'black', fontWeight: 'bold'}}>Kantin Dapaaa</Text>
      </View>

      <View style= {{
        flexDirection: 'row'
      }}>
        <View 
        style={{
          padding: 12,
          flex: 1,
        }}>
          {/* image / foto produk */}
          <Image resizeMode='contain' style={{ height:190, width: 180, borderRadius: 12}} source={require('../assets/images/buger.jpg')}/>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>Burger</Text>
            <Text style={{color: 'red'}}>Rp. 24.500</Text>
        </View>
        <View 
        style={{
          flex: 1,
          padding: 12,
        }}>
          {/* image / foto produk */}
          <Image resizeMode='contain' style={{ height:190, width: 180, borderRadius: 12}} source={require('../assets/images/mie.jpg')}/>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>Mie Goreng</Text>
            <Text style={{color: 'red'}}>Rp. 20.0000</Text>
        </View>
      </View>
    </View>
    </View>

    
  )
}

export default Home;