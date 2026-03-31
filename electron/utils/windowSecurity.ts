import { BrowserWindow, shell } from 'electron';

/**
 * Applies navigation and window-open guards to a BrowserWindow.
 *
 * Without these guards, any navigation (link click, window.location, redirect)
 * causes the webContents to load an arbitrary page that inherits the preload
 * script — giving it full IPC access to every safeHandle endpoint.
 *
 * This function:
 * 1. Blocks navigations to URLs outside the app's own origin.
 * 2. Denies window.open / target="_blank" and opens the URL in the default
 *    browser instead.
 */
export function applyNavigationGuards(win: BrowserWindow): void {
    win.webContents.on('will-navigate', (event, url) => {
        if (!isAllowedNavigation(win, url)) {
            event.preventDefault();
            console.warn(`[Security] Blocked navigation to: ${url}`);
        }
    });

    win.webContents.setWindowOpenHandler(({ url }) => {
        if (url && (url.startsWith('http:') || url.startsWith('https:') || url.startsWith('mailto:'))) {
            shell.openExternal(url);
        } else {
            console.warn(`[Security] Blocked window.open for: ${url}`);
        }
        return { action: 'deny' };
    });
}

function isAllowedNavigation(win: BrowserWindow, url: string): boolean {
    try {
        const target = new URL(url);
        const current = new URL(win.webContents.getURL());

        // Allow same-origin navigations (covers both dev localhost and production file://)
        if (target.origin === current.origin) {
            return true;
        }

        // Allow file:// -> file:// (production reloads / query-param changes)
        if (target.protocol === 'file:' && current.protocol === 'file:') {
            return true;
        }

        return false;
    } catch {
        // Malformed URL — block it
        return false;
    }
}
