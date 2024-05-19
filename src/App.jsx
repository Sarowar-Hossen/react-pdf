import React from 'react'
import './App.css'
import PDFFile from './component/PDFFile'
// import { PDFDownloadLink } from '@react-pdf/renderer'


function App() {

  return (
    <>
      <div className='pdfbody'>
        {/* <PDFDownloadLink document={<PDFFile/>} fileName='FORM'>
          {({loading, error})=>(loading ? <button>'Loading document...'</button>:<button>Download</button>)}
        </PDFDownloadLink> */}
        <PDFFile/>
      </div>
       
    </>
  )
}

export default App
