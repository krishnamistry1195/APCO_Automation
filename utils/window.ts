import { Page } from '@playwright/test';

export async function maximizeWindow(page: Page) {
  try {
    // Use Chrome DevTools Protocol to maximize the native window (Chromium only)
    // If CDP is not available (non-Chromium), this will throw and be ignored.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const client = await (page.context() as any).newCDPSession(page);
    const { windowId } = await client.send('Browser.getWindowForTarget');
    await client.send('Browser.setWindowBounds', { windowId, bounds: { windowState: 'maximized' } });
  } catch (e) {
    // best-effort: ignore if not supported
  }
}
