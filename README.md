[README.md](https://github.com/user-attachments/files/30464905/README.md)
# React Team Project Collaborating on a React Frontend

Team Members: Brian J, Cahlaija K, Henoc M, Marlon R, Kevin M

A collaborative team workflow for building a multi-page React application using **React Router** and the **Context API**, fetching data from an external API — all while using Git branches and pull requests so no one overwrites anyone else's work.

---

## Table of Contents

- [Objective](#objective)
- [Roles](#roles)
- [Step 1: Repository Setup](#step-1-repository-setup)
- [Step 2: Initialize the React App & Push to Main](#step-2-initialize-the-react-app--push-to-main)
- [Step 3: Clone the Project](#step-3-clone-the-project)
- [Step 4: Create Individual Member Branches](#step-4-create-individual-member-branches)
- [Step 5: File-Based Assignment & Component Collaboration](#step-5-file-based-assignment--component-collaboration)
- [Workflow & Pull Request Process](#workflow--pull-request-process)
- [Troubleshooting](#troubleshooting)

---

## Objective

Successfully set up, clone, branch, and collaborate on a multi-page React application (using React Router and Context API) that fetches data from an external API — **without overwriting each other's work.**

---

## Roles

| Role | Who | Responsibility |
|------|-----|----------------|
| **Driver** | One designated member | Creates the repo, scaffolds the base app, reviews and merges all pull requests |
| **Members** | Everyone else | Clone the repo, work in assigned files, open PRs for review |

---

## Step 1: Repository Setup

> **Who:** The Driver only
> **Goal:** Create the central hub for the project and give everyone access.

1. **Create the repo** — the Driver logs into GitHub and creates a new **Private** or **Public** repository (e.g. `react-team-project`)
2. **Add collaborators:**
   - Go to the repository's **Settings** tab
   - Click **Collaborators** in the left menu
   - Click **Add people** and invite teammates by GitHub username or email
3. **Accept invites** — each member checks their email or GitHub notifications and accepts

---

## Step 2: Initialize the React App & Push to Main

> **Who:** The Driver
> **Goal:** Set up a React project with Vite that includes routing.

Create the app with Vite and open it in VS Code:

```bash
npm create vite@latest
```

Use these options when prompted:

| Prompt | Value |
|--------|-------|
| Project name | `react-team-project` |
| Framework | React |
| Variant | JavaScript |
| Linter | Oxlint |
| Install | Yes |

Install the routing dependency:

```bash
npm install react-router
```

Then set up the base structure:

- Ensure `.gitignore` includes `.env` (create an `.env` later for an API key if needed)
- Create a `components/` folder with an empty `Nav.jsx`
- Create a `pages/` folder with an empty `Home.jsx`
- Create a `styles/` folder, move `App.css` into it, and confirm it's imported correctly in `App.jsx`

Verify the dev server runs, then push the base template:

```bash
npm run dev          # confirm it works, then stop it

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

---

## Step 3: Clone the Project

> **Who:** The other team members
> **Goal:** Get a local copy of the working base app.

```bash
# Navigate to where you keep your projects, then:
git clone <YOUR_GITHUB_REPO_URL>
cd react-team-project
```

Then:
1. Open the folder in VS Code
2. Run `npm install` to install dependencies locally
3. Create a local `.env` file if an API key is required (e.g. `VITE_API_KEY=your_key_here`)

---

## Step 4: Create Individual Member Branches

> **Who:** Everyone (including the Driver)
> **Goal:** Create a personal feature branch so you can build without breaking `main`.

```bash
# Make sure you're on the updated main branch
git checkout main

# Create and switch to your personal branch (use your own name)
git checkout -b bob

# Push it so the branch exists remotely
git push -u origin bob
```

---

## Step 5: File-Based Assignment & Component Collaboration

To prevent merge conflicts, **each member works exclusively in their assigned files.** Decide as a group who owns what, keeping the work evenly distributed.

> **API Choice:** Select **one** shared API for the whole team — e.g. [DummyJSON](https://dummyjson.com/), [OMDb Movie API](https://www.omdbapi.com/), [TheCatAPI](https://thecatapi.com/), or [PokeAPI](https://pokeapi.co/).

**Chosen API:** _`<fill in your team's API here>`_

### 📋 Team Assignments

Fill in each teammate's name next to the file(s) they own. Keep the work evenly distributed, and update the **Status** as you go.

| Team Member | Assigned File(s) | Status |
|-------------|------------------|--------|
| _`<name>`_ | `App.jsx`, `context.js` | 🔲 Not started |
| _`<name>`_ | `Home.jsx`, `SearchBar.jsx` | 🔲 Not started |
| _`<name>`_ | `ItemList.jsx`, `Item.jsx` | 🔲 Not started |
| _`<name>`_ | `ItemDetails.jsx`, `Favorites.jsx` | 🔲 Not started |
| _`<name>`_ | `Nav.jsx`, `NotFound.jsx`, `api.js` | 🔲 Not started |

> **Status key:** 🔲 Not started · 🟡 In progress · ✅ Merged into `main`
> The file groupings above are a suggestion — rearrange them to fit your team's size and strengths.

### Pages

| File | Description |
|------|-------------|
| `Home.jsx` | Main landing page. Renders `<SearchBar/>` and `<ItemList/>` |
| `ItemDetails.jsx` | Single item detail view (using `useParams`) |
| `Favorites.jsx` | Saved favorites page. Renders `<ItemList/>` |
| `NotFound.jsx` | Fallback 404 page with a link back to `Home.jsx` |

### Components

| File | Description |
|------|-------------|
| `Nav.jsx` | Site navigation. Includes a light/dark mode toggle using `ThemeContext` |
| `SearchBar.jsx` | Input + button, rendered in `Home.jsx`. Clicking either requests from `api.js` or filters the list |
| `ItemList.jsx` | Rendered in `Home.jsx` and `Favorites.jsx`. Renders individual `<Item/>` components |
| `Item.jsx` | Clicking navigates to `ItemDetails.jsx`. Also has a button to add the item to `favoriteItems` |

### Core & Utility Files

| File | Description |
|------|-------------|
| `App.jsx` | Renders `<Nav/>` and configures top-level routing. Holds state for `items`, `favoriteItems`, and `theme`. Provides `ThemeContext`. Calls `useEffect` with an `api.js` request for initial data |
| `main.jsx` | Application entry point and `BrowserRouter` configuration |
| `api.js` | API service layer. Contains `getItems(query)` (used in `App.jsx`) and `getItemDetails(id)` (used in `SearchBar.jsx` or `ItemDetails.jsx`) |
| `context.js` | Creates and exports the context — name it `ThemeContext` |

> **CSS:** When styling a component, create a matching CSS file (e.g. `nav.css`) in the `styles/` folder and import it into the component, the same way `App.css` is imported.

---

## Workflow & Pull Request Process

Follow this exact routine when completing feature assignments:

**1. Commit and push** to your personal branch:

```bash
git add .
git commit -m "Added ItemDetails page"
git push origin bob
```

**2. Open a Pull Request** — on GitHub, go to **Pull requests → New pull request**. Set the **base** branch to `main` and the **compare** branch to `bob`.

**3. Review & Merge** — the Driver reviews for breaking changes or syntax errors, then clicks **Merge pull request** if clean.

**4. Sync the team** — after each merge into `main`, every member updates their local `main` and merges it into their branch:

```bash
git checkout main
git pull origin main
git checkout bob
git merge main
```

---

## Troubleshooting

### Merge Conflict?

Don't panic. Open VS Code, use the split editor to accept the current and/or incoming changes, save the file, then commit and push again.

### Stuck in the Terminal (VIM)?

If the terminal is asking for a commit/merge message, you're likely in VIM. To get out:

1. Press `i` (insert mode)
2. Type your commit/merge message
3. Press `Esc` (escape)
4. Type `:wq` (write & quit) — or press `Shift+Z` twice after `Esc`
5. Press `Enter`
