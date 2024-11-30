// Armazena as mensagens
let messages = JSON.parse(localStorage.getItem('messages')) || {};
const contactName = "Contato"; // Nome do contato fixo

// Carrega as mensagens do contato
function loadMessages() {
  const messageList = document.getElementById('message-list');
  messageList.innerHTML = '';

  // Carrega mensagens do contato
  const chatMessages = messages[contactName] || [];
  chatMessages.forEach(msg => {
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
    // Adiciona a mensagem para o contato
    if (!messages[contactName]) {
      messages[contactName] = [];
    }
    messages[contactName].push(`Você: ${message}`);

    // Salva as mensagens no localStorage
    localStorage.setItem('messages', JSON.stringify(messages));

    loadMessages(); // Atualiza a visualização das mensagens
    messageInput.value = ''; // Limpa o campo de entrada
  }
});

// Carrega as mensagens ao iniciar
loadMessages();