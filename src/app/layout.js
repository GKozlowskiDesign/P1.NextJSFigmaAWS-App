// RootLayout.js
import '/Users/gkozlowski/Desktop/MVOT/part-1/src/app/globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Include the font styles in the head of your HTML */}
        <link rel="stylesheet" href="/path/to/your/globals.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}