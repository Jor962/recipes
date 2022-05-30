const api_url = 'https://jsonplaceholder.typicode.com/users';
                                
async function getFunc() {
    const response = await fetch(api_url);
    const data = await response.json();
    const {id, name, username} = data;
    console.log(id);
    console.log(name);
    console.log(username);
    
    document.getElementById('i').textContent = id;
    document.getElementById('n').textContent = name;
    document.getElementById('u').textContent = username;
}

getFunc();