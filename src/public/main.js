const socket = io();


socket.on("new message", (data) => {
  console.log('New SMS');
  const messagesList = document.getElementById("messages");

  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-warning list-group-item-action";
  
  const body = document.createElement('p');
  body.appendChild(document.createTextNode(data.Body));

  const from = document.createElement('span');
  from.appendChild(document.createTextNode(data.From));
  
  //const _id = document.createElement('span');
  //_id.appendChild(document.createTextNode(data._id));

  const createdAt = document.createElement('span');
  createdAt.appendChild(document.createTextNode(data.createdAt));

  li.appendChild(body);
  li.appendChild(from);
  //li.appendChild(_id);
  li.appendChild(createdAt);
  
  messagesList.prepend(li);
});
