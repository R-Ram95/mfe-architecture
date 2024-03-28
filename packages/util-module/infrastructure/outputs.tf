output "util_module_bucket_id" {
  description = "Bucket ID for s3 holding out website files"
  value       = module.util_module.bucket_id
}

output "util_module_cloudfront_domain_name" {
  description = "Cloudfront domain name"
  value       = module.util_module.cloudfront_domain_name
}

output "util_module_cloudfront_dist_id" {
  description = "Cloudfront distribution id"
  value       = module.util_module.cloudfront_dist_id
}
