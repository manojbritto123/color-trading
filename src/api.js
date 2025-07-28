const API_BASE = "http://localhost:3000/api";

export async function placeTrade(color, amount) {
  const response = await fetch(`${API_BASE}/trade`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ color, amount }),
  });
  return response.json();
}

export async function getTradeHistory() {
  const response = await fetch(`${API_BASE}/history`);
  return response.json();
}

export async function getResult() {
  const response = await fetch(`${API_BASE}/result`);
  return response.json();
}
