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

export const rust = `use reqwest;

fn main() -> Result<(), reqwest::Error> {
    let client = reqwest::blocking::Client::new();
    
    let response = client.get("https://worlddataapi.com/api/v1/countries")
        .header("Authorization", "YOUR_API_KEY")
        .send()?;
    
    let body = response.text()?;
    println!("{}", body);
    
    Ok(())
}`;

export const kotlin = `import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

fun main() {
    val apiKey = "YOUR_API_KEY"
    val apiUrl = "https://worlddataapi.com/api/v1/countries"

    try {
        val url = URL(apiUrl)
        val connection = url.openConnection() as HttpURLConnection
        connection.requestMethod = "GET"
        connection.setRequestProperty("Authorization", apiKey)

        val responseCode = connection.responseCode
        if (responseCode == HttpURLConnection.HTTP_OK) {
            val inStream = BufferedReader(InputStreamReader(connection.inputStream))
            var inputLine: String?
            val response = StringBuilder()

            while (inStream.readLine().also { inputLine = it } != null) {
                response.append(inputLine)
            }
            inStream.close()

            println(response.toString())
        } else {
            println("Request failed with response code: $responseCode")
        }
    } catch (e: Exception) {
        e.printStackTrace()
    }
}`;

export const csharp = `using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        string apiKey = "YOUR_API_KEY";
        string apiUrl = "https://worlddataapi.com/api/v1/countries";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", apiKey);

            HttpResponseMessage response = await client.GetAsync(apiUrl);
            if (response.IsSuccessStatusCode)
            {
                string responseBody = await response.Content.ReadAsStringAsync();
                Console.WriteLine(responseBody);
            }
            else
            {
                Console.WriteLine("Request failed with response code: " + response.StatusCode);
            }
        }
    }
}`;