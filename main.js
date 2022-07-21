var tasks=[];
            var isComplete = false;
            // add item
            function addItem(){
                var singleTask = {
                    taskID : tasks.length,
                    taskValue : document.getElementById("taskInput").value
                };
                // let list_item = document.getElementById("myUL");
                var li = document.createElement("LI")
                // tasks.push(singleTask);
                var t = document.createTextNode(singleTask.taskValue)
                if(singleTask.taskValue === '')
                alert("you must write something")
                else {
                    document.getElementById("myUL").appendChild(t)
                }
                document.getElementById("taskInput").value = ""
                li.onclick = function(){
                    this.parentNode.removeChild(this);
                }
                // for(var i = 0 ; i < close.length ; i++){
                //     close[i].onclick = function(){
                //         var div = this.parentElement;
                //         div.style.display = "none"
                //     }
                // }
                console.log(singleTask);
                // showDataList();
            }
            // function showDataList(){
            //     var taskListUI= document.getElementById("tasksList")
            //     // taskListUI.innerHTML = ''
            //     tasks.map((task, i) => {
            //         console.log('render' , task)
            //         let html = `<div>${task.taskValue}</div>`
            //         taskListUI.innerHTML = taskListUI.innerHTML + html
            //     })
            // }
            // function completeItem(){
            //     isComplete = !isComplete
            // }

            //create a cancel button
            // var taskLists = document.getElementsByTagName("LI")
            // taskLists.map((task , i) => {
            //     var span = document.createElement("SPAN");
            //     var txt = document.createTextNode("/u00D1");
            //     span.className = "close"
            //     span.appendChild(txt)
            //     taskLists[i].appendChild(span)
            // })
            // click on close button to delete the items
            // var cancel = document.getElementsByClassName("cancel")
            // cancel.map((task , i) => {
            //     task.onclick = function(){
            //         var div = this.parentElement
            //         div.style.display = "none";
            //     }
            // })
            // // Add checked symbol when clicking on item
            // var list = document.querySelector("ul")
            // list.addEventListener('click',function(ev){
            //     if(ev.target.tagName == 'LI'){
            //         ev.target.classList.toggle('checked')
            //     }
            // },false)