// Armazena as mensagens
let messages = JSON.parse(localStorage.getItem('messages')) || {};

// Nomes dos usuários
const user1 = "Você"; // Nome do usuário 1
const user2 = "Contato"; // Nome do usuário 2

// Carrega as mensagens
function loadMessages() {
  const messageList = document.getElementById('message-list');
  messageList.innerHTML = '';

  // Carrega mensagens do usuário 1
  const chatMessagesUser1 = messages[user1] || [];
  chatMessagesUser1. forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.innerText = msg;
    messageList.appendChild(messageDiv);
  });

  // Carrega mensagens do usuário 2
  const chatMessagesUser2 = messages[user2] || [];
  chatMessagesUser2. forEach(msg => {
    const messageDiv = document.createElement('div');
    messageDiv.innerText = msg;
    messageList.appendChild(messageDiv);
  });
}

// Envia uma mensagem
document.getElementById('send-message-btn').addEventListener('click', function() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();

  if (message) {
    // Adiciona a mensagem para o usuário 1
    if (!messages[user1]) {
      messages[user1] = [];
    }
    messages[user1].push(`${user1}: ${message}`);

    // Simula a resposta do usuário 2
    if (!messages[user2]) {
      messages[user2] = [];
    }
    messages[user2].push(`${user2}: Resposta para "${message}"`);

    // Salva as mensagens no localStorage
    localStorage.setItem('messages', JSON.stringify(messages));

    loadMessages(); // Atualiza a visualização das mensagens
    messageInput.value = ''; // Limpa o campo de entrada
  }
});

// Carrega as mensagens ao iniciar
loadMessages();