variable "bucket_name" {
  description = "Name of S3 bucket for webiste"
  type        = string
}

variable "cf_dist_name" {
  description = "Name of Cloudfront distribution for webiste"
  type        = string
}

variable "env" {
  description = "The environment the resources are deployed to"
  type        = string
}

variable "region" {
  description = "AWS Region"
  type        = string
  default     = "us-east-1"
}

variable "aws_profile" {
  description = "AWS Account to use"
  type        = string
  default     = "default"
}

variable "cf_price_class" {
  description = "CloudFront distribution price class"
  default     = "PriceClass_100"
  type        = string
}

variable "default_root_object" {
  description = "Default root object file name for Cloudfront Distribution - include extension"
  type        = string
  default     = "index.html"
}

variable "path_to_build" {
  description = "Path to the build folder"
  type        = string
}

variable "project_name" {
  description = "The project name that will be applied to tags"
  type        = string
}

variable "content_types" {
  type = map(string)
  default = {
    ".html" = "text/html",
    ".css"  = "text/css",
    ".js"   = "application/javascript",
    ".jpg"  = "image/jpeg",
    ".png"  = "image/png",
    ".gif"  = "image/gif",
    ".svg"  = "image/svg+xml",
    ".pdf"  = "application/pdf",
  }
}

