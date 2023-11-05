#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>
#include <SoftwareSerial.h>
#include <WiFiClient.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

SoftwareSerial espSerial(2, 3);  // RX, TX (connect ESP8266 TX to Arduino D2, and RX to D3)
DHT dht(7, DHT22);  // DHT sensor connected to pin 7

const char* ssid = "YourWiFiSSID";
const char* password = "YourWiFiPassword";
const char* serverUrl = "http://yourwebsite.com/api/soil-data";  // Replace with your website URL

void setup() {
  Serial.begin(9600);
  espSerial.begin(9600);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // Read data from other soil sensors
  float npkValue = readNPKSensor();  // Implement this function based on your NPK sensor
  float phValue = readPHSensor();    // Implement this function based on your pH sensor
  float moistureValue = readMoistureSensor();  // Implement this function based on your moisture sensor
  float waterValue = readWaterSensor();    // Implement this function based on your water sensor

  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT sensor");
    return;
  }

  String data = String("temperature=") + temperature +
                "&humidity=" + humidity +
                "&npk=" + npkValue +
                "&ph=" + phValue +
                "&moisture=" + moistureValue +
                "&water=" + waterValue;

  sendDataToServer(data);
  delay(60000);  // Send data every minute
}

float readNPKSensor() {
  // Implement code to read data from your NPK sensor
  // Return the NPK value
}

float readPHSensor() {
  // Implement code to read data from your pH sensor
  // Return the pH value
}

float readMoistureSensor() {
  // Implement code to read data from your moisture sensor
  // Return the moisture value
}

float readWaterSensor() {
  // Implement code to read data from your water sensor
  // Return the water level value
}

void sendDataToServer(String data) {
  WiFiClient client;
  HTTPClient http;

  http.begin(client, serverUrl);
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");

  int httpResponseCode = http.POST(data);

  if (httpResponseCode > 0) {
    String response = http.getString();
    Serial.println("HTTP Response Code: " + String(httpResponseCode));
    Serial.println(response);
  } else {
    Serial.println("Error on HTTP request");
  }

  http.end();
}
