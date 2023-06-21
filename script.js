const addBtn= document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote("Add new note"));
function  addNewNote(text = " "){
  const note = document.createElement("div");
  note.classList.add("note") ;

  note.innerHTML= `<div class="tools">
  <button class="edit">
      <i class="fas fa-edit"></i> 
  </button>
 
  <button class="delete">
      <i class="fas fa-trash-alt"></i> 
  </button>
 
</div>

<div class="main ${text ? "" : "hidden"}"></div>
<textArea class="${text ? "hidden" :""}"></textArea> `



//delete button
const deleteBtn = note.querySelector(".delete");
const editBtn = note.querySelector(".edit");
const main = note.querySelector(".main");
const textArea = note.querySelector("textArea");

textArea.value = text
main.innerHTML= text


console.log(deleteBtn)
// delete function
deleteBtn.addEventListener("click", ()=> {
    note.remove();
});
editBtn.addEventListener("click",()=>{
    main.classList.toggle("hidden")
    textArea.classList.toogle("hidden")
})
document.body.appendChild(note);
}