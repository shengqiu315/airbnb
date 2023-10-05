import { useRoutes } from "react-router-dom"
import routes from './router'
import AppHeader from '@/components/app-header/index'
import AppFooter from '@/components/app-footer/index'
function App() {
  return (
    <div className="app">
      <AppHeader />
      <main className="app-main">{useRoutes(routes)}</main>
      <AppFooter />
    </div>
  );
}

export default App;
