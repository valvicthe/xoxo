export async function launchClient(placeId: number): Promise<void> {
  try {
    // 1. Request authentication ticket from your backend
    const response = await fetch('/api/game/get-join-ticket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ placeId }),
    });

    if (!response.ok) throw new Error('Failed to generate join ticket.');

    const { authTicket, joinUrl } = await response.json();

    // 2. Invoke the custom Windows URI scheme
    const launcherUri = `xoxo://launch?placeId=${placeId}&ticket=${authTicket}&joinScript=${encodeURIComponent(joinUrl)}`;
    
    // Redirect browser window to trigger Windows protocol handler
    window.location.href = launcherUri;
  } catch (error) {
    console.error('Launch Error:', error);
    alert('Failed to launch xoxo. Make sure the launcher is installed.');
  }
}
