import "./globals.css";

export const metadata = {
  title: "Agencia Sueños de Libertad | Viaja a tu manera",
  description: "Encuentra experiencias auténticas para descubrir Colombia a tu ritmo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

