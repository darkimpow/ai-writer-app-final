import {createClient} from "@supabase/supabase-js";

const supabase = createClient(
    'https://iytjwvzkrnbluroigxoz.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5dGp3dnprcm5ibHVyb2lneG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MzExODMsImV4cCI6MTk5NTUwNzE4M30.IDeBjr8nsgzAp24ZR7ceNtMbPqaPT1vlMtc-en-nVn8'
);

export default supabase;

