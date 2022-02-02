const API = 'https://pokeapi.co/api/v2/pokemon/';
const xhr = new XMLHttpRequest();

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        
        const xhttp = new XMLHttpRequest();
        xhr.open('GET', url_api, true);
        xhr.onreadystatechange = (() => {
            if(xhr.readyState === 4){
                (xhr.status === 200)
                    ? resolve(JSON.parse(xhr.responseText))
                    : reject(new Error('Error', url_api))
            }
        });
        xhr.send();
    });
  }
  
  const doSomethingAsync = () => {
      return new Promise( (resolve, reject) => {
        (true)
          ? setTimeout( () => resolve('Esto hace algo async'), 3000)
          : reject(new Error("Error"))
      })
    }
    
    const doSomething = async () => {
      const something = await doSomethingAsync();
      console.log(something);
    }
    
    console.log("Antes (before)");
    doSomething();
    console.log("Después (After)");
    
    /*
    const anotherFunction = async () => {
      try{
          const something = await doSomethingAsync();
          console.log(`${something} 2`);
      }catch(error){
          console.error(error)
      }
    }*/
    
  const anotherFunction = async () => {
      try{
        const data = await fetchData(API);
        console.log("Aqui inicia el llamado a la api");
          const pokemon = await fetchData(`${API}${data.results[0].name}`);
          const ability = await fetchData(pokemon.abilities[0].ability.url);

          console.log(data.count);
          console.log(pokemon.name);
          console.log(ability.name);
          console.log(ability.effect_entries[0].effect);
      }catch (error){
          console.error(error)
      }
  }
console.log('Before 2');
anotherFunction();
console.log('After 2');
  
  