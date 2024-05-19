
import React from 'react'
import {Page, Document, View, Text, StyleSheet,Font} from "@react-pdf/renderer";
// import inter from "../fonts/Jacquard12-Regular.ttf";


Font.register({
  family: 'Inter',
  src: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
});
const styles = StyleSheet.create({

  container: {
      // position:"relative",
      // overflow:"hidden",
      // boxSizing: "borderBox",
      mixWidth: 1440,
      height: 1330,
      background: `#b6b9bf`,
      border: `1px solid red`,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center'

    },
    body: {
      position:"relative",
      overflow:"hidden",
      boxSizing: "borderBox",
      display: "block",
      width: 900,
      height: 1273,
      background: "#FFFFFF",
      boxShadow: '0px 3px 6px #0000000F',
      border: '1px solid black',
      borderRadius: 6,
      paddingTop: 28,
      paddingLeft:32
},
  top:{
    display:"block",
    width: 119,
    height: 39,
    fontFamily: 'Inter',
    letterSpacing: 0,
    color: 'black',
    fontWeight:900,
    fontSize: 32,
  },
  topm:{
    marginTop: 16,
    marginLeft: 0,
    marginRight:0,
    margin: 0,
    display: "block",

  },
  topb:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 232
  },

  topb1: {
    fontSize: 14,
    color: '#18181B',
    fontFamily: "Inter",
    marginTop: 10
  },
  hz:{
    height:1,
    width: 872,
    backgroundColor: "black",
    display: "block",
    marginTop: 27,
    marginBottom: 27,
    opacity: 0.3

  },
  hz1:{
    height:1,
    width: 872,
    backgroundColor: "black",
    display: "block",
    marginTop: 22,
    marginBottom: 32,
    opacity: 0.3

  },
  hz2:{
    height:1,
    width: 872,
    backgroundColor: "black",
    display: "block",
    marginTop: 22.5,
    marginBottom: 22.5,
    opacity: 0.3

  },
  hz3:{
    height:1,
    width: 872,
    backgroundColor: "black",
    display: "block",
    marginTop: 24,
    marginBottom: 24,
    opacity: 0.3
  },
  hz4:{
    height:1,
    width: 872,
    backgroundColor: "black",
    display: "block",
    marginTop: 25,
    marginBottom: 62,
    opacity: 0.3
  },
  hz5:{
    height:1,
    width: 300,
    backgroundColor: "black",
    display: "block",
    marginTop: 0,
    marginBottom: 30,
    opacity: 0.3
  },
  bodyTop:{
    display: "grid",
    gridTemplateColumns: 'auto auto'
  },
  bodyTopH:{
    fontSize:24,
    marginBottom:29,
    color: '#0E172A',
    fontFamily: "Inter"
  },
  bodyTopB:{
    fontSize:14,
    marginBottom:10,
    color: '#18181B',
    fontFamily: "Inter"
  },
  bodyTopBE:{
    fontSize:14,
    marginBottom:32,
    color: '#18181B',
    fontFamily: "Inter"
  },
  // ..................
  bodyBody:{
    display: "block",
    overflow: 'hidden'
    
  },
  bodyBodyH1:{
    fontSize:16,
    color: '#18181B',
    fontFamily: "Inter",
    fontWeight: 600,
    float:'left',
    marginRight: 254
  },
  bodyBodyH2:{
    fontSize:16,
    color: '#18181B',
    fontFamily: "Inter",
    fontWeight: 600,
    float:'left',
    marginRight: 101
  },
  bodyBodyH3:{
    fontSize:16,
    color: '#18181B',
    fontFamily: "Inter",
    fontWeight: 600,
    float:'left',
    marginRight: 64
  },
  bodyBodyH4:{
    fontSize:16,
    color: '#18181B',
    fontFamily: "Inter",
    fontWeight: 600,
    float:'left',
    marginRight: 89
  },
  bodyBodyH5:{
    fontSize:16,
    color: '#18181B',
    fontFamily: "Inter",
    fontWeight: 600,
    float:'left'
  },
   
  // .........................
  bodyBody1:{
    display: "block",
    overflow: "hidden"
   
    // flexDirection: 'row',
    // justifyContent: "flex-end",
    // gap: 50
  },
  bodyBodyB1:{
    fontSize:14,
    color: '#18181B',
    fontFamily: "Inter",
    float: "left",
    marginRight: 139
  },
  bodyBodyB2:{
    fontSize:14,
    color: '#18181B',
    fontFamily: "Inter",
    float: "left",
    marginRight: 92
  },
  bodyBodyB3:{
    fontSize:14,
    color: '#18181B',
    fontFamily: "Inter",
    float: "left",
    marginRight: 57
  },
  bodyBodyB4:{
    fontSize:14,
    color: '#18181B',
    fontFamily: "Inter",
    float: "left",
    marginRight: 134
  },
  bodyBodyB5:{
    fontSize:14,
    color: '#18181B',
    fontFamily: "Inter",
    float: "left"
  },
  bodyBodyB6:{
    fontSize:14,
    color: '#18181B',
    fontFamily: "Inter",
    float: "left",
    marginRight: 99
  },
// .........................
  bottom:{
  position: 'absolute',
  left: 611
  },
  bottom1:{
    display: "block",
    overflow: "hidden",
    marginBottom: 16

  },
  bottomB1:{
    float: "left",
    marginRight: 69,
    fontSize: 14,
    fontFamily: "Inter"
  },
  bottomB3:{
    float: "left",
    marginRight: 98,
    fontSize: 14,
    fontFamily: "Inter"
  },
  bottomB2:{
    float: "left",
    fontSize: 14,
    fontFamily: "Inter"
  },
  bottomEnd:{
    display: "block",
    overflow:"hidden"
  },
  bottomE:{
    float: "left",
    fontSize: 16,
    color: '#18181B',
    fontWeight: 600,
    marginRight: 114,
  },
  bottomE1:{
    float: "left",
    fontSize: 16,
    color: '#18181B',
    fontWeight: 600,
  }
})


