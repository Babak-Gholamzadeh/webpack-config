import controllers from '../controllers';
import getURL from 'get-url-parts';


const routes = {
    // '/': controllers.home,
    '/login': controllers.login,
}

export default function router() {
    const path = getURL.path();
    const query = getURL.query();
    console.log('path:', path);
    console.log('query:', query);
    if(path in routes) {
        routes[path]();
    }
}
