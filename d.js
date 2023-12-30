function addTask() {
 
    var taskInput = document.getElementById("taskInput");
    var descriptionInput = document.getElementById("descriptionInput");

    var taskText = taskInput.value;
    var descriptionText = descriptionInput.value;
    if (taskText.trim() !== "") {

        var listItem = document.createElement("li");
        var textNode = document.createTextNode(`${taskText}: ${descriptionText}`);


        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.className = "delete";

        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        listItem.appendChild(textNode);
        listItem.appendChild(deleteButton);

        document.getElementById("tasks").appendChild(listItem);

        taskInput.value = "";
        descriptionInput.value = "";
    }
}
