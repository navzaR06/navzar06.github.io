# My GitHub Pages Website

This repository hosts my personal website at https://navzar06.github.io/

## Deployment Instructions

To deploy this website to GitHub Pages:

1. **Create a GitHub repository**
   - Go to https://github.com/new
   - Name it exactly: `navzar06.github.io`
   - Make it public
   - Don't initialize with README (we already have files)

2. **Push your files to GitHub**
   ```bash
   cd web-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/navzar06/navzar06.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

4. **Access your website**
   - Your site will be live at: https://navzar06.github.io/
   - It may take a few minutes for the first deployment

## Customization

- Edit `index.html` to modify content
- Update `style.css` to change styling
- Modify `script.js` for interactive features
- Add more pages by creating additional HTML files

## Local Development

To preview locally, you can:
- Open `index.html` directly in a browser
- Or use a local server:
  ```bash
  python -m http.server 8000
  ```
  Then visit http://localhost:8000

## License

Feel free to customize this template for your own use!
