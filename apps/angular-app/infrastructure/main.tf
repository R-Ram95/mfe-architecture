module "angular_app" {
  source              = "../../../common-infrastructure/static-web-module"
  bucket_name         = "mfe-xsquad-angular-app-web-bucket-${terraform.workspace}"
  env                 = terraform.workspace
  cf_dist_name        = "mfe-xsquad-angular-app-cf-distribution-${terraform.workspace}"
  default_root_object = "angular-app-${terraform.workspace}.js"
  aws_profile         = "accolite-terraform-mfe-xsquad"
  region              = "us-east-1"
  path_to_build       = "${path.module}/../dist"
  project_name        = "X-Squad-mfe"
}



