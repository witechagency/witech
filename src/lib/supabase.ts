import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jyizkhltnliuicbpphhh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5aXpraGx0bmxpdWljYnBwaGhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMzM1MDYsImV4cCI6MjA3OTgwOTUwNn0.HJIjkGFTgbSrA8tX5Kaq2AlcJ248SgYeg-QuU3m3RDA"
);
