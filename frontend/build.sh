#!/usr/bin/env bash
BUCKET_PATH="s3://nd-space/_next/static/"
echo -e "\033[0;34m🔄 Pulling latest changes from the repository...\033[0m"
git pull
echo -e "\033[0;34m📦 Installing dependencies...\033[0m"
npm install
echo -e "\033[0;34m🔨 Building the project...\033[0m"
npm run build || exit 1
echo -e "\033[0;32m✅ Build succeeded. Proceeding to upload static files...\033[0m"
s3cmd del --recursive "$BUCKET_PATH"
cd .next
s3cmd put --acl-public --recursive --guess-mime-type --no-mime-magic --exclude "*.css" --exclude "*.js" static/ "$BUCKET_PATH"
s3cmd put --acl-public --recursive -m "text/css" --exclude "*" --include "*.css" static/ "$BUCKET_PATH"
s3cmd put --acl-public --recursive -m "application/javascript" --exclude "*" --include "*.js" static/ "$BUCKET_PATH"
pm2 restart 0
echo "DONE"