import AppProvider from '../src/components/AppProvider';

export const metadata = {
  title: {
    default: 'exolog',
    template: '%s | exolog',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th-TH">
      <head />
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
