-- Create the posts table
create table posts (
  id uuid default gen_random_uuid() primary key,
  slug text not null unique,
  title text not null,
  content text, -- Markdown content
  excerpt text,
  cover_image text,
  category text,
  tags text[],
  published_at timestamptz default now(),
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table posts enable row level security;

-- Create a policy that allows anyone to read published posts
create policy "Public posts are viewable by everyone"
  on posts for select
  using (true);

-- Create a policy that allows authenticated users (admins) to insert/update/delete
-- For simplicity, we'll allow all operations for authenticated users, 
-- but in production you'd want to restrict this to specific roles.
create policy "Authenticated users can modify posts"
  on posts for all
  using (auth.role() = 'authenticated');
