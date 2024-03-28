output "shared_ui_bucket_id" {
  description = "Bucket ID for s3 holding out website files"
  value       = module.shared_ui.bucket_id
}

output "shared_ui_cloudfront_domain_name" {
  description = "Cloudfront domain name"
  value       = module.shared_ui.cloudfront_domain_name
}

output "shared_ui_cloudfront_dist_id" {
  description = "Cloudfront distribution id"
  value       = module.shared_ui.cloudfront_dist_id
}
