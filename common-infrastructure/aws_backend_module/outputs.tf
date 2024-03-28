output "bucket_name" {
  description = "S3 Bucket name for tf state file"
  value       = aws_s3_bucket.tf_state_bucket.id
}

output "dynamodb_name" {
  description = "DynamoDB name for tf lockig"
  value       = aws_dynamodb_table.tf_locks.id
}
