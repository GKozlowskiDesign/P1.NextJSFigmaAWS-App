import { Raleway } from 'next/font/google'; // Import the font you want to use
import './globals.css';

const raleway = Raleway({ subsets: ['latin'] }); // Define your font

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}> {/* Apply the new font class */}
        {children}
      </body>
    </html>
  );
}