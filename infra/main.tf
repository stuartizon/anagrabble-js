terraform {
  required_version = "~> 0.12.0"
  backend "remote" {
    organization = "anagrabble"
    workspaces {
      prefix = "anagrabble-js-"
    }
  }
}

provider "aws" {
  version = "~> 2.0"
  region  = "ap-southeast-2"
}

data "aws_route53_zone" "anagrabble" {
  name = "anagrabble.com"
}

module "website" {
  source      = "stuartizon/static-website/aws"
  version     = "0.1.2"
  domain_name = "www.anagrabble.com"
  redirects   = ["anagrabble.com"]
  zone_id     = data.aws_route53_zone.anagrabble.zone_id
}
