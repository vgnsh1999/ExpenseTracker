const form = document.getElementById('my-form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const obj = {
        expenseAmount : document.getElementById('expenseAmount').value,
        expenseDescription : document.getElementById('description').value,
        expenseCategory : document.getElementById('category').value
    }
    localStorage.setItem(obj.expenseAmount,JSON.stringify(obj));
    //parent
    const ul = document.getElementById('items');
    //making li tags
    const li = document.createElement('li');
    
    li.appendChild(document.createTextNode(obj.expenseAmount+'-'+obj.expenseDescription+'-'+obj.expenseCategory));
    //making delete buttons
    const delBtn = document.createElement('button');
    delBtn.appendChild(document.createTextNode('Delete Expense'));
    delBtn.className='delete';
    //adding deltbtn to li
    li.appendChild(delBtn);
    //making edit buttons
    const editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit Expense'));
    editBtn.className='edit';
    //adding editbtn to li
    li.appendChild(editBtn);

    //append li to ul
    ul.appendChild(li);

    //delete funtionality
    delBtn.addEventListener('click',(e)=>{
        if(e.target.classList.contains('delete')){
            if(confirm('Are you sure?')){
                //targetting parent
                const li = e.target.parentElement;
                ul.removeChild(li);
                localStorage.removeItem(obj.expenseAmount,JSON.stringify(obj));
            }
        }
    })

    //edit funtionality
    editBtn.addEventListener('click',(e)=>{
        if(e.target.classList.contains('edit')){
            //targetting parent
            const li = e.target.parentElement;
            ul.removeChild(li);
            localStorage.removeItem(obj.expenseAmount,JSON.stringify(obj));
            //edit
            document.getElementById('expenseAmount').value = obj.expenseAmount;
            document.getElementById('description').value = obj.expenseDescription;
            document.getElementById('category').value = obj.expenseCategory;
        }
    })

})