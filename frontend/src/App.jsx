import ClerkProviderWithRoutes from './auth/ClerkProviderWithRoutes.jsx'
import { Route , Routes} from 'react-router-dom'
import { ChallengeGenerator } from './challenge/ChallengeGenerator.jsx'
import { MCQChallenge } from './challenge/MCQChallenge.jsx'
import { Layout } from './layout/Layout.jsx'
import { HistoryPanel } from './history/HistoryPanel.jsx'
import { AuthenticationPage } from './auth/AuthenticationPage.jsx'

import './App.css'

function App() {
  return <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />} />
        <Route path="/sign-up/*" element={<AuthenticationPage />} />

        {/* Everything renders inside of this Layout Component- General Layout */}
          <Route element={ <Layout /> }>
            <Route path="/" element={<ChallengeGenerator />} />
            <Route path="/history" element={<HistoryPanel />} />
          </Route>
      </Routes>
    </ClerkProviderWithRoutes>
}

export default App
