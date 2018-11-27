export function sendMessage(state, { userame, content, date }) {
  const newState = { ...state };

  return newState;
}

export function clearMessages(state) {
  const newState = { ...state };

  newState.messages = [];

  return newState;
}

export function loadChats(state) {
  const newState = { ...state };

  newState.chats = [];

  return newState;
}
