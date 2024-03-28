#!/bin/sh
cd infrastructure
# initialize terraform
terraform init
# choose the workspace
terraform workspace select -or-create $DEPLOYMENT_ENV
# deploy
terraform destroy -auto-approve