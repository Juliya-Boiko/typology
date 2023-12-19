import './globals.css';
import { QueryProvider } from './components/providers/QueryProvider';
import { Header } from './components/layouts/header/header';
import { Footer } from './components/layouts/footer/footer';

export const metadata = {
  title: "Typology Paris",
  description: "Products for each skin typology",
};

const RootLayout = ({ children }) => (
  
  <html lang="en">
    <body>
      <QueryProvider>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </QueryProvider>
    </body>
  </html>
);

export default RootLayout;