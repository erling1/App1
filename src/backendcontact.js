

const base_url = "http://192.168.1.172:8001";

export async function createChat() {

    const respons = await fetch(base_url + '/chats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    const data = await respons.json();

    if (!respons.ok) {
        return Promise.reject({ status: respons.status, data });
    }

    return data;
}

console.log("base url", base_url)

export async function sendChatMessage(chatId, Message) {
    const respons = await fetch(base_url + `/chats/${chatId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Message })
    });

    //const data = await respons.json();

    if (!respons.ok) {
        return Promise.reject({ status: respons.status, data: await respons.json() });
    }

    

    return respons.body;
}


