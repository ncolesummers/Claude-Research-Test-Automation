# Setting Up GitHub Pages with mdBook

This document explains how the GitHub Actions workflow for building and deploying your mdBook to GitHub Pages works, and what steps you need to take to enable it.

## How the Workflow Works

The workflow defined in `.github/workflows/mdbook-deploy.yml` performs the following steps:

1. **Trigger**: The workflow runs whenever you push to the `main` branch or when a pull request is created.

2. **Build Job**:
   - Checks out your repository
   - Sets up mdBook
   - Builds your book
   - Uploads the built book as an artifact

3. **Deploy Job**:
   - Only runs for the `main` branch (not for pull requests)
   - Deploys the built book to GitHub Pages

## How to Enable GitHub Pages

To enable GitHub Pages with this workflow, follow these steps:

1. **Push the workflow file to your repository**:
   The workflow file should be located at `.github/workflows/mdbook-deploy.yml`.

2. **Enable GitHub Pages in your repository settings**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Navigate to "Pages" in the sidebar
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The first time you run the workflow, GitHub will automatically configure Pages

3. **Configure Repository Permissions**:
   - In your repository settings, go to "Actions" > "General"
   - Under "Workflow permissions", ensure "Read and write permissions" is selected
   - Save your changes

4. **Run the workflow**:
   - The workflow will run automatically on your next push to the `main` branch
   - You can also manually trigger it from the "Actions" tab in your repository

5. **Access your published book**:
   - Once deployed, your book will be available at: `https://<username>.github.io/<repository>/`
   - The exact URL will be shown in the deployment step output

## Troubleshooting

If you encounter issues with the deployment:

1. **Check the workflow run logs** in the "Actions" tab of your repository
2. **Verify that GitHub Pages is enabled** in your repository settings
3. **Ensure the repository has the correct permissions** for GitHub Actions
4. **Check that your mdBook builds locally** with `mdbook build`

## Additional Customization

You can customize the workflow by editing the `.github/workflows/mdbook-deploy.yml` file:

- Change the branch that triggers deployment by modifying the `branches` list
- Update the mdBook version if needed
- Add additional build steps or configurations

Remember to commit and push any changes to your repository for them to take effect.