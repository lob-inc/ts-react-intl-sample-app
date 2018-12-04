#!/bin/sh

# technical copypasta from https://github.com/angular/material2/wiki/Pre-commit-hook-for-linters

pass=true
RED='\033[1;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "Running Linters:"

# Run tslint and get the output and return code
intlCheck=$(yarn intl:check)
ret_code=$?

# If it didn't pass, announce it failed and print the output
if [ $ret_code != 0 ]; then
	printf "\n${RED}intl:check failed:${NC}"
	echo "$intlCheck\n"
	pass=false
else
	printf "${GREEN}intl:check passed.${NC}\n"
fi

# If there were no failures, it is good to commit
if $pass; then
	exit 0
fi

exit 1
