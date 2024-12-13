import "./globals.css";
import MainApp from "./main-app";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-gray-50">
                <MainApp>
                    {children}
                </MainApp>
            </body>
        </html>
    );
}
