import * as vscode from 'vscode';

// Importing views
import { ServerControlsViewProvider } from './views/ServerControls.view';
import { StatisticsViewProvider } from './views/Statistics.view';

export function activate(context: vscode.ExtensionContext) {
	// Views
	context.subscriptions.push(vscode.window.registerWebviewViewProvider(ServerControlsViewProvider.viewType, new ServerControlsViewProvider(context.extensionUri)));
	context.subscriptions.push(vscode.window.registerWebviewViewProvider(StatisticsViewProvider.viewType, new StatisticsViewProvider(context.extensionUri)));
}

// this method is called when your extension is deactivated
export function deactivate() {}