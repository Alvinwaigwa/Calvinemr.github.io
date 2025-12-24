# Calvin EMR — Project Website (GitHub Pages)

This repository contains a simple project website for the Calvin EMR student project. It's designed to be hosted on GitHub Pages and contains the required sections for the course: Vision, Team, Code, Report, Presentation, and Research materials.

How to publish on GitHub Pages

1. Create a GitHub repository (or use your existing project repo).
2. Copy the `docs/` folder from this workspace into the repository root.
3. Commit and push to GitHub.
4. In the repository settings on GitHub, enable Pages and set the source to `main` branch and folder `docs/` (or `master/docs` depending on your default branch).

Example commands (run from the repository root):

```bash
# initialize a repo (if needed)
git init
git add .
git commit -m "Add project website in docs/"
# create remote and push (replace URL)
git remote add origin https://github.com/your-org/your-repo.git
git branch -M main
git push -u origin main
```

Updating the site

- To change the report, edit `docs/report.html`.
- To update the vision text, edit `docs/vision.html`.
- Replace the placeholder repository URL in `docs/code.html` with the actual GitHub repo URL.
- Add slides or PDFs to `docs/assets/` and link them from `docs/presentation.html` or `docs/research.html`.

Provide repository URL and any images/PDFs you want included and I will add them to the site.
