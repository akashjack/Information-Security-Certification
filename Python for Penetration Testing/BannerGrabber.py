#!/usr/bin/python3

import socket

try:
    s = socket.socket()
    ip = input("Please enter the IP: ")
    port = int(input("Please enter the port: "))

    print(f"Attempting to connect to {ip} on port {port}...")
    s.connect((ip, port))
    print("Connection successful!")
    banner = s.recv(1024)
    print(f"Banner: {banner.decode('utf-8')}")
except ConnectionRefusedError:
    print("Error: Connection refused. The target machine may not have a service running on the specified port.")
except socket.error as e:
    print(f"Socket error: {e}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
finally:
    s.close()
