import "react";
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";


export function AuthenticationPage() {
    return <div className="auth-container">
        {/* If signed-out */}
        <SignedOut>
            {/* If in sign-in / sign-up Show*/}
            <SignIn path="/sign-in" routing="path" />
            <SignUp path="/sign-up" routing="path" />
        </SignedOut>

        {/* If signed-in */}
        <SignedIn>
            <div className="signed-in-message">
                <h2>Welcome back!</h2>
                <p>You are signed in. You can now access the FactsHub.</p>
            </div>
        </SignedIn>
    </div>
}