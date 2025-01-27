#!/usr/bin/env bash
BUCKET_PATH="s3://nd-space/_next/static/"
npm run build
s3cmd del --recursive "$BUCKET_PATH"
cd .next
s3cmd put --acl-public --recursive --guess-mime-type --no-mime-magic --exclude "*.css" --exclude "*.js" static/ "$BUCKET_PATH"
s3cmd put --acl-public --recursive -m "text/css" --exclude "*" --include "*.css" static/ "$BUCKET_PATH"
s3cmd put --acl-public --recursive -m "application/javascript" --exclude "*" --include "*.js" static/ "$BUCKET_PATH"
pm2 restart 1
echo "DONE"