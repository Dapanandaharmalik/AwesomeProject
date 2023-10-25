import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
  <View style={{borderWidth: 1}}>
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
        <Image resizeMode='contain' style={{ height:40, width: 150}} source={require('./source/assets/images/MHS.png')}/>
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
          borderWidth: 1,
          padding: 12,
          flex: 1,
        }}>
          {/* image / foto produk */}
          <View 
            style={{
              height: 200,
              backgroundColor: 'green',
              borderRadius: 12,
            }}
            />
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>Nasi Tumpeng</Text>
            <Text style={{color: 'red'}}>Rp. 24.500</Text>
        </View>
        <View 
        style={{
          flex: 1,
          borderWidth: 1,
          padding: 12,
        }}>
          {/* image / foto produk */}
          <View 
            style={{
              height: 200,
              backgroundColor: 'blue',
              borderRadius: 12,
            }}
            />
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>Ayam penyet</Text>
            <Text style={{color: 'red'}}>Rp. 20.0000</Text>
        </View>
      </View>
    </View>
    </View>

    
  )
}

export default App