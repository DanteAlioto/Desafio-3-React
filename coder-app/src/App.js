import './App.css';

function App() {

  let imagen = "React-Syntonize.png" ;


  return (
    <div className='container'>
      <div className='row'>

        <div className='col-md-4 offset-md-2'> 
        <h1>Hola mundo!</h1>
        <p>Este es un parrafo es mi primera pagina de react.</p>
        </div>

        <div className='col-md-4'> 
        <p>Este es un segundo parrafo de mi primera pagina de react.</p>
        </div>

        <div className='col-md-4'> 
        <img src = {imagen} width= "1000" alt= "logo_react"/>
        </div>

      </div>
    </div>
  );
}

export default App;
