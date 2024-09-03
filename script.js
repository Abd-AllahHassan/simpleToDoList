let title=document.getElementById('task-inp');
let submit=document.getElementById('submit');
let output=document.querySelector('.output');
let time=document.getElementById('Time')

// 1_ creat an object ti save title value
let task;
if(localStorage.todo !=null)
{
    task= JSON.parse( localStorage.todo);
}
else{
    task=[];
}

submit.onclick= function()
{
   let newTask={
    title:title.value,
    time:time.value,
   }
   
// 2_ creat array and save all object in array by push methood
   if(newTask.title!=''&&newTask.time!='')
   {
    task.push(newTask);
   }
   
// 3_ save array at Local Storage 
   localStorage.setItem('todo',JSON.stringify(task));
   clear();
   show();
}

// clear data
function clear()
{
    title.value='';
    time.value='';
}
show();
// 4_ display as a table 
function show()
{
    let table='';
    for(let i=0;i<task.length;i++)
    {
        table +=`
        <tr> 
          <td>${i+1}</td>
          <td>${task[i].title}</td>
          <td>${task[i].time}</td>
          <td class="delete" onclick="deleteTask(${i})"><button>Delete</button></td>
       </tr>
        `;
    }
    document.getElementById('tbody').innerHTML=table;
}

// 5_ delete function 

function deleteTask(id)
{
    task.splice(id,1);
    localStorage.todo=JSON.stringify(task);
    show();
}
