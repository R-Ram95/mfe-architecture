terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.67.0"
    }
  }

  backend "s3" {
    bucket         = "shared-ui-xsquad-mfe-tf-state-bucket"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "shared-ui-xsquad-mfe-tf-locking-table"
    encrypt        = true
    profile        = "accolite-terraform-mfe-xsquad"
  }
}

# ONLY UNCOMMENT WHEN BOOTSTRAPPING TERRAFORM
# module "shared_ui_be" {
#   source        = "../../../common-infrastructure/aws_backend_module"
#   bucket_name   = "shared-ui-xsquad-mfe-tf-state-bucket"
#   dynamodb_name = "shared-ui-xsquad-mfe-tf-locking-table"
#   aws_profile   = "accolite-terraform-mfe-xsquad"
#   project_name  = "X-Squad-MFE"
# }
