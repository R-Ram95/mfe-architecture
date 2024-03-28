output "react_app_bucket_id" {
  description = "Bucket ID for s3 holding out website files"
  value       = module.react_app.bucket_id
}

output "react_app_cloudfront_domain_name" {
  description = "Cloudfront domain name"
  value       = module.react_app.cloudfront_domain_name
}

output "react_app_cloudfront_dist_id" {
  description = "Cloudfront distribution id"
  value       = module.react_app.cloudfront_dist_id
}
