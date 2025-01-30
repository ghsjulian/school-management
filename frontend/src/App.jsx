import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
    Routes,
    Route
} from "react-router-dom";
import myRoutes from "./Router";
import {AuthProvider} from "./auth/useAuth"


function App() {
    const router = createBrowserRouter(myRoutes);
    return (
        <>
        <AuthProvider>
    <RouterProvider router={router} />;
        </AuthProvider>
        </>
        )
}

export default App;
