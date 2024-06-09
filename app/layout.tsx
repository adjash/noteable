import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import NavBar from "./components/NavBar";
import variables from "./assets/scss/variables.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <NavBar />
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
