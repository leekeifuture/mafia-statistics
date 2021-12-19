npm run build
aws s3 rm s3://statistics.mafia-brest.by --recursive
aws s3 sync build/. s3://statistics.mafia-brest.by
aws cloudfront create-invalidation --distribution-id $ORIGINAL_DISTRIBUTION_ID --paths "/*"
aws cloudfront create-invalidation --distribution-id $WWW_DISTRIBUTION_ID --paths "/*"
