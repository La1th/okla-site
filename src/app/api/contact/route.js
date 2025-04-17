import { google } from 'googleapis';

// Configuration for Google Sheets
const sheets = google.sheets('v4');

// These should be set in your .env.local file
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;

// More robust private key handling
let PRIVATE_KEY;
try {
  // Handle various formats the private key might be in
  const rawKey = process.env.GOOGLE_PRIVATE_KEY || '';
  PRIVATE_KEY = rawKey
    .replace(/\\n/g, '\n')  // Replace string \n with actual newlines
    .replace(/"(.+)"/s, '$1'); // Remove enclosing quotes if present
  
  if (!PRIVATE_KEY.includes('-----BEGIN PRIVATE KEY-----')) {
    console.error('Private key is malformed - missing BEGIN marker');
  }
} catch (e) {
  console.error('Error processing private key:', e);
  PRIVATE_KEY = '';
}

export async function POST(request) {
  try {
    // Log environment info for debugging (not in production)
    console.log('Sheet ID length:', SPREADSHEET_ID?.length || 0);
    console.log('Client email exists:', !!CLIENT_EMAIL);
    console.log('Private key length:', PRIVATE_KEY?.length || 0);
    console.log('Private key starts with:', PRIVATE_KEY?.substring(0, 30) + '...');
    
    const formData = await request.json();
    
    // Validate the data
    if (!formData.name || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Please provide name, email, and message' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }
    
    // Create timestamp
    const timestamp = new Date().toISOString();
    
    // Check if we have all required configuration
    if (!SPREADSHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
      console.error('Missing required Google Sheets configuration');
      throw new Error('Server configuration error - missing Google credentials');
    }
    
    // Authenticate with Google
    const auth = new google.auth.JWT({
      email: CLIENT_EMAIL,
      key: PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    // Prepare row data
    const rowData = [
      timestamp,
      formData.name,
      formData.email,
      formData.company || '',
      formData.message,
      'website_contact_form'
    ];
    
    try {
      // Append data to the spreadsheet
      const response = await sheets.spreadsheets.values.append({
        auth,
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!A:F', // Adjust based on your sheet name and columns
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [rowData],
        },
      });
      
      console.log('Google Sheets API response:', response.status);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Submission successfully saved to Google Sheets',
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    } catch (apiError) {
      console.error('Google Sheets API error:', apiError.message);
      throw new Error(`Google Sheets API error: ${apiError.message}`);
    }
    
  } catch (error) {
    console.error('Error storing contact form submission:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: `Failed to store your message: ${error.message}` 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
} 