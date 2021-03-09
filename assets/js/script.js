var r = 1;
var c = 0;

function add() {

    let name = document.querySelector("#name").value;    
    let date = document.querySelector("#date").value;
    let amount = document.querySelector("#amount").value;
    let tabela = document.querySelector("#tabela");

    tabela.innerHTML += "<tr> <td>...</td> <td>...</td> <td>...</td> <td>...</td> </tr>";
}

/*
function add() {

    let name = document.querySelector("#name").value;    
    let date = document.querySelector("#date").value;
    let amount = document.querySelector("#amount").value;

    let tabela = document.querySelector("#tabela");
    let row = tabela.insertRow(r);
    let newCell = row.insertCell(c);

    newCell.innerHTML = "<td>" + name + "</td>";   
    newCell.innerHTML = "<td>" + date + "</td>";
    newCell.innerHTML = "<td>" + amount + "</td>";
    newCell.innerHTML = "<td><button onclick='del(this)'> X </button></td>";

    r++;
    c++;
    
}
*/