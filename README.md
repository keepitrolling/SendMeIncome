# 💸 Pay Me App

A simple, beautiful payment page that lets people send you money via Stripe.

---

## 📁 What's In This Folder

```
pay-me-app/
├── index.html          ← The main payment page (what people see)
├── success.html        ← Shown after successful payment
├── api/
│   └── create-checkout.js  ← Backend code that talks to Stripe
├── package.json        ← Lists the code libraries we need
└── README.md           ← This file!
```

---

## 🚀 Setup Instructions (Step by Step)

### Step 1: Install Node.js

Node.js lets you run JavaScript on your computer (not just in a browser).

1. Go to: https://nodejs.org
2. Download the **LTS** version (the green button)
3. Run the installer, click "Next" through everything
4. Restart your computer after installing

**To check if it worked:**
- Open your terminal (see Step 3 below)
- Type: `node --version`
- You should see something like: `v20.10.0`

---

### Step 2: Create a Stripe Account

Stripe is the service that handles the actual money transfers.

1. Go to: https://stripe.com
2. Click "Start now" and create an account
3. Once logged in, you'll be in "Test mode" by default (perfect for testing!)

**Get your API keys:**
1. In Stripe dashboard, click "Developers" in the top right
2. Click "API keys"
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_`) - this goes in your HTML
   - **Secret key** (starts with `sk_test_`) - this stays secret, goes on the server

⚠️ **IMPORTANT:** Never share your secret key with anyone!

---

### Step 3: Open This Project in VSCode

1. Open VSCode
2. Click **File** → **Open Folder**
3. Navigate to and select the `pay-me-app` folder
4. Click "Select Folder"

You should now see all the files in the left sidebar.

---

### Step 4: Open the Terminal in VSCode

The terminal is where you type commands to run your project.

1. In VSCode, click **Terminal** → **New Terminal** (at the top menu)
2. A panel will open at the bottom of VSCode
3. This is where you'll type commands

---

### Step 5: Install the Required Libraries

In the terminal, type this command and press Enter:

```
npm install
```

This reads `package.json` and downloads the Stripe library. You'll see it create a `node_modules` folder.

---

### Step 6: Add Your Stripe Publishable Key

1. In VSCode, click on `index.html` in the sidebar
2. Press `Ctrl+F` (or `Cmd+F` on Mac) to search
3. Search for: `pk_test_YOUR_KEY_HERE`
4. Replace that whole thing with your **Publishable key** from Stripe

It should look like:
```javascript
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51ABC123...your_actual_key...';
```

5. Save the file (`Ctrl+S` or `Cmd+S`)

---

### Step 7: Create a Vercel Account

Vercel is where your website will live on the internet (it's free!).

1. Go to: https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub" (easiest option)
   - If you don't have GitHub, create one at https://github.com first
4. Authorize Vercel to access your GitHub

---

### Step 8: Install Vercel CLI

The CLI (Command Line Interface) lets you deploy from your terminal.

In your VSCode terminal, type:

```
npm install -g vercel
```

Then log in to Vercel:

```
vercel login
```

Follow the prompts - it will open your browser to confirm.

---

### Step 9: Deploy Your App!

In your VSCode terminal, type:

```
vercel
```

It will ask you some questions:
- **Set up and deploy?** → Press `Y` then Enter
- **Which scope?** → Just press Enter (use your account)
- **Link to existing project?** → Press `N` then Enter
- **What's your project name?** → Type a name like `my-payment-page` and press Enter
- **Which directory is your code in?** → Just press Enter (current directory)

🎉 Vercel will give you a URL like: `https://my-payment-page.vercel.app`

---

### Step 10: Add Your Secret Key to Vercel

Your secret Stripe key needs to be stored safely on Vercel's servers.

1. Go to: https://vercel.com/dashboard
2. Click on your project
3. Click **Settings** (tab at top)
4. Click **Environment Variables** (left sidebar)
5. Add a new variable:
   - **Name:** `STRIPE_SECRET_KEY`
   - **Value:** Your secret key from Stripe (starts with `sk_test_`)
6. Click "Save"

Now redeploy so it picks up the new key:

```
vercel --prod
```

---

## ✅ Testing Your Payment Page

1. Go to your Vercel URL (like `https://my-payment-page.vercel.app`)
2. Enter an amount (try $5.00)
3. Click "Send Payment"
4. You'll be redirected to Stripe's checkout page

**Test card numbers (these are fake, for testing):**
- **Card number:** 4242 4242 4242 4242
- **Expiry:** Any future date (like 12/34)
- **CVC:** Any 3 digits (like 123)
- **ZIP:** Any 5 digits (like 12345)

---

## 💰 Going Live (Accepting Real Money)

When you're ready to accept real payments:

1. In Stripe dashboard, complete your account verification
2. Toggle off "Test mode" (switch in top right)
3. Get your LIVE keys (they start with `pk_live_` and `sk_live_`)
4. Update your `index.html` with the live publishable key
5. Update your Vercel environment variable with the live secret key
6. Redeploy: `vercel --prod`

---

## 🔧 Common Issues

**"Module not found" error:**
→ Run `npm install` again

**Payment button does nothing:**
→ Check browser console (right-click → Inspect → Console tab) for errors
→ Make sure you replaced `pk_test_YOUR_KEY_HERE` with your actual key

**Stripe says "Invalid API Key":**
→ Double-check you're using the right keys (publishable in HTML, secret in Vercel)

**Changes not showing up:**
→ Redeploy with `vercel --prod`
→ Hard refresh your browser with `Ctrl+Shift+R`

---

## 🎨 Customizing Your Page

Want to change colors, text, or styling? Here's where to look in `index.html`:

- **Page title:** Search for `<title>` tag
- **Header text:** Search for "Send Payment" 
- **Colors:** Search for `#6366f1` (purple) and `#8b5cf6` (lighter purple)
- **Background:** Search for `gradient-bg` class

---

## 📞 Need Help?

- **Stripe docs:** https://stripe.com/docs
- **Vercel docs:** https://vercel.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

Good luck! 🚀
