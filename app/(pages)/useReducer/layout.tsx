// LAYOUT PARA EL EJEMPLO DE USO DE REDUCER
import { AuthProvider } from './context/AuthContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}