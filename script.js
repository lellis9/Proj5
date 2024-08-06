document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('#sidebar-list li');
    const contentDisplay = document.getElementById('content-display');

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('data-title');
            contentDisplay.innerHTML = `<h3>${title}</h3><p>Information about ${title} will be displayed here.</p>`;
        });
    });
});
