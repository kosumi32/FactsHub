import "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Outlet, Link, Navigate } from "react-router-dom";

export function Layout() {
    return <div className="app-layout">
        <header className= "app-header">
            <div className="header-content">
                <h1>FactsHub</h1>
                <nav>
                    <SignedIn>
                        <Link to="/">Facts Generator</Link>
                        <Link to="/history">History</Link>

                        {/* Able to see profile/ signout */}
                        <UserButton />
                    </SignedIn>
                </nav>
            </div>
        </header>

        <main className= "app-main">
            <SignedOut>
                {/* If signed out, redirect to sign-in page */}
                <Navigate to="/sign-in" replace />
            </SignedOut>

            {/* Render the child components inside the Layout (in App.jsx) */}
            <Outlet />
        </main>
    </div>
}