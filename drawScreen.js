function drawScreen() {
  textSize(18);
  if (isConnected) {
  background(135, 206, 235);
    text('Connected :)', 80, 15);
  } else {
  background(135, 206, 235);
    textAlign(LEFT, TOP);
    text('Disconnected :/', 80, 15);
  }

  text(receivedValue, 15, 40);
  
  if(oldColorPickerValue != ledColorPicker.value() && millis()-millisecondTimerStart>50 && isConnected){
    oldColorPickerValue = ledColorPicker.value();
    sendData("00a2e81288df2f5fd31880de00a2e800a2e800a2e800a2e800a2e83950cf3f48cc3e4acd1880de00a2e800a2e800a2e800a2e83d4bcd3f48cc3f48cc3d4bcd00a2e800a2e800a2e800a2e81e78db3f48cc3f48cc3f48cc1880de00a2e800a2e800a2e800a2e83d4bcd3f48cc3f48cc3d4bcd1880de00a2e800a2e800a2e81e78db3f48cc3f48cc3f48cc3d4bcd00a2e800a2e800a2e800a2e81e78db3f48cc3f48cc256dd800a2e800a2e800a2e800a2e800a2e800a2e800a2e800a2e815a3e0");
    millisecondTimerStart = millis();
  }
  
}
