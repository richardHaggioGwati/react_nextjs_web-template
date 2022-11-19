import '../css/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
    }) {
    
	return (
		<html lang='en'>
			<head>
                <title>Template</title>
                <meta name='description' content='App Template' />
				<link rel='icon' href='/favicon.ico' />
			</head>

			<body>
                
                {children}
                
			</body>
		</html>
	);
}