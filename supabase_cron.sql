-- Enable the pg_cron extension (requires database restart or superuser)
-- Note: In Supabase, you can enable extensions in the Dashboard > Database > Extensions
create extension if not exists pg_cron;

-- Enable pg_net for making HTTP requests
create extension if not exists pg_net;

-- Schedule for 12:00 PM (Seeker Post)
-- Replace 'YOUR_SITE_URL' with your actual deployed URL (e.g., https://luna-alba-blog.vercel.app)
-- Ensure you have a way to secure this endpoint (e.g., a secret header) if public.
select cron.schedule(
  'seeker-post-12pm',
  '0 12 * * *',
  $$
  select net.http_get(
      'https://your-deployed-url.com/api/cron/generate?type=seeker'
  ) as request_id;
  $$
);

-- Schedule for 24:00 (00:00) AM (Employer Post)
select cron.schedule(
  'employer-post-12am',
  '0 0 * * *',
  $$
  select net.http_get(
      'https://your-deployed-url.com/api/cron/generate?type=employer'
  ) as request_id;
  $$
);

-- To check scheduled jobs:
-- select * from cron.job;

-- To unschedule:
-- select cron.unschedule('seeker-post-12pm');
-- select cron.unschedule('employer-post-12am');
