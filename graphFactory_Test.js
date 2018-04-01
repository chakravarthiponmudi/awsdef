var GF = require('./graphFactory');
let obj = {
  "subnet-b4b7ebe9": {
    "subnetLogicalName": "PrivateUsEast1bEc2Subnet",
    "subnetName": "10.137.101.0/24-VPCSubnet-us-east-1b",
    "cidrBlock": "10.137.101.0/24",
    "instances": {
      "i-0d1441af5b181e18d": {
        "privateIpAddress": "10.137.101.193",
        "securityGroups": {
          "sg-90b23ce6": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-5e4fc128": {
            "desciption": "Mesos Worker Security Group",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": [
                  "10.206.0.0/24",
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 9090,
                "fromPort": 9090,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-0344ca75": {
            "desciption": "Whole Mesos cluster Security Group",
            "inbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-0344ca75"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-41b13f37": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-0a5f506b7fb57a60b": {
        "privateIpAddress": "10.137.101.221",
        "securityGroups": {
          "sg-90b23ce6": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-0344ca75": {
            "desciption": "Whole Mesos cluster Security Group",
            "inbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-0344ca75"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-41b13f37": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-bf42ccc9": {
            "desciption": "Mesos Master Security Group",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-51b43a27",
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 8080,
                "fromPort": 8080,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 5050,
                "fromPort": 5050,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 8443,
                "fromPort": 8443,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 2181,
                "fromPort": 2181,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 8181,
                "fromPort": 8181,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-51b43a27",
                  "sg-6f41cf19"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      }
    }
  },
  "subnet-28bae307": {
    "subnetLogicalName": "PublicUsEast1dEc2Subnet",
    "subnetName": "10.137.99.0/24-Public-us-east-1d",
    "cidrBlock": "10.137.99.0/24",
    "instances": null
  },
  "subnet-8ae101c0": {
    "subnetLogicalName": "PublicUsEast1aEc2Subnet",
    "subnetName": "10.137.96.0/24-Public-us-east-1a",
    "cidrBlock": "10.137.96.0/24",
    "instances": null
  },
  "subnet-f7e808bd": {
    "subnetLogicalName": "PrivateUsEast1aEc2Subnet",
    "subnetName": "10.137.100.0/24-VPCSubnet-us-east-1a",
    "cidrBlock": "10.137.100.0/24",
    "instances": {
      "i-0e9c650e07b3a4d56": {
        "privateIpAddress": "10.137.100.64",
        "securityGroups": {
          "sg-90b23ce6": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-5e4fc128": {
            "desciption": "Mesos Worker Security Group",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": [
                  "10.206.0.0/24",
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 9090,
                "fromPort": 9090,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-0344ca75": {
            "desciption": "Whole Mesos cluster Security Group",
            "inbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-0344ca75"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-41b13f37": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-0a053adc8bed1761b": {
        "privateIpAddress": "10.137.100.165",
        "securityGroups": {
          "sg-90b23ce6": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-0344ca75": {
            "desciption": "Whole Mesos cluster Security Group",
            "inbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-0344ca75"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-41b13f37": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-bf42ccc9": {
            "desciption": "Mesos Master Security Group",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-51b43a27",
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 8080,
                "fromPort": 8080,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 5050,
                "fromPort": 5050,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 8443,
                "fromPort": 8443,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 2181,
                "fromPort": 2181,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 8181,
                "fromPort": 8181,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-51b43a27",
                  "sg-6f41cf19"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-08d689ad150a7af48": {
        "privateIpAddress": "10.137.100.248",
        "securityGroups": {
          "sg-064b308dccf1aa107": {
            "desciption": "Provides access to Structured Logging services",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-064b308dccf1aa107"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 5044,
                "fromPort": 5044,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 9090,
                "fromPort": 9090,
                "sGroups": [
                  "sg-04290345e844efe54"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 12201,
                "fromPort": 12201,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-014c195deaa7d9ada": {
            "desciption": "Provides external access to Structured Logging services",
            "inbound": [],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-02f47b9ad2741b9b4": {
            "desciption": "Provides ICMP access",
            "inbound": [
              {
                "type": "icmp",
                "toPort": -1,
                "fromPort": -1,
                "sGroups": [],
                "ips": [
                  "192.34.80.0/21",
                  "10.0.0.0/8",
                  "199.168.57.231/32",
                  "162.208.26.233/32",
                  "162.208.26.234/32",
                  "199.168.57.245/32",
                  "162.208.26.232/32",
                  "199.168.57.250/32",
                  "162.208.26.231/32",
                  "103.252.161.0/24",
                  "208.78.140.0/22"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-061c101e70247ccf4": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-0bf55a7972e75b0fd": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-049fab78505b48e35": {
        "privateIpAddress": "10.137.100.211",
        "securityGroups": {
          "sg-064b308dccf1aa107": {
            "desciption": "Provides access to Structured Logging services",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-064b308dccf1aa107"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 5044,
                "fromPort": 5044,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 9090,
                "fromPort": 9090,
                "sGroups": [
                  "sg-04290345e844efe54"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 12201,
                "fromPort": 12201,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-02f47b9ad2741b9b4": {
            "desciption": "Provides ICMP access",
            "inbound": [
              {
                "type": "icmp",
                "toPort": -1,
                "fromPort": -1,
                "sGroups": [],
                "ips": [
                  "192.34.80.0/21",
                  "10.0.0.0/8",
                  "199.168.57.231/32",
                  "162.208.26.233/32",
                  "162.208.26.234/32",
                  "199.168.57.245/32",
                  "162.208.26.232/32",
                  "199.168.57.250/32",
                  "162.208.26.231/32",
                  "103.252.161.0/24",
                  "208.78.140.0/22"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-061c101e70247ccf4": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-0bf55a7972e75b0fd": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-03e1b374fecbf7338": {
        "privateIpAddress": "10.137.100.13",
        "securityGroups": {
          "sg-90b23ce6": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-5e4fc128": {
            "desciption": "Mesos Worker Security Group",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": [
                  "10.206.0.0/24",
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 9090,
                "fromPort": 9090,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-0344ca75": {
            "desciption": "Whole Mesos cluster Security Group",
            "inbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-0344ca75"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-41b13f37": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-0d255513678e78fab": {
        "privateIpAddress": "10.137.100.4",
        "securityGroups": {
          "sg-03ab5d75": {
            "desciption": "Provides Port 53 DNS",
            "inbound": [
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8",
                  "172.28.21.0/24",
                  "172.24.21.0/24",
                  "172.18.21.0/24",
                  "10.8.21.0/24",
                  "172.25.21.0/24"
                ]
              },
              {
                "type": "tcp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.8.21.0/24",
                  "172.18.21.0/24",
                  "10.0.0.0/8",
                  "172.25.21.0/24",
                  "172.24.21.0/24",
                  "172.28.21.0/24"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-1ba7516d": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-18a7516e": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          }
        }
      },
      "i-0afaf6373c17b80ff": {
        "privateIpAddress": "10.137.100.140",
        "securityGroups": {
          "sg-90b23ce6": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-0344ca75": {
            "desciption": "Whole Mesos cluster Security Group",
            "inbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-0344ca75"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-fa48c68c": {
            "desciption": "Service security access for DCOS bootstrap host",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-0344ca75"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-41b13f37": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      }
    }
  },
  "subnet-4283df1f": {
    "subnetLogicalName": "PublicUsEast1bEc2Subnet",
    "subnetName": "10.137.97.0/24-Public-us-east-1b",
    "cidrBlock": "10.137.97.0/24",
    "instances": null
  },
  "subnet-faafa89e": {
    "subnetLogicalName": "PrivateUsEast1cEc2Subnet",
    "subnetName": "10.137.102.0/24-VPCSubnet-us-east-1c",
    "cidrBlock": "10.137.102.0/24",
    "instances": {
      "i-0304c0f51dc93aef8": {
        "privateIpAddress": "10.137.102.157",
        "securityGroups": {
          "sg-064b308dccf1aa107": {
            "desciption": "Provides access to Structured Logging services",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-064b308dccf1aa107"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 5044,
                "fromPort": 5044,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 9090,
                "fromPort": 9090,
                "sGroups": [
                  "sg-04290345e844efe54"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 12201,
                "fromPort": 12201,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-02f47b9ad2741b9b4": {
            "desciption": "Provides ICMP access",
            "inbound": [
              {
                "type": "icmp",
                "toPort": -1,
                "fromPort": -1,
                "sGroups": [],
                "ips": [
                  "192.34.80.0/21",
                  "10.0.0.0/8",
                  "199.168.57.231/32",
                  "162.208.26.233/32",
                  "162.208.26.234/32",
                  "199.168.57.245/32",
                  "162.208.26.232/32",
                  "199.168.57.250/32",
                  "162.208.26.231/32",
                  "103.252.161.0/24",
                  "208.78.140.0/22"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-061c101e70247ccf4": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-0bf55a7972e75b0fd": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-085055765fff1af4a": {
        "privateIpAddress": "10.137.102.184",
        "securityGroups": {
          "sg-90b23ce6": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-0344ca75": {
            "desciption": "Whole Mesos cluster Security Group",
            "inbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-0344ca75"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-41b13f37": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-bf42ccc9": {
            "desciption": "Mesos Master Security Group",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-51b43a27",
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 8080,
                "fromPort": 8080,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 5050,
                "fromPort": 5050,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 8443,
                "fromPort": 8443,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 2181,
                "fromPort": 2181,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 8181,
                "fromPort": 8181,
                "sGroups": [
                  "sg-6f41cf19"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-51b43a27",
                  "sg-6f41cf19"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-0ed85a42960cc6429": {
        "privateIpAddress": "10.137.102.27",
        "securityGroups": {
          "sg-90b23ce6": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-5e4fc128": {
            "desciption": "Mesos Worker Security Group",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": [
                  "10.206.0.0/24",
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 9090,
                "fromPort": 9090,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-0344ca75": {
            "desciption": "Whole Mesos cluster Security Group",
            "inbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-0344ca75"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-41b13f37": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      }
    }
  },
  "subnet-48b8e167": {
    "subnetLogicalName": "PrivateUsEast1dEc2Subnet",
    "subnetName": "10.137.103.0/24-VPCSubnet-us-east-1d",
    "cidrBlock": "10.137.103.0/24",
    "instances": {
      "i-081b463861d5b6340": {
        "privateIpAddress": "10.137.103.110",
        "securityGroups": {
          "sg-90b23ce6": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-5e4fc128": {
            "desciption": "Mesos Worker Security Group",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": [
                  "10.206.0.0/24",
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 9090,
                "fromPort": 9090,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-2e49c758"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-0344ca75": {
            "desciption": "Whole Mesos cluster Security Group",
            "inbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-0344ca75"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-41b13f37": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-01db414771300f020": {
        "privateIpAddress": "10.137.103.98",
        "securityGroups": {
          "sg-064b308dccf1aa107": {
            "desciption": "Provides access to Structured Logging services",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-064b308dccf1aa107"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 5044,
                "fromPort": 5044,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 9090,
                "fromPort": 9090,
                "sGroups": [
                  "sg-04290345e844efe54"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 12201,
                "fromPort": 12201,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-02f47b9ad2741b9b4": {
            "desciption": "Provides ICMP access",
            "inbound": [
              {
                "type": "icmp",
                "toPort": -1,
                "fromPort": -1,
                "sGroups": [],
                "ips": [
                  "192.34.80.0/21",
                  "10.0.0.0/8",
                  "199.168.57.231/32",
                  "162.208.26.233/32",
                  "162.208.26.234/32",
                  "199.168.57.245/32",
                  "162.208.26.232/32",
                  "199.168.57.250/32",
                  "162.208.26.231/32",
                  "103.252.161.0/24",
                  "208.78.140.0/22"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-061c101e70247ccf4": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-0bf55a7972e75b0fd": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-06e1a981dc1131d17": {
        "privateIpAddress": "10.137.103.114",
        "securityGroups": {
          "sg-064b308dccf1aa107": {
            "desciption": "Provides access to Structured Logging services",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [
                  "sg-064b308dccf1aa107"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 5044,
                "fromPort": 5044,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 9090,
                "fromPort": 9090,
                "sGroups": [
                  "sg-04290345e844efe54"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 12201,
                "fromPort": 12201,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [
                  "sg-039697c418efe00ff",
                  "sg-0d39272c4336b9cf1"
                ],
                "ips": []
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-014c195deaa7d9ada": {
            "desciption": "Provides external access to Structured Logging services",
            "inbound": [],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-02f47b9ad2741b9b4": {
            "desciption": "Provides ICMP access",
            "inbound": [
              {
                "type": "icmp",
                "toPort": -1,
                "fromPort": -1,
                "sGroups": [],
                "ips": [
                  "192.34.80.0/21",
                  "10.0.0.0/8",
                  "199.168.57.231/32",
                  "162.208.26.233/32",
                  "162.208.26.234/32",
                  "199.168.57.245/32",
                  "162.208.26.232/32",
                  "199.168.57.250/32",
                  "162.208.26.231/32",
                  "103.252.161.0/24",
                  "208.78.140.0/22"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-061c101e70247ccf4": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-0bf55a7972e75b0fd": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          }
        }
      },
      "i-0e39de11587c614be": {
        "privateIpAddress": "10.137.103.11",
        "securityGroups": {
          "sg-6e60a718": {
            "desciption": "Provides egress for ports 5500/udp and 5550/tcp",
            "inbound": [],
            "outbound": [
              {
                "type": "udp",
                "toPort": 5500,
                "fromPort": 5500,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 5550,
                "fromPort": 5550,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-7865a20e": {
            "desciption": "Provides access from ELB to jump server instances",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "103.252.161.0/24",
                  "208.78.140.0/22",
                  "199.168.56.0/22",
                  "162.208.24.0/22"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          },
          "sg-fd62a58b": {
            "desciption": "Provides egress for ports 8140, 80 and 443",
            "inbound": [],
            "outbound": [
              {
                "type": "tcp",
                "toPort": 80,
                "fromPort": 80,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "10.137.96.0/20"
                ]
              },
              {
                "type": "tcp",
                "toPort": 8140,
                "fromPort": 8140,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 53,
                "fromPort": 53,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "tcp",
                "toPort": 389,
                "fromPort": 389,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              },
              {
                "type": "udp",
                "toPort": 123,
                "fromPort": 123,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              },
              {
                "type": "tcp",
                "toPort": 443,
                "fromPort": 443,
                "sGroups": [],
                "ips": [
                  "0.0.0.0/0"
                ]
              }
            ]
          },
          "sg-216aad57": {
            "desciption": "Provides default SSH access",
            "inbound": [
              {
                "type": "tcp",
                "toPort": 22,
                "fromPort": 22,
                "sGroups": [],
                "ips": [
                  "10.0.0.0/8"
                ]
              }
            ],
            "outbound": [
              {
                "type": "ALL",
                "toPort": "",
                "fromPort": "",
                "sGroups": [],
                "ips": [
                  "127.0.0.1/32"
                ]
              }
            ]
          }
        }
      }
    }
  },
  "subnet-3cb7b058": {
    "subnetLogicalName": "PublicUsEast1cEc2Subnet",
    "subnetName": "10.137.98.0/24-Public-us-east-1c",
    "cidrBlock": "10.137.98.0/24",
    "instances": null
  }
};

let awsArch = new GF();
awsArch.parseVPC({name: "Coding Service", vpc: obj});
console.log(awsArch.toString());