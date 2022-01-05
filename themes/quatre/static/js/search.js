import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.5.3/dist/fuse.esm.js';

const params = new URLSearchParams(window.location.search);
const query = params.get('q');

if(query !== null) {
    const list = await (await fetch('/index.json')).json();

    const fuse = new Fuse(list, {
        isCaseSensitive: false,
        ignoreLocation: true,
        minMatchCharLength: 2,
        keys: ['title', 'content', 'date'],
    })
    const result = fuse.search(query);

    if(result.length > 0) {
        const results = document.querySelector('#results');
        results.innerHTML = '';
        result.forEach(item => {
            let date = new Date(item.item.date);
            date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;

            if(item.item.title !== null && item.item.title !== '') {
                results.insertAdjacentHTML('beforeend', `<li>
                    <i>${date}</i>
                    <a href="${item.item.permalink}">
                        <b>${item.item.title}</b>
                    </a> - ${truncateString(item.item.content, 30)}
                </li>`)
            } else {
                results.insertAdjacentHTML('beforeend', `<li>
                    <i>${date}</i>
                    <a href="${item.item.permalink}">
                        ${truncateString(item.item.content, 40)}
                    </a>
                </li>`)
            }
        });
    }
}

function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
}