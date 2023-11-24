export function authenticateUser(email, senha) {
  let usuarios

fetch('login.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    usuarios = data;
  }
)  
    
    const user = usuarios.find(u => u.email === email && u.senha === senha && u.nome === nome);
  
    if (user) {
      
      sessionStorage.setItem("user", JSON.stringify(user));
      return true; 
    }
  
    return false; 
  }
  
  export function isAuthenticated() {
    const storedUser = sessionStorage.getItem("user");
    return !!storedUser; 
  }