terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.67.0"
    }
  }
}

provider "aws" {
  region  = var.region
  profile = var.aws_profile
}

resource "aws_s3_bucket" "tf_state_bucket" {
  bucket        = var.bucket_name
  force_destroy = false
  tags          = local.tags
}

resource "aws_s3_bucket_versioning" "terraform_state_bucket_versioning" {
  bucket = aws_s3_bucket.tf_state_bucket.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_dynamodb_table" "tf_locks" {
  name         = var.dynamodb_name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "LockID"
  tags         = local.tags
  attribute {
    name = "LockID"
    type = "S"
  }
}
