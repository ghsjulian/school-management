// For Search Page...
const a = document.querySelectorAll(".do6Dc_f");
a.forEach(el => {
    console.log(el.textContent);
});

// View A Gig
const CLIENTS = [];
const root = document.querySelectorAll(
    ".zle7n0ri.zle7n0uk.zle7n016n.zle7n00.zle7n010o.zle7n0xm.zle7n0oq.zle7n01b8"
);
async function saveClients(content) {
    const data = {
        data: content
    };
    const url = "http://localhost:3000/server/save-clients";
    try {
        const request = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const response = await request.json();
        console.log(response);
        console.log("[+] Clients Info Sent Successfully");
    } catch (error) {
        console.log(error.message);
    }
}
root.forEach(el => {
    const p = el.children[0].querySelectorAll("p");
    CLIENTS.push(p[0].textContent);
});
saveClients(CLIENTS)
