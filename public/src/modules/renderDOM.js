export default function renderDOM(component, query = '#root') {
    var parent = document.querySelector(query);
    parent.innerHTML = '';
    parent.appendChild(component);
}