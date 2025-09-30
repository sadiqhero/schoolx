// nav-script.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-route]').forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const route = e.currentTarget.dataset.route;
            ipcRenderer.send('navigate', route);
        });
    });
});