import { ClerkProvider, RedirectToSignIn } from '@clerk/clerk-react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

// Import your Publishable Key- from env
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

// {children} - all of the components that will be wrapped by this provider
export default function ClerkProviderWithRoutes({ children }) {
    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </ClerkProvider>
    )
}