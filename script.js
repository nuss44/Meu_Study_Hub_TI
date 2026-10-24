// Função para obter e gerir a chave da API do Gemini no navegador do utilizador
function getGeminiApiKey() {
  let apiKey = localStorage.getItem('GEMINI_API_KEY');
  
  if (!apiKey) {
    apiKey = prompt("Por favor, insira a sua Gemini API Key para ativar as funcionalidades de IA:");
    if (apiKey) {
      localStorage.setItem('GEMINI_API_KEY', apiKey.trim());
    } else {
      alert("A chave é necessária para utilizar as funcionalidades de IA do PortfolioHUB.");
      return null;
    }
  }
  return apiKey;
}

// Exemplo de função para enviar pedidos à API Gemini
async function chamarGemini(promptTexto) {
  const apiKey = getGeminiApiKey();
  if (!apiKey) return;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: promptTexto }] }]
      })
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (erro) {
    console.error("Erro ao comunicar com o Gemini:", erro);
  }
}