const url = 'https://api.github.com/users/';
const iterableList = [
  'GSGaldino',
  'Los',
  'ProgramadorBR',
  'Filipedeschamps'
];
const ul = document.createElement('ul');
const containerResponse = document.querySelector("#response");

async function getData(url = ""){
  try {

    const response = await fetch(url)
    if(response.ok){
      const data = response.json();
      return data;
    }
  } 
  catch (error) {

    console.error(error);
  }
}

function createList(object = {}){
  const liLogin  = document.createElement('li');
  const liName = document.createElement('li');
  const liCreatedAt = document.createElement('li');
  const liId = document.createElement('li');

  liLogin.textContent = object.login;
  liName.textContent = object.name;
  liCreatedAt.textContent = object.created_at;
  liId.textContent = object.id;

  let ul = document.createElement('ul');
  ul.appendChild(liLogin)
  ul.appendChild(liName)
  ul.appendChild(liCreatedAt)
  ul.appendChild(liId)
  return ul;
}

iterableList.forEach(async item => {
  const data = await getData(url + item)
  const listItem = createList(data);
  containerResponse.appendChild(listItem);
})
