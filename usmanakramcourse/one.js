function add(){
   var inputdata =  document.getElementById("inp").value;
   var newtodo =  document.getElementById("todo");
//    todo.innerHTML = todo.innerHTML + '<li>' + inputdata + '</li>';same purpose
    var todotext = document.createTextNode(inputdata);
    var newli = document.createElement("li");
    newli.appendChild(todotext);
    newtodo.appendChild(newli);
    var deltext = document.createTextNode("delete");
    var delbtn = document.createElement("button");
    delbtn.appendChild(deltext);
    newli.appendChild(delbtn);
    delbtn.onclick() = delhandle(Event);
}

function delhandle(e){
    var tag = e.target;
    e.parentNode.removeChild(tag);
}


$(function (){
    $("#btnadd").click(addlist);
    $("#todo li").click(function (){
        $(this).remove();
    });
});

function addlist(){
    var iput = document.getElementById("inp");
    if(iput.value == "hello"){
        $("#inp").addClass("error");
        return;
    }
    $("#todo").append("<li>"+iput.value+"</li>");
    $("#inp").val("");
    $("#todo li").click(function (){
        $(this).remove();
    });
}

$(function(){
    loadrecipes();
});

function loadrecipes(){
    $.ajax(
        {
            url:"https://catfact.ninja/fact",
            method:"GET",
            success:function(response){
                
                    $("#recipes").addClass("text");
                    $("#recipes").empty();
                    $("#recipes").append("<h3>"+response.fact+"</h3>"+"<button data-id = response.length>delete "+response.length+"</button>");
                
            }
        }
    );
}

