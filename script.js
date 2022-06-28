axios.get('https://cliente.jesusvenencia.repl.co/usuarios')
  .then(function (response) {
  if (response.status==200){
    console.log('Data: ', response);
    
    let usuarios = '';

    for(var i=0; i<= response.data.length; i++){
      usuarios = usuarios + response.data[i].nombre1 + response.data[i].apellido1
      }
    }
    document.getElementById('content').innerHTML = usuarios
  })
  .catch(function (error) {
    console.log('Error: ',error);
  })
  .then(function () {
  });