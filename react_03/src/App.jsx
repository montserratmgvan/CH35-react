/* eslint-disable react/jsx-no-undef */
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Button from './components/Button'
import Products from './components/Products'
import Card from './components/Card'
//import Buttons from './components/Buttons'

function App() {
  const imgfashion ='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933';
  const imgDark='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747';
  const imgCamel='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437';
  

  return (
    <>
        <Navbar />
        <Main />
        <Button label='Traer informacion'/>
        <Button label='Enviar informacion' />
        <Products
        img={imgfashion}
        name='Fashion'
        description='Tenis Fitnes running Purpule'
        price='$1,958'
        />
        <Products
        img={imgDark}
        name='Dark'
        description='Tennis Dark Running'
        price='$2,229'
        />
        <Products
        img={imgCamel}
        name='camel'
        description='Casual tennis'
        price='$3,431'
        />
        <Products
        img={imgfashion}
        name='fashion'
        description='Tenis Fitnes running Purple'
        price='$1,900'
        />
        
        {/Aqui ira mi componenete de MUI y JoyUI/}
        <Card/>
        <br></br>
        <Buttons/>
        </>
  )
}

export default App