const PDFFile = () => {
  return (
    <Document style={styles.container}>
      <Page style={styles.body}>
       <Text style={styles.top}>Factuur</Text>
       <View style={styles.topm}>
        <View style={styles.topb}>
          <Text style={styles.topb1}>Factuurdatum</Text>
          <Text style={styles.topb1}>01-04-2024</Text>
        </View>
        <View style={styles.topb}>
          <Text style={styles.topb1}>Vervaldatum</Text>
          <Text style={styles.topb1}>01-05-2024</Text>
        </View>
        <View style={styles.topb}>
          <Text style={styles.topb1}>Factuurnummer</Text>
          <Text style={styles.topb1}># 2024-19</Text>
        </View>
       </View>
       <Text style={styles.hz}></Text>
       <View>
        <View style={styles.bodyTop}>
          <Text style={styles.bodyTopH}>Paul Dekeyser</Text>
          <Text style={styles.bodyTopH}>Airco.be</Text>
          <Text style={styles.bodyTopB}>Belgradostraat 17</Text>
          <Text style={styles.bodyTopB}>Daknamstraat 1</Text>
          <Text style={styles.bodyTopB}>9000 Gent</Text>
          <Text style={styles.bodyTopB}>9000 Gent</Text>
          <Text style={styles.bodyTopBE}>paul.dekeyser@icloud.com</Text>
          <Text style={styles.bodyTopBE}>info@airco.be</Text>
          <Text style={styles.bodyTopB}>IBAN: BE86 0019 5545 0450</Text>
          <Text style={styles.bodyTopB}>BE0804492683</Text>
          <Text style={styles.bodyTopB}>BE0804092683</Text>
        </View>
       </View>
       <Text style={styles.hz1}></Text>
       <View style={styles.bodyBody}>
          <Text style={styles.bodyBodyH1}>Beschrijving</Text>
          <Text style={styles.bodyBodyH2}>Prijs</Text>
          <Text style={styles.bodyBodyH3}>Btw</Text>
          <Text style={styles.bodyBodyH4}>Btw-tarief</Text>
          <Text style={styles.bodyBodyH5}>Totaal</Text>
        </View>
        <Text style={styles.hz2}></Text>
        <View style={styles.bodyBody1}>
          <Text style={styles.bodyBodyB1}>Okt ’23: Plugin and thema check-up<br></br> en updates</Text>
          <Text style={styles.bodyBodyB2}>€ 32,50</Text>
          <Text style={styles.bodyBodyB3}>€ 6,80</Text>
          <Text style={styles.bodyBodyB4}>21%</Text>
          <Text style={styles.bodyBodyB5}>€ 39,32</Text>
        </View>
        <Text style={styles.hz3}></Text>
        <View style={styles.bodyBody1}>
          <Text style={styles.bodyBodyB6}>Redirect instellen. Wordpress memory limit<br></br> uitbreiden. Contact opnemen met Niels.</Text>
          <Text style={styles.bodyBodyB2}>€ 32,50</Text>
          <Text style={styles.bodyBodyB3}>€ 6,80</Text>
          <Text style={styles.bodyBodyB4}>21%</Text>
          <Text style={styles.bodyBodyB5}>€ 39,32</Text>
        </View>
        <Text style={styles.hz3}></Text>
        <View style={styles.bottom}>
          <View style={styles.bottom1}>
            <Text style={styles.bottomB1}>Totaal excl. btw</Text>
            <Text style={styles.bottomB2}>€ 65</Text>
          </View>
          <View style={styles.bottom1}>
            <Text style={styles.bottomB3}>Totaal btw</Text>
            <Text style={styles.bottomB2}>€ 13,60</Text>
          </View>
          <Text style={styles.hz5}></Text>
          <View style={styles.bottomEnd}>
            <Text style={styles.bottomE}>Totaal</Text>
            <Text style={styles.bottomE1}>€ 78,65</Text>
          </View>
        </View>
      </Page>
    </Document>

  )
}

export default PDFFile

