import { ApplicationName } from '@/libs/react/router/breadcrumbs';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, Paper } from '@mui/material';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: ApplicationName,
  description: 'Simple application for test automation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const style = {
    height: '100%',
  };

  return (
    <html lang="en" style={style}>
      <body style={{ ...style, paddingTop: 24, paddingBottom: 24 }}>
        <Paper
          sx={{
            ...style,
            width: '75%',
            marginBottom: 'auto',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Container>{children}</Container>
        </Paper>
      </body>
    </html>
  );
}
