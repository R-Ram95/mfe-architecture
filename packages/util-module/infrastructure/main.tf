module "util_module" {
  source              = "../../../common-infrastructure/static-web-module"
  bucket_name         = "util-module-web-bucket-mfe-xsquad-${terraform.workspace}"
  env                 = terraform.workspace
  cf_dist_name        = "util-module-cf-distribution-mfe-xsquad-${terraform.workspace}"
  default_root_object = "index.js"
  aws_profile         = "accolite-terraform-mfe-xsquad"
  region              = "us-east-1"
  path_to_build       = "${path.module}/../dist"
  project_name        = "X-Squad-mfe"
}



