@echo off

pushd %~dp0
set mypath=%cd%
popd

echo %mypath%

cd C:\Windows\System32\inetsrv

appcmd add apppool /name:CityWeather /managedRuntimeVersion:v4.0 /managedPipelineMode:Integrated

appcmd set AppPool CityWeather -processModel.identityType:LocalSystem

appcmd add site /name:CityWeather /id:100 /physicalPath:%mypath%\api\Publish /bindings:http/*:49985:

appcmd set site /site.name:CityWeather /[path='/'].applicationPool:CityWeather

cd %mypath%

serve -s build

pause