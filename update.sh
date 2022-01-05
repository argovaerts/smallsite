#! /bin/bash
datetime=$(date +%Y-%m-%dT%H:%M:%S%z)
filename="${datetime//:/_}.md"

echo '---' > content/updates/${filename}
echo 'date:' $datetime >> content/updates/${filename}
echo 'description:' $1 >> content/updates/${filename}
echo '---' >> content/updates/${filename}
echo  $1 >> content/updates/${filename}