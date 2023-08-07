export const javascript = `const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://worlddataapi.com/api/v1/countries'
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
  };
  
axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`;

export const python = `import requests

url = 'https://worlddataapi.com/api/v1/countries'
headers = {
    'Authorization': 'YOUR_API_KEY',
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f"Request failed with status code: {response.status_code}")
    print(response.text)
`;

export const go = `package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	url := "https://worlddataapi.com/api/v1/countries"
	apiKey := "YOUR_API_KEY"

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}

	req.Header.Add("Authorization", apiKey)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending request:", err)
		return
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	if resp.StatusCode == http.StatusOK {
		fmt.Println(string(body))
	} else {
		fmt.Printf("Request failed with status code: %d\n", resp.StatusCode)
		fmt.Println(string(body))
	}
}
`;

