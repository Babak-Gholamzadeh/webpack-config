export default async function api(url, options = {}) {
    var settings = Object.assign({
        method: 'POST',
        headers: {
            'Authentication': 'secret',
            'Content-Type': 'application/json;charset=utf-8'
        },
    }, options);
    try {
        const response = fetch(url, settings);
        return await response.json();
    }
    catch(e) {
        // Handle error somehow
        return false;
    }
}