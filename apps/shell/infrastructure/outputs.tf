output "shell_bucket_id" {
  description = "Bucket ID for s3 holding out website files"
  value       = module.shell_app.bucket_id
}

output "shell_cloudfront_domain_name" {
  description = "Cloudfront domain name"
  value       = module.shell_app.cloudfront_domain_name
}

output "shell_cloudfront_dist_id" {
  description = "Cloudfront distribution id"
  value       = module.shell_app.cloudfront_dist_id
}
