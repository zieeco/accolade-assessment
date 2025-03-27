import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {Providers} from '@/contexts/providers';
import {ThemeProvider} from '@/components/theme-provider';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Country Explorer',
	description: 'Explore and compare countries around the world',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					disableTransitionOnChange>
					<Providers>{children}</Providers>
				</ThemeProvider>
			</body>
		</html>
	);
}
