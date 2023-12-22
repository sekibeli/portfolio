git add .
git commit -m "$*"
git push
ng build
# git ftp push
git ftp push --syncroot dist/portfolio --remote-root angular-projects/portfolio
