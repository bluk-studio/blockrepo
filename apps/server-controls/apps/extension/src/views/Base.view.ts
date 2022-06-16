import { readFileSync } from 'fs';
import { CancellationToken, Uri, Webview, WebviewView, WebviewViewProvider, WebviewViewResolveContext } from 'vscode';
import { getWebviewHtml } from '../helpers/GetWebviewHtml.helper';

export class BaseViewProvider implements WebviewViewProvider {
	public static viewType: string;
  public appScreen?: string;

	private _view?: WebviewView;

	constructor(
		private readonly _extensionUri: Uri,
	) { }

	public resolveWebviewView(
		webviewView: WebviewView,
		context: WebviewViewResolveContext,
		_token: CancellationToken,
	) {
		this._view = webviewView;

		webviewView.webview.options = {
			// Allow scripts in the webview
			enableScripts: true,

			localResourceRoots: [
				this._extensionUri
			]
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

    console.log('resolve webview');
    setInterval(() => {
      console.log('posting message');
      webviewView.webview.postMessage({ command: "test", isTest: true });
    }, 1000);
  }

	private _getHtmlForWebview(webview: Webview) {
		// Getting information from generated entrypoint.json
		const file = readFileSync(Uri.joinPath(this._extensionUri, 'assets/webview/entrypoint.json').fsPath);
		const entrypoint = JSON.parse(file.toString()) as { js: string, css: string };

		const scriptUri = webview.asWebviewUri(Uri.joinPath(this._extensionUri, 'assets', 'webview', entrypoint.js));
		const styleUri = webview.asWebviewUri(Uri.joinPath(this._extensionUri, 'assets', 'webview', entrypoint.css));

		return getWebviewHtml(scriptUri, styleUri, webview.cspSource, this.appScreen);		
	}
}
