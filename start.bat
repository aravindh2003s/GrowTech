@echo off
echo =========================================
echo    GrowTech Development Environment
echo =========================================
echo.

echo Starting GrowTech Backend (Port 5000)...
cd /d "%~dp0backend"
start "GrowTech Backend" cmd /k "node server.js"

echo Starting GrowTech Frontend (Port 5173)...
cd /d "%~dp0frontend"
start "GrowTech Frontend" cmd /k "npm run dev"

echo.
echo Servers are booting up in separate windows!
echo You can safely close this launcher window.
