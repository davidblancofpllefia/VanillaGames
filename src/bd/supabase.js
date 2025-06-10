    import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jrmtfxneajxpgplkvtzt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpybXRmeG5lYWp4cGdwbGt2dHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3OTk1NzMsImV4cCI6MjA1NzM3NTU3M30.ieOswAXgTBsGubN4V0AbTCJSubP1lM1nPkQUFq8E3t8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
