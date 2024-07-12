import ReactDOM from 'react-dom/client'
import {Auth0Provider} from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="dev-1k68w40lbn1cebez.eu.auth0.com"
        clientId="ogbbauUcyE2hs6qFCExxINweM8Tx6xFi"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App/>
    </Auth0Provider>,
);
