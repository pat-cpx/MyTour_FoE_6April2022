var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.21399254307060644,
        "pitch": -0.0523462177993963,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.17130577403579395,
          "pitch": -0.11095636533636011,
          "rotation": 12.566370614359176,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7348435090105419,
          "pitch": 0.0931675677778383,
          "title": "Hello!",
          "text": "Welcome to NUS Faculty of Engineering!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.15025008343254953,
        "pitch": -0.22247142564744316,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.00738482539208718,
          "pitch": -0.05648832632500955,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.8443008343169431,
          "pitch": 0.1990006250121077,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4654917080576233,
          "pitch": -0.5269691996176444,
          "title": "Oohh",
          "text": "so this is Faculty of Engineering huh?"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.7063548508733675,
        "pitch": 0.05029076379380015,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.6746123809897817,
          "pitch": 0.38343575031552923,
          "rotation": 18.06415775814132,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7202266379281514,
          "pitch": -0.009966825236872978,
          "title": "Cuppa for you?",
          "text": ""
        },
        {
          "yaw": -0.061650187139617785,
          "pitch": 0.24163848467182092,
          "title": "Seems comfortable...",
          "text": "Wah good place to sleep, errr, i mean study!"
        }
      ]
    }
  ],
  "name": "NUS Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
