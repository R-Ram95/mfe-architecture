output "angular_app_bucket_id" {
  description = "Bucket ID for s3 holding out website files"
  value       = module.angular_app.bucket_id
}

output "angular_app_dev_cloudfront_domain_name" {
  description = "Cloudfront domain name"
  value       = module.angular_app.cloudfront_domain_name
}

output "angular_app_dev_cloudfront_dist_id" {
  description = "Cloudfront distribution id"
  value       = module.angular_app.cloudfront_dist_id
}
