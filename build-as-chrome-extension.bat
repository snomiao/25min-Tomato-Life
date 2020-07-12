@echo off && chcp 65001

REM PACKAGE
powershell Compress-Archive -Path ./src -DestinationPath ./dist/SNOREAD_CHROME_EXTENSION.zip -Force


REM run this as admin in powershell if you see cannot be loaded because running scripts is disabled on this system.
REM Set-ExecutionPolicy RemoteSigned
