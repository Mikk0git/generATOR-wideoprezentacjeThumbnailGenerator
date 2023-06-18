@echo off

for %%F in (*.png) do (
  echo Konwertowanie pliku: %%F
  ffmpeg -i "%%F" "%%~nF.webp"
  del "%%F"
)

echo Zakończono konwersję plików PNG na WEBP.
pause