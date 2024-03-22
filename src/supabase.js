

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase=createClient(
    "https://fablsgdamzaxquyghdit.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhYmxzZ2RhbXpheHF1eWdoZGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NDMzNTIsImV4cCI6MjAyNjUxOTM1Mn0.p0XAc9pt-A4A_8guSLt2GSs4YFWQr4opfIVy0XDcnPY"
);

export default supabase;





