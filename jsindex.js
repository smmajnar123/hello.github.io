
const url = 'https://jsonplaceholder.typicode.com/posts';
//var data=[{userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et'}];
var list=[];
function call() {
  fetch(url).then(
    (resp) => resp.json()
  ).then(
    (dt) => {
      list = dt;
      //var val=document.getElementById('searchData').value;
      //val=val.toLowerCase();
      buildTable(list);
    }
  );
}
call();
function buildTable(lt) {
  for (var i = 0; i < lt.length; i++) {
    var idTable = document.getElementById('myTable');
    let row = `<tr>
    <td>${lt[i].userId}</td>
    <td>${lt[i].id}</td>
    <td>${lt[i].title}</td>
    <td>${lt[i].body}</td>
  </tr>`
    idTable.innerHTML += row;
  }
}
// function search(){
//     inVal=inVal.toLowerCase();
//     var list1=[];
//     for (var i = 0; i < list.length; i++) {
//         var name=list[i].title.toLowerCase();
//         if(name.includes(inVal)){
//             list1.push(list[i]);
//         }
//     }
//     search1(list1);
//     return inVal;
// }
// function search1(lt1){
//     for (var i = 0; i < lt1.length; i++) {
//         var idTable = document.getElementById('tableData');
//         let row = `<tr>
//         <td>${lt1[i].userId}</td>
//         <td>${lt1[i].id}</td>
//         <td>${lt1[i].title}</td>
//         <td>${lt1[i].body}</td>
//       </tr>`
//         idTable.innerHTML += row;
//       }
// }
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();

      $("#myTable tr").filter(
        function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        }
      );
    });
  });

  
  


