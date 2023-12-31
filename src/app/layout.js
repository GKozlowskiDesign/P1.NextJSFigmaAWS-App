// RootLayout.js
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Include the font styles in the head of your HTML */}
        <link rel="stylesheet" href="./globals.css" />
        
      </head>


      <body>
        {children}
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>

      </body>
 

    </html>
  );
}