output "vue_app_bucket_id" {
  description = "Bucket ID for s3 holding out website files"
  value       = module.vue_app.bucket_id
}

output "vue_app_cloudfront_domain_name" {
  description = "Cloudfront domain name"
  value       = module.vue_app.cloudfront_domain_name
}

output "vue_app_cloudfront_dist_id" {
  description = "Cloudfront distribution id"
  value       = module.vue_app.cloudfront_dist_id
}
