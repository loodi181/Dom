
// const [name, comment] = document.querySelectorAll('.form-control')
// const addCommentBtn = document.querySelector('button')

// // console.log(name,comment)
// function GenerateComment(author, commentContent) {
//     // row
//     const row = document.createElement('div');
//     row.classList.add('row');

//     const colLeft = document.createElement('div')
//     colLeft.classList.add('col-md-3')

//     const h1 = document.createElement('h1')
//     h1.classList.add('lead')
//     h1.innerText=author

//     colLeft.append(h1)

//     const colRight = document.createElement('div')
//     colRight.classList.add('col-md-9')
    
//     const p = document.createElement('p')
//     p.innerText=commentContent

//     colRight.append(p)

//     row.append(colLeft,colRight)

//     document.querySelector('.comments').append(row)
// }

// addCommentBtn.addEventListener('click', () => {
//     // console.log(name.value, comment.value)
//     // console.log(GenerateComment(name.value,comment.value))
//     GenerateComment(name.value,comment.value)
//     name.value=""
//     comment.value=""
// })





////////creat table (DOM manipulate)/////
let table = document.createElement('table');
table.classList.add('table' ,'table-dark')

let thead = document.createElement('thead')
let tbody = document.createElement('tbody')

let tr = document.createElement('tr')
let th = document.createElement('th')

const th1 = document.createElement('th');
th1.innerText="username"

const th2 = document.createElement('th');
th2.innerText="password"

const th3 = document.createElement('th');
th3.innerText="email"

tr.append(th1,th2,th3)
thead.appendChild(tr)
table.appendChild(thead)

///////////GeneratUsers function///////////
function GenerateUsers(userName,password,email){
    let tr1 = document.createElement('tr')

    let td1 = document.createElement('td');
    td1.innerText=userName
    
    let td2 = document.createElement('td');
    td2.innerText=password
    
    let td3 = document.createElement('td');
    td3.innerText=email
    
tbody.appendChild(tr1)
tr1.append(td1,td2,td3)
table.append(tbody)

let div = document.createElement('div')
div.classList.add("container")

div.append(table)
document.body.append(div)
}


GenerateUsers("khalid",'12345khalid','kha@pee.pe3')
GenerateUsers("Greg",'1234Greg','greg@pee.pe3')
GenerateUsers("Viktor",'12345Viktor','vik@pee.pe3')
GenerateUsers("Ali",'12345Ali','ali@pee.pe3')



