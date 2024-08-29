import "./globals.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "sonner";
export const metadata = {
  title: "7Wonders: Top Day Tours in Cusco | Explore Machu Picchu & More",
  description: "Discover top day tours in Cusco with expert guides. Explore Machu Picchu, Sacred Valley, and more. Book your adventure today and experience Cusco!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="es">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Discover top day tours in Cusco with expert guides. Explore Machu Picchu, Sacred Valley, and more. Book your adventure today and experience Cusco!" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta http-equiv="Expires" content="0" />
          <meta http-equiv="Last-Modified" content="0" />
          <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate" />
          <meta http-equiv="Pragma" content="no-cache" />
          <link rel="icon" href="/favico.ico" />
        </head>

        <body suppressHydrationWarning={true}>
          <ReduxProvider>
            <AppProvider>{children}</AppProvider>
            <Toaster position="top-center" richColors />
          </ReduxProvider>
        </body>
      </html>
    </>
  );
}
