import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ycluqxsqqyzoweriqbdf.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbHVxeHNxcXl6b3dlcmlxYmRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1ODE2MTgsImV4cCI6MjAwNjE1NzYxOH0.JdOIxrcrhuTkiKhxQIW2TiP2TIR5U9cnXlW9JqHhGc4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
