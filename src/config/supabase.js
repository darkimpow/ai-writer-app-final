import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iytjwvzkrnbluroigxoz.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5dGp3dnprcm5ibHVyb2lneG96Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTkzMTE4MywiZXhwIjoxOTk1NTA3MTgzfQ.nUuCybkc4-2z-PcBSszgMNoRmtG1BAKfXpnKfxa2b5I';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
