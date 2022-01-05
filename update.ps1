$datetime = Get-Date -format 'o'
$filename = $datetime -replace ':','_'
$filename = $filename + '.md'

'---' | Out-File -FilePath .\content\updates\${filename}
'date: ' + $datetime | Out-File -FilePath .\content\updates\${filename} -Append
'description: ' + $Args[0] | Out-File -FilePath .\content\updates\${filename} -Append
'---' | Out-File -FilePath .\content\updates\${filename} -Append
$Args[0] | Out-File -FilePath .\content\updates\${filename} -Append