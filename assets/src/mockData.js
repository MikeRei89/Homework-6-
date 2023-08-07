const mockWeatherData = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1694898000,
            "main": {
                "temp": 66.99,
                "feels_like": 67.53,
                "temp_min": 66.99,
                "temp_max": 78.01,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 982,
                "humidity": 88,
                "temp_kf": -6.12
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.2,
                "deg": 137,
                "gust": 9.93
            },
            "visibility": 10000,
            "pop": 0.27,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-16 21:00:00"
        },
        {
            "dt": 1694908800,
            "main": {
                "temp": 68.74,
                "feels_like": 69.08,
                "temp_min": 68.74,
                "temp_max": 72.25,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 982,
                "humidity": 80,
                "temp_kf": -1.95
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 4.5,
                "deg": 133,
                "gust": 9.95
            },
            "visibility": 10000,
            "pop": 0.31,
            "rain": {
                "3h": 0.11
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-17 00:00:00"
        },
        {
            "dt": 1694919600,
            "main": {
                "temp": 67.71,
                "feels_like": 67.89,
                "temp_min": 67.71,
                "temp_max": 68.07,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 982,
                "humidity": 79,
                "temp_kf": -0.2
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 45
            },
            "wind": {
                "speed": 4.7,
                "deg": 132,
                "gust": 12.26
            },
            "visibility": 10000,
            "pop": 0.35,
            "rain": {
                "3h": 0.11
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-17 03:00:00"
        },
        {
            "dt": 1694930400,
            "main": {
                "temp": 64.71,
                "feels_like": 65.25,
                "temp_min": 64.71,
                "temp_max": 64.71,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 981,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 15
            },
            "wind": {
                "speed": 4.92,
                "deg": 129,
                "gust": 15.21
            },
            "visibility": 10000,
            "pop": 0.93,
            "rain": {
                "3h": 1.04
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-17 06:00:00"
        },
        {
            "dt": 1694941200,
            "main": {
                "temp": 63.73,
                "feels_like": 64.36,
                "temp_min": 63.73,
                "temp_max": 63.73,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 980,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 19
            },
            "wind": {
                "speed": 2.51,
                "deg": 122,
                "gust": 5.35
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.54
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-17 09:00:00"
        },
        {
            "dt": 1694952000,
            "main": {
                "temp": 64.15,
                "feels_like": 64.87,
                "temp_min": 64.15,
                "temp_max": 64.15,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 980,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 38
            },
            "wind": {
                "speed": 2.37,
                "deg": 108,
                "gust": 3.62
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.34
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-17 12:00:00"
        },
        {
            "dt": 1694962800,
            "main": {
                "temp": 74.62,
                "feels_like": 75.31,
                "temp_min": 74.62,
                "temp_max": 74.62,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 981,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 42
            },
            "wind": {
                "speed": 2.48,
                "deg": 320,
                "gust": 4.41
            },
            "visibility": 10000,
            "pop": 0.2,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-17 15:00:00"
        },
        {
            "dt": 1694973600,
            "main": {
                "temp": 84.13,
                "feels_like": 83.43,
                "temp_min": 84.13,
                "temp_max": 84.13,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 980,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 22
            },
            "wind": {
                "speed": 7.16,
                "deg": 296,
                "gust": 10.56
            },
            "visibility": 10000,
            "pop": 0.36,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-17 18:00:00"
        },
        {
            "dt": 1694984400,
            "main": {
                "temp": 78.31,
                "feels_like": 78.1,
                "temp_min": 78.31,
                "temp_max": 78.31,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 979,
                "humidity": 48,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 58
            },
            "wind": {
                "speed": 7.52,
                "deg": 310,
                "gust": 16.6
            },
            "visibility": 10000,
            "pop": 0.01,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-17 21:00:00"
        },
        {
            "dt": 1694995200,
            "main": {
                "temp": 72.57,
                "feels_like": 72.25,
                "temp_min": 72.57,
                "temp_max": 72.57,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 980,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 72
            },
            "wind": {
                "speed": 7.05,
                "deg": 336,
                "gust": 19.28
            },
            "visibility": 10000,
            "pop": 0.01,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-18 00:00:00"
        },
        {
            "dt": 1695006000,
            "main": {
                "temp": 65.35,
                "feels_like": 64.83,
                "temp_min": 65.35,
                "temp_max": 65.35,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 981,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 5.14,
                "deg": 335,
                "gust": 15.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-18 03:00:00"
        },
        {
            "dt": 1695016800,
            "main": {
                "temp": 61.43,
                "feels_like": 60.71,
                "temp_min": 61.43,
                "temp_max": 61.43,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 981,
                "humidity": 73,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 4.29,
                "deg": 318,
                "gust": 9.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-18 06:00:00"
        },
        {
            "dt": 1695027600,
            "main": {
                "temp": 58.8,
                "feels_like": 58.01,
                "temp_min": 58.8,
                "temp_max": 58.8,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 981,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.88,
                "deg": 317,
                "gust": 10.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-18 09:00:00"
        },
        {
            "dt": 1695038400,
            "main": {
                "temp": 57.79,
                "feels_like": 57.07,
                "temp_min": 57.79,
                "temp_max": 57.79,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 982,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.56,
                "deg": 310,
                "gust": 10.76
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-18 12:00:00"
        },
        {
            "dt": 1695049200,
            "main": {
                "temp": 72.21,
                "feels_like": 71.35,
                "temp_min": 72.21,
                "temp_max": 72.21,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 984,
                "humidity": 47,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.99,
                "deg": 329,
                "gust": 13.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-18 15:00:00"
        },
        {
            "dt": 1695060000,
            "main": {
                "temp": 79.83,
                "feels_like": 79.83,
                "temp_min": 79.83,
                "temp_max": 79.83,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 983,
                "humidity": 32,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 10.38,
                "deg": 330,
                "gust": 15.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-18 18:00:00"
        },
        {
            "dt": 1695070800,
            "main": {
                "temp": 81.12,
                "feels_like": 79.83,
                "temp_min": 81.12,
                "temp_max": 81.12,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 982,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 10.13,
                "deg": 328,
                "gust": 13.69
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-18 21:00:00"
        },
        {
            "dt": 1695081600,
            "main": {
                "temp": 69.48,
                "feels_like": 68.47,
                "temp_min": 69.48,
                "temp_max": 69.48,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 983,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 5.14,
                "deg": 325,
                "gust": 13.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-19 00:00:00"
        },
        {
            "dt": 1695092400,
            "main": {
                "temp": 63.93,
                "feels_like": 63.03,
                "temp_min": 63.93,
                "temp_max": 63.93,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 984,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4,
                "deg": 341,
                "gust": 8.7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-19 03:00:00"
        },
        {
            "dt": 1695103200,
            "main": {
                "temp": 61.41,
                "feels_like": 60.55,
                "temp_min": 61.41,
                "temp_max": 61.41,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 984,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 2.62,
                "deg": 347,
                "gust": 3.36
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-19 06:00:00"
        },
        {
            "dt": 1695114000,
            "main": {
                "temp": 59.36,
                "feels_like": 58.57,
                "temp_min": 59.36,
                "temp_max": 59.36,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 984,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 2.42,
                "deg": 51,
                "gust": 3.24
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-19 09:00:00"
        },
        {
            "dt": 1695124800,
            "main": {
                "temp": 59.76,
                "feels_like": 59,
                "temp_min": 59.76,
                "temp_max": 59.76,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 985,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 2.44,
                "deg": 57,
                "gust": 2.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-19 12:00:00"
        },
        {
            "dt": 1695135600,
            "main": {
                "temp": 75.54,
                "feels_like": 74.86,
                "temp_min": 75.54,
                "temp_max": 75.54,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 987,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.53,
                "deg": 108,
                "gust": 3.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-19 15:00:00"
        },
        {
            "dt": 1695146400,
            "main": {
                "temp": 84.11,
                "feels_like": 82.09,
                "temp_min": 84.11,
                "temp_max": 84.11,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 986,
                "humidity": 30,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.57,
                "deg": 87,
                "gust": 1.68
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-19 18:00:00"
        },
        {
            "dt": 1695157200,
            "main": {
                "temp": 83.97,
                "feels_like": 81.7,
                "temp_min": 83.97,
                "temp_max": 83.97,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 984,
                "humidity": 27,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 1.48,
                "deg": 72,
                "gust": 2.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-19 21:00:00"
        },
        {
            "dt": 1695168000,
            "main": {
                "temp": 72.28,
                "feels_like": 71.24,
                "temp_min": 72.28,
                "temp_max": 72.28,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 985,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 2.21,
                "deg": 14,
                "gust": 3.56
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-20 00:00:00"
        },
        {
            "dt": 1695178800,
            "main": {
                "temp": 67.78,
                "feels_like": 66.7,
                "temp_min": 67.78,
                "temp_max": 67.78,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 986,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 2.62,
                "deg": 74,
                "gust": 3.91
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-20 03:00:00"
        },
        {
            "dt": 1695189600,
            "main": {
                "temp": 66.4,
                "feels_like": 65.41,
                "temp_min": 66.4,
                "temp_max": 66.4,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 985,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 45
            },
            "wind": {
                "speed": 3.91,
                "deg": 122,
                "gust": 10.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-20 06:00:00"
        },
        {
            "dt": 1695200400,
            "main": {
                "temp": 63.5,
                "feels_like": 62.65,
                "temp_min": 63.5,
                "temp_max": 63.5,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 986,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 3.62,
                "deg": 102,
                "gust": 5.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-20 09:00:00"
        },
        {
            "dt": 1695211200,
            "main": {
                "temp": 63.01,
                "feels_like": 62.35,
                "temp_min": 63.01,
                "temp_max": 63.01,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 987,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 3.89,
                "deg": 113,
                "gust": 8.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-20 12:00:00"
        },
        {
            "dt": 1695222000,
            "main": {
                "temp": 77.05,
                "feels_like": 76.57,
                "temp_min": 77.05,
                "temp_max": 77.05,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 988,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 23
            },
            "wind": {
                "speed": 5.35,
                "deg": 127,
                "gust": 7.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-20 15:00:00"
        },
        {
            "dt": 1695232800,
            "main": {
                "temp": 84.31,
                "feels_like": 82.36,
                "temp_min": 84.31,
                "temp_max": 84.31,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 987,
                "humidity": 31,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 5.17,
                "deg": 130,
                "gust": 5.84
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-20 18:00:00"
        },
        {
            "dt": 1695243600,
            "main": {
                "temp": 85.14,
                "feels_like": 82.85,
                "temp_min": 85.14,
                "temp_max": 85.14,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 985,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 4.97,
                "deg": 123,
                "gust": 6.33
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-20 21:00:00"
        },
        {
            "dt": 1695254400,
            "main": {
                "temp": 74.32,
                "feels_like": 73.56,
                "temp_min": 74.32,
                "temp_max": 74.32,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 986,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 15
            },
            "wind": {
                "speed": 2.77,
                "deg": 133,
                "gust": 4.76
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-21 00:00:00"
        },
        {
            "dt": 1695265200,
            "main": {
                "temp": 70.45,
                "feels_like": 69.64,
                "temp_min": 70.45,
                "temp_max": 70.45,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 987,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 3.09,
                "deg": 91,
                "gust": 6.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-21 03:00:00"
        },
        {
            "dt": 1695276000,
            "main": {
                "temp": 67.41,
                "feels_like": 66.67,
                "temp_min": 67.41,
                "temp_max": 67.41,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 987,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 3.8,
                "deg": 101,
                "gust": 7.23
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-21 06:00:00"
        },
        {
            "dt": 1695286800,
            "main": {
                "temp": 65.48,
                "feels_like": 64.83,
                "temp_min": 65.48,
                "temp_max": 65.48,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 988,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 9
            },
            "wind": {
                "speed": 4.83,
                "deg": 91,
                "gust": 11.79
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-21 09:00:00"
        },
        {
            "dt": 1695297600,
            "main": {
                "temp": 64.58,
                "feels_like": 64.08,
                "temp_min": 64.58,
                "temp_max": 64.58,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 990,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 4.85,
                "deg": 90,
                "gust": 11.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-21 12:00:00"
        },
        {
            "dt": 1695308400,
            "main": {
                "temp": 79,
                "feels_like": 79,
                "temp_min": 79,
                "temp_max": 79,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 991,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 5.7,
                "deg": 109,
                "gust": 8.46
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-21 15:00:00"
        },
        {
            "dt": 1695319200,
            "main": {
                "temp": 85.37,
                "feels_like": 83.07,
                "temp_min": 85.37,
                "temp_max": 85.37,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 989,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 5.7,
                "deg": 84,
                "gust": 7.29
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-21 18:00:00"
        }
    ],
    "city": {
        "id": 4179074,
        "name": "Acworth",
        "coord": {
            "lat": 34.0659,
            "lon": -84.6769
        },
        "country": "US",
        "population": 20425,
        "timezone": -14400,
        "sunrise": 1694863350,
        "sunset": 1694907900
    }
}

const mockGeoLocationData = [
    {
        "name": "Kennesaw",
        "lat": 34.0234337,
        "lon": -84.6154897,
        "country": "US",
        "state": "Georgia"
    }
]