# SAAR Pharma Website - Deployment Guide

This repository is built using Next.js 14 and is optimized for deployment on Vercel.

## Option 1: Deploy with Vercel (Recommended)

Vercel is the creator of Next.js and provides the fastest, most reliable deployment for Next.js applications.

### Step 1: Push Code to GitHub
1. Initialize a Git repository if you haven't already:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SAAR Pharma website"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push your code to the new repository:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import Project in Vercel
1. Go to [Vercel](https://vercel.com/) and sign up or log in.
2. Click on the **"Add New Project"** button.
3. Import the GitHub repository you just created.
4. Leave all default settings (Framework Preset: Next.js, Build Command: `npm run build`).
5. Click **"Deploy"**.

### Step 3: Configure Custom Domain (Optional)
Once deployed, Vercel gives you a `.vercel.app` domain. To use your custom domain (e.g., `saarpharma.co.in`):
1. Go to your Vercel Project Dashboard.
2. Navigate to **Settings > Domains**.
3. Add your domain and update your DNS records according to the Vercel instructions.

---

## Option 2: Deploy to a Traditional Node.js Server or VPS

If you prefer deploying on your own server (e.g., DigitalOcean, AWS EC2):

1. **Clone the repository** on your server.
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Build the Application:**
   ```bash
   npm run build
   ```
4. **Start the Production Server:**
   ```bash
   npm run start
   ```
   *Note: For production, we strongly recommend using a process manager like **PM2** to keep the application running continuously.*

   **Using PM2:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "saarpharma" -- run start
   pm2 save
   ```

5. Configure a Reverse Proxy (like NGINX) to route domain traffic from port 80/443 to the application's port (usually `3000`).
