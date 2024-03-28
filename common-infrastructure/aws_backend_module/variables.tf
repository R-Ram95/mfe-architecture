variable "region" {
  description = "AWS Region"
  type        = string
  default     = "us-east-1"
}

variable "bucket_name" {
  description = "Terraform State Bucket Name"
  type        = string
}

variable "dynamodb_name" {
  description = "Terraform Locking DB Name"
  type        = string
}

variable "aws_profile" {
  description = "AWS Account to use"
  type        = string
  default     = "default"
}

variable "project_name" {
  description = "The project name that will be applied to tags"
  type        = string
}


