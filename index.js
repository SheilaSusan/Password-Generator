const password1El = document.getElementById("password1-el")
const password2El = document.getElementById("password2-el")
const selectedPassword = document.getElementById("selected-password")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")

const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"
];

function password(){
    let password = ""
    for(let i = 0; i < 15; i++){
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
  return password
}

//Displays the passwords
function displayPasswords(){
  password1El.textContent = password()
  password2El.textContent = password()
}

function passwordSelection (element){
  const password = element.textContent
  if (!password) return

  selectedPassword.innerHTML = " "

  const selectedBtn = document.createElement("button")
  selectedBtn.className = "password-btn"
  selectedBtn.textContent = password

  selectedPassword.appendChild(selectedBtn)
}

password1El.addEventListener("click", function(){
  passwordSelection(password1El)
})

password2El.addEventListener("click", function(){
  passwordSelection(password2El)
})

saveBtn.addEventListener("click", function(){
  const selectedPassword = document.querySelector("#selected-password button")
  if(!selectedPassword){
    alert ("No password selected!")
    return
  }

  //Saves password in the local storage of browser memory
  localStorage.setItem("savedPassword", selectedPassword.textContent)
  alert("Password saved")
})

//deletes the selected password
deleteBtn.addEventListener("click", function(){
  selectedPassword.innerHTML = ""
})