export async function GET() {
  // This endpoint is just for debugging environment variables
  // DO NOT use in production as it exposes sensitive info

  // Safely check environment variables without exposing full contents
  const envStatus = {
    GOOGLE_SHEET_ID: {
      exists: !!process.env.GOOGLE_SHEET_ID,
      length: process.env.GOOGLE_SHEET_ID?.length || 0,
      value: process.env.GOOGLE_SHEET_ID?.substring(0, 5) + '...',
    },
    GOOGLE_CLIENT_EMAIL: {
      exists: !!process.env.GOOGLE_CLIENT_EMAIL,
      length: process.env.GOOGLE_CLIENT_EMAIL?.length || 0,
      // Show just the domain part for safety
      value: process.env.GOOGLE_CLIENT_EMAIL 
        ? '...@' + process.env.GOOGLE_CLIENT_EMAIL.split('@')[1]
        : 'not set',
    },
    GOOGLE_PRIVATE_KEY: {
      exists: !!process.env.GOOGLE_PRIVATE_KEY,
      length: process.env.GOOGLE_PRIVATE_KEY?.length || 0,
      // Show just if it has the correct markers
      hasBeginMarker: process.env.GOOGLE_PRIVATE_KEY?.includes('-----BEGIN PRIVATE KEY-----') || false,
      hasEndMarker: process.env.GOOGLE_PRIVATE_KEY?.includes('-----END PRIVATE KEY-----') || false,
      hasNewlines: process.env.GOOGLE_PRIVATE_KEY?.includes('\\n') || false,
    },
    NODE_ENV: process.env.NODE_ENV,
  };
  
  return new Response(
    JSON.stringify({ 
      success: true, 
      environment: envStatus,
      timestamp: new Date().toISOString()
    }),
    { 
      status: 200,
      headers: { 'Content-Type': 'application/json' } 
    }
  );
} 