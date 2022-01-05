---
title: opnieuw indie
date: 2022-01-05T17:18:18.000Z
draft: false
---
na mijn eerdere experimentjes ben ik eigenlijk terug vrij in het begin beland: [hugo](https://gohugo.io) met beperkt [Indieweb](https://indieweb.org) features.

wat werkt momenteel:
- posts schrijven (eigenlijk gewoon hugo)
- updates/notes (met een scriptje)
- search

notes worden gepost met een klein scriptje in bash...

```
#! /bin/bash
datetime=$(date +%Y-%m-%dT%H:%M:%S%z)
filename="${datetime//:/_}.md"

echo '---' > content/updates/${filename}
echo 'date:' $datetime >> content/updates/${filename}
echo 'description:' $1 >> content/updates/${filename}
echo '---' >> content/updates/${filename}
echo  $1 >> content/updates/${filename}
```
... en in powershell ...
```
$datetime = Get-Date -format 'o'
$filename = $datetime -replace ':','_'
$filename = $filename + '.md'

'---' | Out-File -FilePath .\content\updates\${filename}
'date: ' + $datetime | Out-File -FilePath .\content\updates\${filename} -Append
'description: ' + $Args[0] | Out-File -FilePath .\content\updates\${filename} -Append
'---' | Out-File -FilePath .\content\updates\${filename} -Append
$Args[0] | Out-File -FilePath .\content\updates\${filename} -Append
```

Side note: dit kan waarschijnlijk eleganter *but who cares*


wat wil ik er nog zeker in:
- webmentions
  - [zenden](https://webmention.app/)
  - [tonen](https://github.com/PlaidWeb/webmention.js)
- POSSE naar twitter en linkedin
- [voorlezen](https://jlelse.blog/posts/use-js)
- vertalen: [Google Translate](https://jlelse.blog/posts/use-js) of [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate#mirrors)
- berichten (en niet opgeven na alles opgezet te hebben, zoals elke voorgaande keer 😶)

