import { Uri } from 'vscode';

export function getWebviewHtml(scriptUri: Uri, styleUri: Uri, cspSource: string, appScreen?: string): string {
	const nonce = getNonce();

	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${cspSource}; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta name="app:currentScreen" content="${appScreen}" />

				<link rel="stylesheet" href="${styleUri}">
				
				<title>Webview</title>
			</head>
			<body>
				<div id="app"></div>

				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
		</html>
	`;
};

function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}