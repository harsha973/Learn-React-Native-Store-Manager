#!/bin/bash
emulator -avd Nexus_S_API_23  &
adb wait-for-device

cd /C/Sree/React-native/manager %~dp0
react-native run-android
