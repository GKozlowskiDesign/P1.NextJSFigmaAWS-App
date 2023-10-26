import { Raleway } from 'next/font/google'; // Import the font you want to use
import './globals.css';

const raleway = Raleway({ subsets: ['latin'] }); // Define your font

export const metadata = {
  title: 'MetaverseOfthings',
  description: 'The MetverseOfThings (MVoT) is a pioneering company at the forefront of blockchain research and deployment, firmly rooted in the practical applications of this groundbreaking technology in the real world. Our core mission is as ambitious as it is vital: to ensure that blockchain is seamlessly integrated into the fabric of society, thereby fostering benefits for all of humanity.',
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