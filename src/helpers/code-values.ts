export const javascript = `const axios = require("axios");

const options = {
    method: 'POST',
    url: 'https://similarityapi.com/api/v1/similarity',
    data: {
      text1: 'First text',
      text2: 'Second text'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
`;

export const python = `import requests

url = 'https://similarityapi.com/api/v1/similarity'
api_key = 'YOUR_API_KEY'
text1 = 'First text'
text2 = 'Second text'

headers = {
  'Authorization': api_key
}

payload = {
  'text1': text1,
  'text2': text2
}

response = requests.post(url, headers = headers, json = payload)

if response.status_code == 200:
  data = response.json()
print(data)
else:
print(f'Request failed with status code {response.status_code}')
`;

export const go = `package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type APIResponse struct {
	// Define your response structure based on the API response
	Data interface{} \`json: "data"\`
}

func main() {
	apiURL := "https://similarityapi.com/api/v1/similarity"
	apiKey := "YOUR_API_KEY" // Replace with your actual API key

	// Prepare the request payload
	payload := map[string]string{
		"text1": "First text",
		"text2": "Second text",
	}

	payloadJSON, err := json.Marshal(payload)
	if err != nil {
		fmt.Println("Error marshaling JSON:", err)
		return
	}

	// Create the HTTP request
	req, err := http.NewRequest("POST", apiURL, bytes.NewBuffer(payloadJSON))
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}

	// Set the request headers
	req.Header.Set("Authorization", apiKey)
	req.Header.Set("Content-Type", "application/json")

	// Send the HTTP request and get the response
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending request:", err)
		return
	}
	defer resp.Body.Close()

	// Parse the JSON response
	var apiResponse APIResponse
	err = json.NewDecoder(resp.Body).Decode(&apiResponse)
	if err != nil {
		fmt.Println("Error parsing JSON response:", err)
		return
	}

	// Access the response data
	fmt.Println("Response data:", apiResponse.Data)
}
`;

