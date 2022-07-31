import { rest } from "msw";

export const mockShanghaiWeatherForecast = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1659042000,
      main: {
        temp: 28.25,
        feels_like: 33.98,
        temp_min: 26.9,
        temp_max: 28.25,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1005,
        humidity: 87,
        temp_kf: 1.35,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.73,
        deg: 124,
        gust: 8.84,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-28 21:00:00",
    },
    {
      dt: 1659052800,
      main: {
        temp: 28.8,
        feels_like: 34.19,
        temp_min: 28.8,
        temp_max: 29.9,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1005,
        humidity: 80,
        temp_kf: -1.1,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.62,
        deg: 127,
        gust: 7.09,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-29 00:00:00",
    },
    {
      dt: 1659063600,
      main: {
        temp: 31.64,
        feels_like: 36.82,
        temp_min: 31.64,
        temp_max: 33.34,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1005,
        humidity: 62,
        temp_kf: -1.7,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 4.93,
        deg: 120,
        gust: 6.48,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-29 03:00:00",
    },
    {
      dt: 1659074400,
      main: {
        temp: 33.84,
        feels_like: 37.4,
        temp_min: 33.84,
        temp_max: 33.84,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 5.36,
        deg: 113,
        gust: 6.2,
      },
      visibility: 10000,
      pop: 0.28,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-29 06:00:00",
    },
    {
      dt: 1659085200,
      main: {
        temp: 31.45,
        feels_like: 36.1,
        temp_min: 31.45,
        temp_max: 31.45,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1003,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 4.89,
        deg: 93,
        gust: 5.63,
      },
      visibility: 10000,
      pop: 0.29,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-29 09:00:00",
    },
    {
      dt: 1659096000,
      main: {
        temp: 28.45,
        feels_like: 33.44,
        temp_min: 28.45,
        temp_max: 28.45,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 3.75,
        deg: 88,
        gust: 7.24,
      },
      visibility: 10000,
      pop: 0.35,
      rain: {
        "3h": 0.24,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-29 12:00:00",
    },
    {
      dt: 1659106800,
      main: {
        temp: 27.95,
        feels_like: 32.44,
        temp_min: 27.95,
        temp_max: 27.95,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1004,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 2.81,
        deg: 100,
        gust: 6.89,
      },
      visibility: 10000,
      pop: 0.32,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-29 15:00:00",
    },
    {
      dt: 1659117600,
      main: {
        temp: 27.27,
        feels_like: 30.92,
        temp_min: 27.27,
        temp_max: 27.27,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 1.87,
        deg: 94,
        gust: 5.44,
      },
      visibility: 10000,
      pop: 0.45,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-29 18:00:00",
    },
    {
      dt: 1659128400,
      main: {
        temp: 26.86,
        feels_like: 30.15,
        temp_min: 26.86,
        temp_max: 26.86,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1002,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 1.65,
        deg: 71,
        gust: 4.3,
      },
      visibility: 10000,
      pop: 0.24,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-29 21:00:00",
    },
    {
      dt: 1659139200,
      main: {
        temp: 30.2,
        feels_like: 35.03,
        temp_min: 30.2,
        temp_max: 30.2,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1003,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 8,
      },
      wind: {
        speed: 2.64,
        deg: 60,
        gust: 3.33,
      },
      visibility: 10000,
      pop: 0.32,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-30 00:00:00",
    },
    {
      dt: 1659150000,
      main: {
        temp: 32.9,
        feels_like: 37.91,
        temp_min: 32.9,
        temp_max: 32.9,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1002,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 47,
      },
      wind: {
        speed: 4.33,
        deg: 68,
        gust: 4.39,
      },
      visibility: 10000,
      pop: 0.6,
      rain: {
        "3h": 0.23,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-30 03:00:00",
    },
    {
      dt: 1659160800,
      main: {
        temp: 33.14,
        feels_like: 37.49,
        temp_min: 33.14,
        temp_max: 33.14,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1001,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 55,
      },
      wind: {
        speed: 4.94,
        deg: 46,
        gust: 6.14,
      },
      visibility: 10000,
      pop: 0.58,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-30 06:00:00",
    },
    {
      dt: 1659171600,
      main: {
        temp: 30.35,
        feels_like: 34.89,
        temp_min: 30.35,
        temp_max: 30.35,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1000,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 5.53,
        deg: 38,
        gust: 7.49,
      },
      visibility: 10000,
      pop: 0.33,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-30 09:00:00",
    },
    {
      dt: 1659182400,
      main: {
        temp: 28.09,
        feels_like: 32.33,
        temp_min: 28.09,
        temp_max: 28.09,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1000,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 3.5,
        deg: 43,
        gust: 7.22,
      },
      visibility: 10000,
      pop: 0.4,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-30 12:00:00",
    },
    {
      dt: 1659193200,
      main: {
        temp: 26.94,
        feels_like: 30.56,
        temp_min: 26.94,
        temp_max: 26.94,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 1000,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.21,
        deg: 15,
        gust: 7.68,
      },
      visibility: 10000,
      pop: 0.73,
      rain: {
        "3h": 0.91,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-30 15:00:00",
    },
    {
      dt: 1659204000,
      main: {
        temp: 26.44,
        feels_like: 26.44,
        temp_min: 26.44,
        temp_max: 26.44,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 998,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.16,
        deg: 4,
        gust: 5.48,
      },
      visibility: 10000,
      pop: 0.85,
      rain: {
        "3h": 1.88,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-30 18:00:00",
    },
    {
      dt: 1659214800,
      main: {
        temp: 26.11,
        feels_like: 26.11,
        temp_min: 26.11,
        temp_max: 26.11,
        pressure: 999,
        sea_level: 999,
        grnd_level: 998,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.63,
        deg: 12,
        gust: 6.14,
      },
      visibility: 10000,
      pop: 0.91,
      rain: {
        "3h": 2.29,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-30 21:00:00",
    },
    {
      dt: 1659225600,
      main: {
        temp: 25.73,
        feels_like: 26.89,
        temp_min: 25.73,
        temp_max: 25.73,
        pressure: 998,
        sea_level: 998,
        grnd_level: 996,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.85,
        deg: 34,
        gust: 8.79,
      },
      visibility: 2783,
      pop: 1,
      rain: {
        "3h": 14.65,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-31 00:00:00",
    },
    {
      dt: 1659236400,
      main: {
        temp: 25.84,
        feels_like: 26.99,
        temp_min: 25.84,
        temp_max: 25.84,
        pressure: 999,
        sea_level: 999,
        grnd_level: 997,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.63,
        deg: 15,
        gust: 9.61,
      },
      visibility: 5350,
      pop: 1,
      rain: {
        "3h": 28.09,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-31 03:00:00",
    },
    {
      dt: 1659247200,
      main: {
        temp: 25.62,
        feels_like: 26.77,
        temp_min: 25.62,
        temp_max: 25.62,
        pressure: 997,
        sea_level: 997,
        grnd_level: 996,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.81,
        deg: 9,
        gust: 11.59,
      },
      visibility: 4169,
      pop: 1,
      rain: {
        "3h": 21.81,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-31 06:00:00",
    },
    {
      dt: 1659258000,
      main: {
        temp: 26.19,
        feels_like: 26.19,
        temp_min: 26.19,
        temp_max: 26.19,
        pressure: 998,
        sea_level: 998,
        grnd_level: 996,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.99,
        deg: 353,
        gust: 10.29,
      },
      visibility: 9307,
      pop: 1,
      rain: {
        "3h": 5.34,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-31 09:00:00",
    },
    {
      dt: 1659268800,
      main: {
        temp: 25.67,
        feels_like: 26.8,
        temp_min: 25.67,
        temp_max: 25.67,
        pressure: 999,
        sea_level: 999,
        grnd_level: 997,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 5.82,
        deg: 359,
        gust: 11.45,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.05,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-31 12:00:00",
    },
    {
      dt: 1659279600,
      main: {
        temp: 25.46,
        feels_like: 26.57,
        temp_min: 25.46,
        temp_max: 25.46,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 998,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.76,
        deg: 332,
        gust: 8.32,
      },
      visibility: 10000,
      pop: 0.87,
      rain: {
        "3h": 1.17,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-31 15:00:00",
    },
    {
      dt: 1659290400,
      main: {
        temp: 25.12,
        feels_like: 26.22,
        temp_min: 25.12,
        temp_max: 25.12,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 998,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 3.7,
        deg: 311,
        gust: 8.35,
      },
      visibility: 10000,
      pop: 0.89,
      rain: {
        "3h": 0.88,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-31 18:00:00",
    },
    {
      dt: 1659301200,
      main: {
        temp: 24.85,
        feels_like: 25.92,
        temp_min: 24.85,
        temp_max: 24.85,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 1000,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.57,
        deg: 306,
        gust: 8.75,
      },
      visibility: 10000,
      pop: 0.67,
      rain: {
        "3h": 0.89,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-31 21:00:00",
    },
    {
      dt: 1659312000,
      main: {
        temp: 26.51,
        feels_like: 26.51,
        temp_min: 26.51,
        temp_max: 26.51,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 1001,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 3.31,
        deg: 310,
        gust: 5.91,
      },
      visibility: 10000,
      pop: 0.55,
      rain: {
        "3h": 0.23,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-01 00:00:00",
    },
    {
      dt: 1659322800,
      main: {
        temp: 31.01,
        feels_like: 34.87,
        temp_min: 31.01,
        temp_max: 31.01,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1001,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 2.84,
        deg: 318,
        gust: 3.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-01 03:00:00",
    },
    {
      dt: 1659333600,
      main: {
        temp: 33.25,
        feels_like: 37.41,
        temp_min: 33.25,
        temp_max: 33.25,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 1000,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 25,
      },
      wind: {
        speed: 1.77,
        deg: 327,
        gust: 2.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-01 06:00:00",
    },
    {
      dt: 1659344400,
      main: {
        temp: 29.86,
        feels_like: 34.94,
        temp_min: 29.86,
        temp_max: 29.86,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1000,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 1.75,
        deg: 101,
        gust: 3.12,
      },
      visibility: 10000,
      pop: 0.12,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-01 09:00:00",
    },
    {
      dt: 1659355200,
      main: {
        temp: 27.59,
        feels_like: 31.23,
        temp_min: 27.59,
        temp_max: 27.59,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1002,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 2.88,
        deg: 146,
        gust: 6.23,
      },
      visibility: 10000,
      pop: 0.25,
      rain: {
        "3h": 0.24,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-01 12:00:00",
    },
    {
      dt: 1659366000,
      main: {
        temp: 26.89,
        feels_like: 30.04,
        temp_min: 26.89,
        temp_max: 26.89,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1003,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 2.25,
        deg: 153,
        gust: 6.13,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-01 15:00:00",
    },
    {
      dt: 1659376800,
      main: {
        temp: 26.34,
        feels_like: 26.34,
        temp_min: 26.34,
        temp_max: 26.34,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1002,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 1.69,
        deg: 151,
        gust: 5.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-01 18:00:00",
    },
    {
      dt: 1659387600,
      main: {
        temp: 26.12,
        feels_like: 26.12,
        temp_min: 26.12,
        temp_max: 26.12,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 1.74,
        deg: 131,
        gust: 4.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-01 21:00:00",
    },
    {
      dt: 1659398400,
      main: {
        temp: 29.76,
        feels_like: 35.65,
        temp_min: 29.76,
        temp_max: 29.76,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1004,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 2.86,
        deg: 140,
        gust: 4.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-02 00:00:00",
    },
    {
      dt: 1659409200,
      main: {
        temp: 33.28,
        feels_like: 39.5,
        temp_min: 33.28,
        temp_max: 33.28,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1004,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 25,
      },
      wind: {
        speed: 4.03,
        deg: 138,
        gust: 4.9,
      },
      visibility: 10000,
      pop: 0.06,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-02 03:00:00",
    },
    {
      dt: 1659420000,
      main: {
        temp: 33.52,
        feels_like: 39.38,
        temp_min: 33.52,
        temp_max: 33.52,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1003,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 47,
      },
      wind: {
        speed: 4.95,
        deg: 132,
        gust: 5.81,
      },
      visibility: 10000,
      pop: 0.12,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-02 06:00:00",
    },
    {
      dt: 1659430800,
      main: {
        temp: 31.11,
        feels_like: 37.29,
        temp_min: 31.11,
        temp_max: 31.11,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 40,
      },
      wind: {
        speed: 5.13,
        deg: 129,
        gust: 7.19,
      },
      visibility: 10000,
      pop: 0.09,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-02 09:00:00",
    },
    {
      dt: 1659441600,
      main: {
        temp: 28.41,
        feels_like: 33.89,
        temp_min: 28.41,
        temp_max: 28.41,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1005,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 4.37,
        deg: 126,
        gust: 9.69,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-02 12:00:00",
    },
    {
      dt: 1659452400,
      main: {
        temp: 27.75,
        feels_like: 32.5,
        temp_min: 27.75,
        temp_max: 27.75,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1005,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 29,
      },
      wind: {
        speed: 4.82,
        deg: 133,
        gust: 11.02,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-02 15:00:00",
    },
    {
      dt: 1659463200,
      main: {
        temp: 27.71,
        feels_like: 32.24,
        temp_min: 27.71,
        temp_max: 27.71,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1005,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 4.95,
        deg: 138,
        gust: 11.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-02 18:00:00",
    },
  ],
  city: {
    id: 1796236,
    name: "Shanghai",
    coord: {
      lat: 31.2222,
      lon: 121.458,
    },
    country: "CN",
    population: 14608512,
    timezone: 28800,
    sunrise: 1659042515,
    sunset: 1659091949,
  },
};

export const mockInstanbulWeatherForecast = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1659052800,
      main: {
        temp: 24.42,
        feels_like: 24.85,
        temp_min: 23.47,
        temp_max: 24.42,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 74,
        temp_kf: 0.95,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.68,
        deg: 52,
        gust: 11.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-29 00:00:00",
    },
    {
      dt: 1659063600,
      main: {
        temp: 23.75,
        feels_like: 24.19,
        temp_min: 23.18,
        temp_max: 23.75,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 77,
        temp_kf: 0.57,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.65,
        deg: 53,
        gust: 10.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-29 03:00:00",
    },
    {
      dt: 1659074400,
      main: {
        temp: 25.66,
        feels_like: 25.95,
        temp_min: 25.66,
        temp_max: 25.66,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.9,
        deg: 51,
        gust: 9.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-29 06:00:00",
    },
    {
      dt: 1659085200,
      main: {
        temp: 28.4,
        feels_like: 28.71,
        temp_min: 28.4,
        temp_max: 28.4,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 8.04,
        deg: 47,
        gust: 11.09,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-29 09:00:00",
    },
    {
      dt: 1659096000,
      main: {
        temp: 28.98,
        feels_like: 29.07,
        temp_min: 28.98,
        temp_max: 28.98,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 8.52,
        deg: 41,
        gust: 11.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-29 12:00:00",
    },
    {
      dt: 1659106800,
      main: {
        temp: 27.69,
        feels_like: 28.36,
        temp_min: 27.69,
        temp_max: 27.69,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 8.7,
        deg: 47,
        gust: 12.47,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-29 15:00:00",
    },
    {
      dt: 1659117600,
      main: {
        temp: 25.12,
        feels_like: 25.59,
        temp_min: 25.12,
        temp_max: 25.12,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.81,
        deg: 48,
        gust: 12.45,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-29 18:00:00",
    },
    {
      dt: 1659128400,
      main: {
        temp: 24.42,
        feels_like: 24.95,
        temp_min: 24.42,
        temp_max: 24.42,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.11,
        deg: 45,
        gust: 10.13,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-29 21:00:00",
    },
    {
      dt: 1659139200,
      main: {
        temp: 23.72,
        feels_like: 24.26,
        temp_min: 23.72,
        temp_max: 23.72,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.12,
        deg: 40,
        gust: 9.19,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-30 00:00:00",
    },
    {
      dt: 1659150000,
      main: {
        temp: 23.58,
        feels_like: 24.13,
        temp_min: 23.58,
        temp_max: 23.58,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.84,
        deg: 42,
        gust: 9.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-30 03:00:00",
    },
    {
      dt: 1659160800,
      main: {
        temp: 26.76,
        feels_like: 27.85,
        temp_min: 26.76,
        temp_max: 26.76,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.71,
        deg: 55,
        gust: 9.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-30 06:00:00",
    },
    {
      dt: 1659171600,
      main: {
        temp: 29.61,
        feels_like: 30.35,
        temp_min: 29.61,
        temp_max: 29.61,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 7.61,
        deg: 44,
        gust: 11.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-30 09:00:00",
    },
    {
      dt: 1659182400,
      main: {
        temp: 30.35,
        feels_like: 30.78,
        temp_min: 30.35,
        temp_max: 30.35,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1007,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 7.84,
        deg: 39,
        gust: 10.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-30 12:00:00",
    },
    {
      dt: 1659193200,
      main: {
        temp: 29.06,
        feels_like: 29.62,
        temp_min: 29.06,
        temp_max: 29.06,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 8.04,
        deg: 45,
        gust: 11.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-30 15:00:00",
    },
    {
      dt: 1659204000,
      main: {
        temp: 25.92,
        feels_like: 26.47,
        temp_min: 25.92,
        temp_max: 25.92,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.45,
        deg: 46,
        gust: 11.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-30 18:00:00",
    },
    {
      dt: 1659214800,
      main: {
        temp: 24.67,
        feels_like: 25.36,
        temp_min: 24.67,
        temp_max: 24.67,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.92,
        deg: 41,
        gust: 9.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-30 21:00:00",
    },
    {
      dt: 1659225600,
      main: {
        temp: 24.04,
        feels_like: 24.82,
        temp_min: 24.04,
        temp_max: 24.04,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 4.14,
        deg: 40,
        gust: 9.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-31 00:00:00",
    },
    {
      dt: 1659236400,
      main: {
        temp: 23.73,
        feels_like: 24.51,
        temp_min: 23.73,
        temp_max: 23.73,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 12,
      },
      wind: {
        speed: 3.73,
        deg: 38,
        gust: 9.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-31 03:00:00",
    },
    {
      dt: 1659247200,
      main: {
        temp: 26.98,
        feels_like: 28.43,
        temp_min: 26.98,
        temp_max: 26.98,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 5.42,
        deg: 51,
        gust: 9.04,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-31 06:00:00",
    },
    {
      dt: 1659258000,
      main: {
        temp: 29.9,
        feels_like: 30.9,
        temp_min: 29.9,
        temp_max: 29.9,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 7.64,
        deg: 37,
        gust: 10.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-31 09:00:00",
    },
    {
      dt: 1659268800,
      main: {
        temp: 30.54,
        feels_like: 31.2,
        temp_min: 30.54,
        temp_max: 30.54,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1005,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 8.61,
        deg: 36,
        gust: 12.09,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-31 12:00:00",
    },
    {
      dt: 1659279600,
      main: {
        temp: 29.21,
        feels_like: 29.81,
        temp_min: 29.21,
        temp_max: 29.21,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1004,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 7.86,
        deg: 43,
        gust: 11.86,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-07-31 15:00:00",
    },
    {
      dt: 1659290400,
      main: {
        temp: 26.14,
        feels_like: 26.14,
        temp_min: 26.14,
        temp_max: 26.14,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1005,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.39,
        deg: 53,
        gust: 9.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-31 18:00:00",
    },
    {
      dt: 1659301200,
      main: {
        temp: 25.01,
        feels_like: 25.63,
        temp_min: 25.01,
        temp_max: 25.01,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.5,
        deg: 41,
        gust: 6.35,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-07-31 21:00:00",
    },
    {
      dt: 1659312000,
      main: {
        temp: 24.15,
        feels_like: 24.84,
        temp_min: 24.15,
        temp_max: 24.15,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.1,
        deg: 15,
        gust: 6.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-01 00:00:00",
    },
    {
      dt: 1659322800,
      main: {
        temp: 24.05,
        feels_like: 24.73,
        temp_min: 24.05,
        temp_max: 24.05,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.22,
        deg: 32,
        gust: 7.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-01 03:00:00",
    },
    {
      dt: 1659333600,
      main: {
        temp: 26.67,
        feels_like: 28.11,
        temp_min: 26.67,
        temp_max: 26.67,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.75,
        deg: 38,
        gust: 6.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-01 06:00:00",
    },
    {
      dt: 1659344400,
      main: {
        temp: 29.65,
        feels_like: 30.84,
        temp_min: 29.65,
        temp_max: 29.65,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.89,
        deg: 26,
        gust: 7.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-01 09:00:00",
    },
    {
      dt: 1659355200,
      main: {
        temp: 29.82,
        feels_like: 30.49,
        temp_min: 29.82,
        temp_max: 29.82,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.25,
        deg: 28,
        gust: 8.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-01 12:00:00",
    },
    {
      dt: 1659366000,
      main: {
        temp: 29.49,
        feels_like: 29.67,
        temp_min: 29.49,
        temp_max: 29.49,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.42,
        deg: 41,
        gust: 7.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-01 15:00:00",
    },
    {
      dt: 1659376800,
      main: {
        temp: 26.96,
        feels_like: 27.69,
        temp_min: 26.96,
        temp_max: 26.96,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.6,
        deg: 82,
        gust: 7.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-01 18:00:00",
    },
    {
      dt: 1659387600,
      main: {
        temp: 25.96,
        feels_like: 25.96,
        temp_min: 25.96,
        temp_max: 25.96,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1006,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.89,
        deg: 92,
        gust: 5.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-01 21:00:00",
    },
    {
      dt: 1659398400,
      main: {
        temp: 24.88,
        feels_like: 25.07,
        temp_min: 24.88,
        temp_max: 24.88,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1007,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.86,
        deg: 18,
        gust: 4.72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-02 00:00:00",
    },
    {
      dt: 1659409200,
      main: {
        temp: 23.9,
        feels_like: 24.36,
        temp_min: 23.9,
        temp_max: 23.9,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.14,
        deg: 32,
        gust: 6.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-02 03:00:00",
    },
    {
      dt: 1659420000,
      main: {
        temp: 27.02,
        feels_like: 27.82,
        temp_min: 27.02,
        temp_max: 27.02,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.41,
        deg: 29,
        gust: 6.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-02 06:00:00",
    },
    {
      dt: 1659430800,
      main: {
        temp: 29.44,
        feels_like: 29.98,
        temp_min: 29.44,
        temp_max: 29.44,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.88,
        deg: 23,
        gust: 7.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-02 09:00:00",
    },
    {
      dt: 1659441600,
      main: {
        temp: 29.36,
        feels_like: 30.01,
        temp_min: 29.36,
        temp_max: 29.36,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1008,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 7.9,
        deg: 29,
        gust: 10.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-02 12:00:00",
    },
    {
      dt: 1659452400,
      main: {
        temp: 27.39,
        feels_like: 28.5,
        temp_min: 27.39,
        temp_max: 27.39,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1009,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 7.84,
        deg: 41,
        gust: 10.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-08-02 15:00:00",
    },
    {
      dt: 1659463200,
      main: {
        temp: 24.88,
        feels_like: 25.3,
        temp_min: 24.88,
        temp_max: 24.88,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.4,
        deg: 56,
        gust: 10.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-02 18:00:00",
    },
    {
      dt: 1659474000,
      main: {
        temp: 23.91,
        feels_like: 24.37,
        temp_min: 23.91,
        temp_max: 23.91,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1010,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.23,
        deg: 66,
        gust: 10.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-08-02 21:00:00",
    },
  ],
  city: {
    id: 745044,
    name: "Istanbul",
    coord: {
      lat: 41.0138,
      lon: 28.9497,
    },
    country: "TR",
    population: 11174257,
    timezone: 10800,
    sunrise: 1659063413,
    sunset: 1659115456,
  },
};

export const mockGetWeatherForecastApiHandler = ({
  isThrowingError,
}: {
  isThrowingError: boolean;
}) =>
  rest.get(
    `https://api.openweathermap.org/data/2.5/forecast`,
    (req, res, ctx) => {
      if (isThrowingError) {
        return res(
          ctx.status(500),
          ctx.json({ message: "Internal server error" })
        );
      }
      const lat = req.url.searchParams.get("lat");
      const lon = req.url.searchParams.get("lon");

      // If querying for Shanghai
      if (lat === "31.2222" && lon === "121.458") {
        return res(ctx.status(200), ctx.json(mockShanghaiWeatherForecast));
      }

      // If querying for Istanbul
      if (lat === "41.0138" && lon === "28.9497") {
        return res(ctx.status(200), ctx.json(mockInstanbulWeatherForecast));
      }
      // Use Shanghai as default location if no location is specified
      return res(ctx.status(200), ctx.json(mockShanghaiWeatherForecast));
    }
  );
