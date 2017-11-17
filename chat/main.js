 var config = {
  apiKey: "AIzaSyB4OIcWiO4UFAcLh3LdG1NzIsdtVMJt0FY",
  authDomain: "chat-app-22349.firebaseapp.com",
  databaseURL: "https://chat-app-22349.firebaseio.com",
  projectId: "chat-app-22349",
  storageBucket: "chat-app-22349.appspot.com",
  messagingSenderId: "297983316811"
 };
 firebase.initializeApp(config);
 
 var chatData = firebase.database().ref();
 
 function pushMessage(event) {
  if (event.keyCode == 13) {
   var name = $('#nameInput').val();
   var text = $('#messageInput').val();
   chatData.push({name: name, text: text});
   $('#messageInput').val('');
  }
 }
 
  $('#messageInput:').keypress(pushMessage);
   
 chatData.on("child_added", showMessage);
 
 function showMessage(msg) {
  var message = msg.val();
  var messageSender = message.name;
  var messageContent = message.text;
   
  var messageEl = $("<div/>").addClass("message");
  var senderEl = $("<span/>").text(messageSender + ": ");
  var contentEl = $("<span/>").text(messageContent);
   
  messageEl.append(senderEl);
  messageEl.append(contentEl);
  $('#messages').append(messageEl);
 }
 