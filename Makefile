include .env

release:
	GH_TOKEN=${GH_TOKEN} yarn release