#!/usr/bin/env bash
COMMIT="$1"

set GIT_COMMITTER_DATE=`date --date="1 year 10 months ago"`
set GIT_AUTHOR_DATE=`date --date="1 year 10 months ago"`

git commit -m "$COMMIT"


#  GIT_COMMITTER_DATE="$(date --date="22 months ago")" git commit -m "bug fix" --date "$(date --date="22 months ago")"
