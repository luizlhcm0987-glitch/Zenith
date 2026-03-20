async function testFetch() {
    console.log("Iniciando teste de fetch direto...");
    try {
        const response = await fetch('http://127.0.0.1:11434/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'qwen3.5:0.8b',
                messages: [{ role: 'user', content: 'Oi' }],
                stream: false
            })
        });

        console.log("Status da resposta:", response.status);
        const data = await response.json();
        console.log("Resposta do Ollama:", data.message.content);
    } catch (e) {
        console.error("Erro no teste de fetch:", e);
    }
}

testFetch();
