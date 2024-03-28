module "shared_ui" {
  source              = "../../../common-infrastructure/static-web-module"
  bucket_name         = "shared-ui-web-bucket-mfe-xsquad-${terraform.workspace}"
  env                 = terraform.workspace
  cf_dist_name        = "shared-ui-cf-distribution-mfe-xsquad-${terraform.workspace}"
  default_root_object = "shared-ui.js"
  aws_profile         = "accolite-terraform-mfe-xsquad"
  region              = "us-east-1"
  path_to_build       = "${path.module}/../dist"
  project_name        = "X-Squad-mfe"
}



